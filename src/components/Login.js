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
        <input
          type="password"
          name="token"
          value=""
          onChange={(e) => {}}
          placeholder="Please paste your Github token"
          css={{
            marginBottom: 16,
            borderRadius: 4,
            fontSize: 18,
            fontFamily: "monospace",
            padding: "8px 16px",
            border: "1px solid #424242",
            boxShadow: "none",
            width: "100%",
            "&:focus &:hover": {
              borderColor: "rgb(210, 54, 105)"
            }
          }}
        />
        <Button
          css={{
            width: "100%",
            fontFamily: "monospace"
          }}
        />
      </form>
    </section>
  );
};

export default Login;
