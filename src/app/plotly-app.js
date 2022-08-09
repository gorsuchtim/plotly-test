import React from "react";
import ReactDOM from "react-dom";

import PartnerInjection from "../js/react/apps/partner-injection";

const appContainer = document.querySelector("[data-app='plotly-app']");

const PlotlyApp = () => <PartnerInjection />;

ReactDOM.render(<PlotlyApp />, appContainer);
