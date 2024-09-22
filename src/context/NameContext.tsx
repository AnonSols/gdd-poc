import { createContext, ReactNode, useState } from "react";
import { NameContextProtocol } from "../types";

export const NameContext = createContext<undefined | NameContextProtocol>(
  undefined
);

export function NameContextProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState("Ubeath's");

  return (
    <NameContext.Provider value={{ userName, setUserName }}>
      {children}
    </NameContext.Provider>
  );
}
