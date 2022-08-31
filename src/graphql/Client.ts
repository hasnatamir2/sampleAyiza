import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import {  toast } from 'react-toastify'
 

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
      toast.error(message)
    })
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = from([errorLink, new HttpLink({ uri: process.env.BASE_URL })])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
