import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import statesData from "./us-states.js"; // Assuming us-states.js exports the GeoJSON data
import { useSelector, useDispatch } from "react-redux";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
// import { MarkerClusterGroup } from 'leaflet.markercluster';



function MapComponent() {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.displayIds["display_ids"]);
  // console.log(count);
  useEffect(() => {
    if (!count) return;
    if (!mapRef.current) return;

    var map = L.map(mapRef.current).setView([37.8, -96], 4);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        id: "mapbox.light",
      }
    ).addTo(map);


    // control that shows state info on hover
    var info = L.control();

    info.onAdd = function (map) {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };

    info.update = function (props) {
      this._div.innerHTML =
        (props
          ? "<b>" +
            props.name +
            "</b><br />"
          : "Hover over a state");
    };

    info.addTo(map);

    // get color depending on population density value
    function getColor(d) {
      return  "gray"
    }
  //   function displaceMarkers(facilities) {
  //     const displacementDistance = 0.1; // Adjust based on zoom level or other criteria
  //     console.log(facilities);
  //     let updatedFacilities = [];
  //     let newLat, newLng;
      
  //     facilities.forEach((facility, index) => {
  //       // console.log(facility);
  //         newLat = facility.Latitude;
  //         newLng = facility.Longitude;
  //         try {
  //         facilities.forEach((otherFacility, otherIndex) => {
  //           // console.log(otherFacility)
  //             if (index !== otherIndex) {
  //               // console.log(otherFacility)
  //                 const distance = map.distance([facility.Latitude, facility.Longitude], [otherFacility.Latitude, otherFacility.Longitude]);
  //                 console.log(distance)
  //                 if (distance < 100000) { // 5 km threshold, adjust as needed
  //                     // Example displacement logic - adjust as necessary for your use case
  //                     console.log("displacement")
  //                     // newLat += (Math.random() -0.5) * displacementDistance;
  //                     // newLng += (Math.random() -0.5) * displacementDistance;
  //                 }
  //             }
  //         });
  //       } catch (err) {
  //       }
  //         updatedFacilities.push({id: facility.id, Latitude: newLat, Longitude: newLng});
  //     });
    
  //     console.log(updatedFacilities)
  
  //     return updatedFacilities;
  // }
  // var displacedFacilities = displaceMarkers(count);

  var hubSitesIcon = L.icon({
    iconUrl: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png',
    iconSize: [38, 95], // size of the icon
    // specify the anchor where the icon's "tip" should be
    iconAnchor: [22, 94],
    // and the anchor of the popup
    popupAnchor: [-3, -76]
  });
// Add displaced markers to the map
count.forEach(facility => {
  // console.log(facility)
  
  try {
    if (facility["facility_name"].includes("Hub Sites")) L.marker([facility.Latitude, facility.Longitude], {icon: hubSitesIcon}).addTo(map);
    else if (facility["division_name"].includes("Supply Chain")) console.log("Awdwadwad2");
    else if (facility["division_name"].includes("HSC")) console.log("Awdwadwad22");
    // console.log(item);
    else L.marker([facility.Latitude, facility.Longitude]).addTo(map);

  } catch (err) {
    // console.error(err);
  }
    
});
    // count.forEach((item) => {
    //   try {
    //     // console.log(item);
    //     L.marker([item.Latitude, item.Longitude]).addTo(map);
    //   } catch (err) {
    //     // console.error(err);
    //   }
    // });
    

    function style(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density),
      };
    }

    function highlightFeature(e) {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7,
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
        click: zoomToFeature,
      });
    }

    geojson = L.geoJson(statesData, {
      style: style,
      onEachFeature: onEachFeature,
    }).addTo(map);

    map.attributionControl.addAttribution(
      'Population data &copy; <a href="http://census.gov/">US Census Bureau</a>'
    );

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
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
  }, [count]);
  return (
    <div
      ref={mapRef}
      style={{ height: "900px", width: "1300px", backgroundColor: "#F9FAFB" }}
    />
  );
}

export default MapComponent;
