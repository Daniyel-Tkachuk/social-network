import React, {createContext, FC} from "react";
import {StoreType} from "../store/store";

export const StoreContext = createContext({} as StoreType);

export const Provider: FC<ProviderProps> = ({store, children}) => {

   return (
      <StoreContext.Provider value={store}>
         {children}
      </StoreContext.Provider>
   )
}

type ProviderProps = {
   store: StoreType
   children: React.ReactNode
}

