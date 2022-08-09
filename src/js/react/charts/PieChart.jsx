import React from "react";
import Plot from "react-plotly.js";

/*
we need to dynamically pass in multiple possible values for each chart
for this particular layout of a pie chart we'd need:
colors, values, labels, width, height

font sizes, colors, and family can be set at the parent layout level in the /partners folder or in a config
(if we decide to go that far with those values)

*/

const PieChart = () => (
  <Plot
    data={[
      {
        type: "pie",
        marker: {
          colors: ["blue", "purple", "pink"],
        },
        values: [20, 30, 50],
        labels: ["Worst", "Better", "Best"],
      },
    ]}
    layout={{
      width: 1200,
      height: 640,
      title: {
        font: {
          color: "purple",
          family: "Droid Sans",
          size: 48,
        },
        text: "Mmmm... pie",
      },
    }}
  />
);

export default PieChart;
