import React, {FC} from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {DialogType, MessagesType, PostType} from "./index";

type Props = {
   postsData: PostType[]
   dialogsData: DialogType[]
   messagesData: MessagesType[]
}

export const App: FC<Props> = (props) => {
   const {postsData, messagesData, dialogsData} = props;

   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <div className={"app-wrapper_content"}>
            <Routes>
               <Route path="/" element={<Navigate to="/profile"/>}/>

               <Route path="/profile" element={<Profile postsData={postsData}/>}/>
               <Route path="/dialogs" element={<Dialogs dialogsData={dialogsData}
                                                        messagesData={messagesData}/>}
               />
            </Routes>
         </div>
      </div>
   )
};