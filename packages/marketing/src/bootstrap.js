import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDom.render(<App />, el);
};

//  if we are in dev & in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// we are with container
// and we should export the mount function
export { mount };
