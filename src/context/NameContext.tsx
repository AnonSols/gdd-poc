import { createContext, ReactNode, useState } from "react";
import { NameContextProtocol } from "../types";

export const NameContext = createContext<null|NameContextProtocol>(null)


export function NameContextProvider({children}:{children:ReactNode}) {
    const [userName,  setUserName] = useState('Ubeath')


    return (
        <NameContext.Provider value={{userName, setUserName}}>
{children}
        </NameContext.Provider>
    )
}
