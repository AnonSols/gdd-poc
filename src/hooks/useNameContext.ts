import { useContext } from "react";
import { NameContext  } from "../context/NameContext";

export function useNameContext() {

    const context = useContext(NameContext);

    if (context===undefined) throw new Error('Context was used Outside of a provider')

        return context
}