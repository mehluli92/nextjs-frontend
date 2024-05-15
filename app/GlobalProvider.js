'use client';

import { Global } from "@/context/GlobalContext";

function GlobalProvider({children}){
    return(
        <Global>
            {children}
        </Global>
    )
}

export default GlobalProvider;