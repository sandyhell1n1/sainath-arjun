import './Chart.scss';
import React from 'react';
import * as d3 from 'd3';




function Svg(props){

let data = props.data

let width = 222;
let height = 400;

const drawChart=function (data) {
  const svg = d3.select("#chart")
                .attr("width", width)
                .attr("height", height)
                .style("border", "none")

  var selection = svg.selectAll("rect").data(data);

  var yScale = d3.scaleLinear()
                 .domain([0, d3.max(data)])
                 .range([0, height-100]);

  selection
        .transition().duration(300)
        .attr("height", (d) => yScale(d))
        .attr("y", (d) => height - yScale(d))

  selection
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 45)
        .attr("y", (d) => height)
        .attr("width", 40)
        .attr("height", 0)
        .attr("fill", "orange")
        .transition().duration(300)
        .attr("height", (d) => yScale(d))
        .attr("y", (d) => height - yScale(d))
    
  selection
        .exit()
        .transition().duration(300)
        .attr("y", (d) => height)
        .attr("height", 0)
        .remove()
}

React.useEffect(
  ()=>{
    drawChart(data)
  },[data]
)

return(
  <svg id="chart"></svg> 
)
}

export default Svg;
