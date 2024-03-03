import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import us from './states-albers-10m.json'; // adjust the path to your json file

function MapFunc() {
  const ref = useRef();

  useEffect(() => {
    console.log("wdawda")
    const svg = d3.select(ref.current);
    const width = 978;
    const height = 610;


    svg.attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto;")
      .on("click", reset);

    const path = d3.geoPath();

    const g = svg.append("g");

    const states = g.append("g")
      .attr("fill", "#444")
      .attr("cursor", "pointer")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .join("path")
      .on("click", clicked)
      .attr("d", path);

    states.append("title")
      .text(d => d.properties.name);

    g.append("path")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));

    

    const projection = d3.geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(1000);

    // Define pointer coordinates
    const pointers = [
        [-75.1652, 39.9526], // Philadelphia, PA
        [-118.2437, 34.0522], // Los Angeles, CA
        [-95.3698, 29.7604] // Houston, TX
        // Add more coordinates as needed
      ];
  
      // Function to add pointers
      const addPointers = () => {
        svg.selectAll("circle")
          .data(pointers)
          .join("circle")
          .attr("cx", d => projection(d)[0])
          .attr("cy", d => projection(d)[1])
          .attr("r", 5)
          .style("fill", "blue");
      };
  
      // Add pointers initially
      addPointers();
  
      // Define zoom behavior
      const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on("zoom", zoomed);
  
      // Apply zoom behavior to SVG
      svg.call(zoom);

    function reset() {
      states.transition().style("fill", null);
      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity,
        d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
      );
    }
  
      // Zoom function
      function zoomed(event) {
        const {transform} = event;
        svg.selectAll("path").attr("transform", transform);
        svg.selectAll("circle").attr("transform", transform);
      }
      function clicked(event, d) {
        const [[x0, y0], [x1, y1]] = path.bounds(d);
      
        // Get the pointers within the clicked state
        const pointersInState = pointers.filter(p => d3.geoContains(d, projection.invert(p)));
      
        // Get the bounds of the pointers
        const pointerBounds = pointersInState.reduce((bounds, p) => {
          return [
            [Math.min(bounds[0][0], p[0]), Math.min(bounds[0][1], p[1])],
            [Math.max(bounds[1][0], p[0]), Math.max(bounds[1][1], p[1])]
          ];
        }, [[x0, y0], [x1, y1]]);
      
        event.stopPropagation();
        states.transition().style("fill", null);
        d3.select(this).transition().style("fill", "red");
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(Math.min(8, 0.9 / Math.max((pointerBounds[1][0] - pointerBounds[0][0]) / width, (pointerBounds[1][1] - pointerBounds[0][1]) / height)))
            .translate(-(pointerBounds[0][0] + pointerBounds[1][0]) / 2, -(pointerBounds[0][1] + pointerBounds[1][1]) / 2),
          d3.pointer(event, svg.node())
        );
      }

    function zoomed(event) {
      const {transform} = event;
      g.attr("transform", transform);
      g.attr("stroke-width", 1 / transform.k);
    }
  }, []);

  return (
    <div className='border border-gray-500 rounded-lg'>
    <svg ref={ref}></svg>
    </div>
  )
   
}

export default MapFunc;