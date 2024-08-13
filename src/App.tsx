import React, {FC} from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/dialogsContainer/dialogs/Dialogs";
import {ActionType} from "./store/_old_store";
import {AppStateType} from "./store/store";

type Props = {
   state: AppStateType
   dispatch: (action: ActionType) => void
}

export const App: FC<Props> = (props) => {
   const {
      state: {dialogsData, profileData},
      dispatch,
   } = props;

   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <div className={"app-wrapper_content"}>
            <Routes>
               <Route path="/" element={<Navigate to="/profile"/>}/>

               <Route path="/profile" element={<Profile profileData={profileData}
                                                        dispatch={dispatch}/>
               }/>
               <Route path="/dialogs" element={<Dialogs dialogsData={dialogsData} dispatch={dispatch}/>}
               />
            </Routes>
         </div>
      </div>
   )
};