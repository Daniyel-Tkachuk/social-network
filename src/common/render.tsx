import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "../App";
import {addPost, StateType} from "../state/state";
import React from "react";

export const rerenderEntireThee = (state: StateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} addPost={addPost}/>
      </BrowserRouter>,
      document.getElementById('root')
   );
}