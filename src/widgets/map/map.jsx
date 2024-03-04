import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import statesData from "./us-states.js"; // Assuming us-states.js exports the GeoJSON data
import { useSelector, useDispatch } from "react-redux";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import Details from "../details/details.jsx";
import { setTempData } from "../../state/slice";
// import 'leaflet.markercluster';
// import { MarkerClusterGroup } from 'leaflet.markercluster';

function MapComponent() {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.displayIds["display_ids"]);
  // console.log(count);
  useEffect(() => {
    if (!count) return;
    if (!mapRef.current) return;

    var map = L.map('map', {
      maxZoom: 13
    }).setView([39.50, -98.35], 4.6);
    
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        id: "mapbox.light",
      }
    ).addTo(map);
    var info = L.control();

    info.onAdd = function (map) {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };

    info.update = function (props) {
      this._div.innerHTML = props
        ? "<b>" + props.name + "</b><br />"
        : "Hover over a state";
    };

    info.addTo(map);

    // get color depending on population density value
    function getColor(d) {
      return "gray";
    }
    // function distanceTo(lat1, lon1, lat2, lon2) {
    //   const R = 6371e3; // Earth's radius in meters
    //   const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    //   const φ2 = (lat2 * Math.PI) / 180;
    //   const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    //   const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    //   const a =
    //     Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    //     Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    //   const distance = R * c /1000; // in meters
    //   return distance;
    // }
    // function kMeansClustering(markers, k) {
    //   // Step 1: Initialize k cluster centers randomly
    //   let centers = markers
    //     .map(marker => [marker.Latitude, marker.Longitude])
    //     .sort(() => Math.random() - 0.5)
    //     .slice(0, k);
    
    //   let assignments;
    //   let oldAssignments;
    
    //   do {
    //     // Step 2: Assign each marker to the cluster that has the closest center
    //     oldAssignments = assignments;
    //     assignments = markers.map(marker => {
    //       const distances = centers.map(
    //         ([lat, lng]) => Math.pow(marker.Latitude - lat, 2) + Math.pow(marker.Longitude - lng, 2)
    //       );
    //       return distances.indexOf(Math.min(...distances));
    //     });
    
    //     // Step 3: Recalculate the cluster centers as the mean of all markers in the cluster
    //     centers = centers.map((_, i) => {
    //       const assignedMarkers = markers.filter((_, j) => assignments[j] === i);
    //       const latSum = assignedMarkers.reduce((sum, marker) => sum + marker.Latitude, 0);
    //       const lngSum = assignedMarkers.reduce((sum, marker) => sum + marker.Longitude, 0);
    //       return [latSum / assignedMarkers.length, lngSum / assignedMarkers.length];
    //     });
    //   } while (assignments?.toString() !== oldAssignments?.toString()); // Step 4: Repeat until assignments no longer change
    
    //   return assignments;
    // }

    // function scatterMarkers(markers, zoomLevel) {
    //   const scatterFactor = Math.pow(2, (13 - zoomLevel)); // Adjust the scatter factor based on your needs
    
    //   return markers.map((marker, index) => {
    //     const newMarker = { ...marker };
    //     // console.log(Number(newMarker.Latitude))
    //     newMarker.Latitude = ( Number(newMarker.Latitude) ? newMarker.Latitude + (index % 2 === 0 ? 1 : -1) * scatterFactor * ( Math.random() + 0.5) : newMarker.Latitude);
    //     newMarker.Longitude = (typeof newMarker.Longitude === 'number') ? newMarker.Longitude + (index % 2 === 0 ? -1 : 1) * scatterFactor * ( Math.random() + 0.5) : newMarker.Longitude;
    //     console.log(newMarker)
    //     try {
    //       if (newMarker.Latitude.toString().slice(-3) === "NaN") {
    //         newMarker.Latitude = newMarker.Latitude.toString().slice(0, -3);
    //       }
    //       if (newMarker.Longitude.toString().slice(-3) === "NaN") {
    //         newMarker.Longitude = newMarker.Longitude.toString().slice(0, -3);
    //       }
    //     }catch (err) {}
        
    //     return newMarker;
    //   });
    // }



    
    // map.on('zoomend', () => {
    //   const zoomLevel = map.getZoom();
    //   const scatteredMarkers = scatterMarkers(this.state.markers, zoomLevel);
    //   this.setState({ markers: scatteredMarkers });
    // });
    // Get the coordinates of the markers
    // var te = kMeansClustering(count);
    // console.log(te);
    // var displacedFacilities = scatterMarkers(count);
    // console.log(displacedFacilities);

    var ic1 = L.icon({
      iconUrl:
        "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/1.png?raw=true",
        iconSize: [38, 40], // size of the icon
        // specify the anchor where the icon's "tip" should be
        iconAnchor: [19, 40], // middle of the icon's width and its height
        // and the anchor of the popup
        popupAnchor: [0, -40], // above the icon
    });
    var ic2 = L.icon({
      iconUrl:
        "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/2.png?raw=true",
        iconSize: [38, 40], // size of the icon
        // specify the anchor where the icon's "tip" should be
        iconAnchor: [19, 40], // middle of the icon's width and its height
        // and the anchor of the popup
        popupAnchor: [0, -40], 
    });
    var ic3 = L.icon({
      iconUrl:
        "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/3.png?raw=true",
        iconSize: [38, 40], // size of the icon
        // specify the anchor where the icon's "tip" should be
        iconAnchor: [19, 40], // middle of the icon's width and its height
        // and the anchor of the popup
        popupAnchor: [0, -40], 
    });
    var ic4 = L.icon({
      iconUrl:
        "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/4.png?raw=true",
        iconSize: [38, 40], // size of the icon
        // specify the anchor where the icon's "tip" should be
        iconAnchor: [19, 40], // middle of the icon's width and its height
        // and the anchor of the popup
        popupAnchor: [0, -40], 
    });
    const displacement = 0.5; // Adjust this value as needed
