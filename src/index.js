import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ApolloProvider,createHttpLink,ApolloClient,InMemoryCache} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const BASE_URL = 'https://api.github.com/graphql';

const httpLink = createHttpLink({
  uri: BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: "bearer 4a1f5087536ff4eea8800bba90901e82cf036805",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,

  document.getElementById("root")
);

