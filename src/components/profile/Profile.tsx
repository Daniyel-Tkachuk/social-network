import React, {FC} from 'react';
import s from './Profile.module.css';
import {PostsContainer} from "./postContainer/PostsContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../state/state";

type Props = {
   profilePageData: ProfilePageType
   dispatch: (action: ActionType) => void
}

export const Profile: FC<Props> = (props) => {
   const {
      profilePageData: {posts, postText},
      dispatch
   } = props;

   return (
      <div className={s.profile}>
         <ProfileInfo/>
         <PostsContainer posts={posts} postText={postText} dispatch={dispatch}/>
      </div>
   );
};
