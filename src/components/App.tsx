import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.css";

import Routes from "./Routes";
import "./../assets/scss/App.scss";

export const App = (): Router => {
  return <Routes />;
};
