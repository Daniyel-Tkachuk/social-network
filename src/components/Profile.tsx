import React from 'react';
import s from '../styles/Profile.module.css';

export const Profile = () => {
   return (
      <div className={s.content}>
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
   );
};