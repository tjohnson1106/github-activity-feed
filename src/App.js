import React from "react";
import { createGlobalStyle } from "styled-components";
import "styled-components/macro";

import Login from "./components/Login";

const Global = createGlobalStyle({
  body: {
    backgroundColor: "#fff",
    color: "#444",
    fontFamily: "helvetica",
    padding: 0,
    margin: 0,
    borderTop: "4px solid rgb(210, 54, 105)"
  },
  "*": {
    boxSizing: "border-box"
  }
});

function App() {
  return (
    <>
      <Global />
      <Login />
      <div css={{ color: "blue" }}>Github Search</div>
    </>
  );
}

export default App;
