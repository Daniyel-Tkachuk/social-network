import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {StoreContext} from "./context/storeContext";

const rerenderEntireThee = () => {
   ReactDOM.render(
      <BrowserRouter>
         <StoreContext.Provider value={store}>
            <App />
         </StoreContext.Provider>
      </BrowserRouter>,
      document.getElementById('root')
   );
}

rerenderEntireThee();

store.subscribe(rerenderEntireThee);