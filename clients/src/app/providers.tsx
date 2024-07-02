'use client'

import { graphqlClient } from "../graphql/gql.setup";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={graphqlClient}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ApolloProvider>

  )
}