import React from "react";

import "styled-components/macro";

import { Button } from "./ui/Button";

const Login = () => {
  return (
    <section
      css={{
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 4px)",
        fontFamily: "monospace",
        padding: "0 16px"
      }}
    >
      <form
        css={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1
          css={{
            color: "rgb(210, 54, 105)",
            textAlign: "center",
            fontSize: 48,
            marginTop: 12
          }}
        >
          Git Feed
        </h1>
      </form>
    </section>
  );
};

export default Login;
