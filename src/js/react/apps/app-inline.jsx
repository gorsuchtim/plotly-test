import React, { Suspense } from "react";

// Layout Options List
const Featured = React.lazy(() => import("../layouts/Featured"));
const Alternate = React.lazy(() => import("../layouts/Alternate"));
const ScatterChart = React.lazy(() => import("../layouts/ScatterChart"));
const PieChart = React.lazy(() => import("../layouts/PieChart"));

// Default Fallback View
const DEFAULT_LAYOUT = "featured";

// Hard coded fake value coming in from the window object
const FAKE_OBJ_VALUE = "pie-chart";

// Layouts Object to select view to render
const layouts = {
  featured: Featured,
  alternate: Alternate,
  "scatter-chart": ScatterChart,
  "pie-chart": PieChart,
};

const LayoutToRender = layouts[FAKE_OBJ_VALUE] || layouts[DEFAULT_LAYOUT];

const ChameleonInline = () => (
  <Suspense>
    <LayoutToRender />
  </Suspense>
);

export default ChameleonInline;
