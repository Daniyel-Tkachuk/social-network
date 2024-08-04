import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";

const rerenderEntireThee = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={store.getState()}
              dispatch={store.dispatch}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

rerenderEntireThee();

store.subscribe(rerenderEntireThee);