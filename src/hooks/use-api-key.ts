import { createContext, useContext } from "react";
interface ApiKeyContextType {
  apiKey: string;
  setApiKey: (key: string) => void;
}

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

export function useApiKey(): ApiKeyContextType {
  const context = useContext(ApiKeyContext);
  if (!context) {
    throw new Error("useApiKey must be used within an ApiKeyProvider");
  }
  return context;
}

export { ApiKeyContext };
