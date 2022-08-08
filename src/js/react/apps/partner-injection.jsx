import React, { Suspense } from "react";

// Partner Imports List
const Default = React.lazy(() => import("../partners/default/Default"));
const Concert = React.lazy(() => import("../partners/concert/Concert"));

// Default Fallback View
const DEFAULT_LAYOUT = "default";

// Hard coded fake value coming in from the window object or log in auth
const FAKE_OBJ_VALUE = "concert";

// Layouts Object to select layout to inject based on which partner is accessing the app
const partnerLayouts = {
  default: Default,
  concert: Concert,
};

const PartnerToRender =
  partnerLayouts[FAKE_OBJ_VALUE] || partnerLayouts[DEFAULT_LAYOUT];

const ChameleonInline = () => (
  <Suspense>
    <PartnerToRender />
  </Suspense>
);

export default ChameleonInline;
