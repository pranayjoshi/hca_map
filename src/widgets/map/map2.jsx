import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import statesData from './us-states.js'; // Assuming us-states.js exports the GeoJSON data

function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    var map = L.map(mapRef.current).setView([37.8, -96], 4);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        id: "mapbox.light"
      }
    ).addTo(map);
  
      // control that shows state info on hover
      var info = L.control();
  
      info.onAdd = function(map) {
        this._div = L.DomUtil.create("div", "info");
        this.update();
        return this._div;
      };
  
      info.update = function(props) {
        this._div.innerHTML =
          "<h4>US Population Density</h4>" +
          (props
            ? "<b>" +
              props.name +
              "</b><br />" +
              props.density +
              " people / mi<sup>2</sup>"
            : "Hover over a state");
      };
  
      info.addTo(map);
  
      // get color depending on population density value
      function getColor(d) {
        return d > 1000
          ? "#800026"
          : d > 500
            ? "#BD0026"
            : d > 200
              ? "#E31A1C"
              : d > 100
                ? "#FC4E2A"
                : d > 50
                  ? "#FD8D3C"
                  : d > 20 ? "#FEB24C" : d > 10 ? "#FED976" : "#FFEDA0";
      }
      L.marker([37.8, -96]).addTo(map);
  
      function style(feature) {
        return {
          weight: 2,
          opacity: 1,
          color: "white",
          dashArray: "3",
          fillOpacity: 0.7,
          fillColor: getColor(feature.properties.density)
        };
      }
  
      function highlightFeature(e) {
        var layer = e.target;
  
        layer.setStyle({
          weight: 5,
          color: "#666",
          dashArray: "",
          fillOpacity: 0.7
        });
  
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          layer.bringToFront();
        }
  
        info.update(layer.feature.properties);
      }
  
      var geojson;
  
      function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
      }
  
      function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
      }
  
      function onEachFeature(feature, layer) {
        layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight,
          click: zoomToFeature
        });
      }
  
      geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeature
      }).addTo(map);
  
      map.attributionControl.addAttribution(
        'Population data &copy; <a href="http://census.gov/">US Census Bureau</a>'
      );
  
      var legend = L.control({ position: "bottomright" });
  
      legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "info legend"),
          grades = [0, 10, 20, 50, 100, 200, 500, 1000],
          labels = [],
          from,
          to;
  
        for (var i = 0; i < grades.length; i++) {
          from = grades[i];
          to = grades[i + 1];
  
          labels.push(
            '<i style="background:' +
              getColor(from + 1) +
              '"></i> ' +
              from +
              (to ? "&ndash;" + to : "+")
          );
        }
  
        div.innerHTML = labels.join("<br>");
        return div;
      };
  
      legend.addTo(map);
      return () => {
        map.remove();
      };
    }, []);
    return (
        <div ref={mapRef} style={{ height: "900px", width: "1300px", backgroundColor: "white" }} />
      );
}

export default MapComponent;