import React from "react";
import Plot from "react-plotly.js";

const PieChart = () => {
  return (
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
};
export default PieChart;
