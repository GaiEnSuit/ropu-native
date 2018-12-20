// State
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const cient = new ApolloClient({
  uri: "Placeholder",
  headers: {
    "X-Shopify-Storefront-Access-Token": "placeholder"
  }
})

export default cient
