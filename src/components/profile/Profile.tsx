import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../store/_old_store";
import {CreatePostContainer} from "./CreatePostContainer/CreatePostContainer";

type Props = {
   profileData: ProfilePageType
   dispatch: (action: ActionType) => void
}

export const Profile: FC<Props> = (props) => {
   const {
      profileData: {posts, postText},
      dispatch
   } = props;

   return (
      <div className={s.profile}>
         <ProfileInfo/>
         <CreatePostContainer posts={posts} postText={postText} dispatch={dispatch}/>
      </div>
   );
};
