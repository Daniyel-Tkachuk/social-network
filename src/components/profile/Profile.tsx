import React from 'react';
import s from './Profile.module.css';
import {PostContainer} from "./postContainer/PostContainer";

export const Profile = () => {
   return (
      <div>
         <div>
            <img src="#" alt="banner"/>
         </div>
         <div>
            ava + description
         </div>
         <PostContainer/>
      </div>
   );
};
