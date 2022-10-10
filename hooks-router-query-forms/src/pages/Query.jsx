import React from "react";
import Characters from "../components/characters/Characters";
import { QueryClient, QueryClientProvider } from "react-query";
import "../Query.css"

const queryClient = new QueryClient();

function Query() {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}

export default Query;
