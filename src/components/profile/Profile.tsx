import React from 'react';
import s from './Profile.module.css';
import {PostContainer} from "./postContainer/PostContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = () => {
   return (
      <div className={s.profile}>
         <ProfileInfo/>
         <PostContainer/>
      </div>
   );
};
