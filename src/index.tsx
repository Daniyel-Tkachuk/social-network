import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./state/state";


const rerenderEntireThee = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={store.getState()}
              addPost={store.addPost.bind(store)}
              changePostText={store.changePostText.bind(store)}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

rerenderEntireThee();

store.subscribe(rerenderEntireThee);