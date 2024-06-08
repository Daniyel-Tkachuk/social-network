import React, {FC} from 'react';
import s from './Profile.module.css';
import {PostsContainer} from "./postContainer/PostsContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostType} from "../../index";

type Props = {
   postsData: PostType[]
}

export const Profile: FC<Props> = (props) => {
   const {postsData} = props;

   return (
      <div className={s.profile}>
         <ProfileInfo/>
         <PostsContainer postsData={postsData}/>
      </div>
   );
};
