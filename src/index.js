import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/index";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </CookiesProvider>
  </BrowserRouter>
)
