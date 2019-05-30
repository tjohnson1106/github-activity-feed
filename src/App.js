import React from "react";
import { createGlobalStyle } from "styled-components";
import "styled-components/macro";

const Global = createGlobalStyle({
  body: {
    backgroundColor: "#fff"
  },
  "*": {
    boxSizing: "border-box"
  }
});

function App() {
  return (
    <>
      <Global />
      <div css={{ color: "blue" }}>Github Search</div>
    </>
  );
}

export default App;
