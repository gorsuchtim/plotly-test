import React from "react";
import Plot from "react-plotly.js";

const ScatterGraph = () => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
      ]}
      layout={{ width: 1200, height: 640, title: "A Fancy Plot" }}
    />
  );
};
export default ScatterGraph;
