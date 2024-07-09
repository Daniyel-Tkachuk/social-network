import React, {FC} from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {ActionType, StateType} from "./store/state";

type Props = {
   state: StateType
   dispatch: (action: ActionType) => void
}

export const App: FC<Props> = (props) => {
   const {
      state: {profilePageData, dialogsPageData},
      dispatch,
   } = props;

   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <div className={"app-wrapper_content"}>
            <Routes>
               <Route path="/" element={<Navigate to="/profile"/>}/>

               <Route path="/profile" element={<Profile profilePageData={profilePageData}
                                                        dispatch={dispatch}/>
               }/>
               <Route path="/dialogs" element={<Dialogs dialogsPageData={dialogsPageData}/>}
               />
            </Routes>
         </div>
      </div>
   )
};