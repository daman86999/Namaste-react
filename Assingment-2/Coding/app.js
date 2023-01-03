import React from "react";
import ReactDOM from "react-dom/client";

const helloReact = React.createElement("h1", {}, "Hello World in React");
const rootForReact = ReactDOM.createRoot(
  document.getElementById("rootForReact")
);
rootForReact.render(helloReact);
