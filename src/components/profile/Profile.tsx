import React, {FC} from 'react';
import s from './Profile.module.css';
import {PostsContainer} from "./postContainer/PostsContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../state/state";

type Props = {
   profilePageData: ProfilePageType
   addPost: () => void
   changePostText: (text: string) => void
}

export const Profile: FC<Props> = (props) => {
   const {
      profilePageData: {posts, postText},
      addPost,
      changePostText,
   } = props;

   return (
      <div className={s.profile}>
         <ProfileInfo/>
         <PostsContainer posts={posts} postText={postText} addPost={addPost} changePostText={changePostText}/>
      </div>
   );
};
