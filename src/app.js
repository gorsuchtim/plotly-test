import React from "react";
import ReactDOM from "react-dom";

import AppInline from "./js/react/apps/app-inline";

const appContainer = document.querySelector("[data-app]");

const ChameleonApp = () => <AppInline />;

ReactDOM.render(<ChameleonApp />, appContainer);
