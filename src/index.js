import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// import bootstrap from 'bootstrap'
/* import { configureStore } from "redux"; */
import { Provider } from "react-redux";

/* const store = configureStore(); */

ReactDOM.createRoot(document.getElementById("root")).render(
  /*  <Provider store={store}> */
    <BrowserRouter>
      <App />
    </BrowserRouter>
  /*  </Provider> */
);