const markersWithDisplacement = count.map((marker, index) => {
  const angle = (index / (count.length / 2)) * Math.PI; // Distribute markers evenly around the circle
  const dx = displacement * Math.cos(angle);
  const dy = displacement * Math.sin(angle);
  return {
    ...marker,
    Latitude: Number(marker.Latitude) + dy,
    Longitude: Number(marker.Longitude) + dx,
  };
});

// markersWithDisplacement.forEach((marker) => {
//   L.marker([marker.Latitude, marker.Longitude]).addTo(map);
// });
    // Add displaced markers to the map
    count.forEach((facility) => {
      console.log(facility)

      try {
        if (facility["facility_name"].includes("Hub Sites"))
          L.marker([facility.Latitude, facility.Longitude], { icon: ic3 })
            .addTo(map)
            .bindTooltip(
              `<b>${facility.facility_name}</b><br />${facility.division_name} (${facility.facility_state})`
            ).on("click", function (e) {
              // console.log(`Marker clicked: ${facility.id}`);
              dispatch(setTempData(facility));
            })
            .on("click", function (e) {
              map.flyTo(e.latlng, 7);
            });
        else if (facility["division_name"].includes("Supply Chain"))
          L.marker([facility.Latitude, facility.Longitude], { icon: ic2 })
            .addTo(map)
            .bindTooltip(
              `<b>${facility.facility_name}</b><br />${facility.division_name} (${facility.facility_state})`
            ).on("click", function (e) {
              // console.log(`Marker clicked: ${facility.id}`);
              dispatch(setTempData(facility));
            })
            .on("click", function (e) {
              map.flyTo(e.latlng, 7);
            });
        else if (facility["division_name"].includes("HSC"))
          L.marker([facility.Latitude, facility.Longitude], { icon: ic1 })
            .addTo(map)
            .bindTooltip(
              `<b>${facility.facility_name}</b><br />${facility.division_name} (${facility.facility_state})`
            ).on("click", function (e) {
              // console.log(`Marker clicked: ${facility.id}`);
              dispatch(setTempData(facility));
            })
            .on("click", function (e) {
              map.flyTo(e.latlng, 7);
            });
        // console.log(item);
        else
          L.marker([facility.Latitude, facility.Longitude])
            .addTo(map)
            .bindTooltip(
              `<b>${facility.facility_name}</b><br />${facility.division_name} (${facility.facility_state})`
            )
            .on("click", function (e) {
              // console.log(`Marker clicked: ${facility.id}`);
              dispatch(setTempData(facility));
            })
            .on("click", function (e) {
              map.flyTo(e.latlng, 7);
            });
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
        weight: 3,
        color: "red",
        dashArray: "",
        fillOpacity: 0.7,
        fillColor: "red",
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

    // map.attributionControl.addAttribution(
    //   'Population data &copy; <a href="http://census.gov/">US Census Bureau</a>'
    // );

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
      var div = L.DomUtil.create("div", "info legend flex text-xl"),
        grades = ["Division Office", "Supply Chain", "Hub Sites", "Hospitals"],
        labels = [],
        from,
        to;

        const icons = [
          {
            url: "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/1.png?raw=true",
            label: "Label 1"
          },
          {
            url: "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/2.png?raw=true",
            label: "Label 2"
          },
          {
            url: "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/3.png?raw=true",
            label: "Label 3"
          },
          {
            url: "https://github.com/pranayjoshi/hca_map/blob/master/src/assets/4.png?raw=true",
            label: "Label 4"
          },
        ];
        for (var i = 0; i < grades.length; i++) {
          from = grades[i];
          to = grades[i + 1];
        
          labels.push(
            '<img src="' +
              icons[i].url +
              '" style="width: 16px; height: 16px;"> ' +
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
    <div id="map"
      ref={mapRef}
      style={{ height: "650px", width: "1000px", backgroundColor: "#F9FAFB" }}
      className="rounded-xl shadow-xl"
    />
  );
}

export default MapComponent;
