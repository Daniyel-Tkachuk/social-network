import React, {FC} from 'react';
import s from './Profile.module.css';
import {PostsContainer} from "./postContainer/PostsContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../state/state";

type Props = {
   profilePageData: ProfilePageType
}

export const Profile: FC<Props> = (props) => {
   const {posts} = props.profilePageData;

   return (
      <div className={s.profile}>
         <ProfileInfo/>
         <PostsContainer posts={posts}/>
      </div>
   );
};
