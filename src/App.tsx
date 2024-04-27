import React from 'react';
import './App.css';


export const App = () => {
   return (
      <div className="app-wrapper">
         <header className="header">
            <img src="#" alt="logo"/>
         </header>
         <nav className="nav">
            <div>
               <a>Profile</a>
            </div>
            <div>
               <a>Messages</a>
            </div>
            <div>
               <a>News</a>
            </div>
            <div>
               <a>Music</a>
            </div>
            <div>
               <a>Settings</a>
            </div>
         </nav>
         <div className="content">
            <div>
               <img src="#" alt="banner"/>
            </div>
            <div>
               ava + description
            </div>
            <div>
               My posts
               <div>
                  New post
               </div>
               <div>
                  <div>
                     post-1
                  </div>
                  <div>
                     post-2
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
