import { useContext } from "react";
import { nameContext } from "../context/NameContext";

export function useNameContext() {

    const context = useContext(nameContext);

    if (context===undefined) throw new Error('Context was used Outside of a provider')

        return context
}