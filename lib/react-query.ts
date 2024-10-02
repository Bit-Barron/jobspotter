import { QueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";

export const getQueryClient = () => new QueryClient();

export const QueryClientContext = createContext<QueryClient | null>(null);

export const useQueryClient = () => {
  const client = useContext(QueryClientContext);
  if (!client) {
    throw new Error("useQueryClient must be used within a QueryClientProvider");
  }
  return client;
};
