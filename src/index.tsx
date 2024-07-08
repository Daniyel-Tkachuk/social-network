import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, changePostText, state, subscriber} from "./state/state";


const rerenderEntireThee = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} addPost={addPost} changePostText={changePostText}/>
      </BrowserRouter>,
      document.getElementById('root')
   );
}

rerenderEntireThee();

subscriber(rerenderEntireThee)