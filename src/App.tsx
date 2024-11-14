import React, {FC} from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {DialogsContainer} from "./components/dialogs/dialogsContainer/DialogsContainer";


type Props = {}

export const App: FC<Props> = () => {


   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <div className={"app-wrapper_content"}>
            <Routes>
               <Route path="/" element={<Navigate to="/profile"/>}/>

               <Route path="/profile" element={<Profile />
               }/>
               <Route path="/dialogs" element={<DialogsContainer/>}/>
            </Routes>
         </div>
      </div>
   )
};