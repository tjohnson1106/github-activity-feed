import React from "react";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createGlobalStyle } from "styled-components";

import "styled-components/macro";

import Login from "./components/Login";
import SideBar from "./components/SideBar";

const accessToken = localStorage.getItem("token");

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer${accessToken}`
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

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
      {accessToken ? (
        <ApolloProvider client={client}>
          <SideBar />
        </ApolloProvider>
      ) : (
        <Login />
      )}

      <div css={{ color: "blue" }}>Github Search</div>
    </>
  );
}

export default App;
