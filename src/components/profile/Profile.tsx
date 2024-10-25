import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {CreatePostContainer} from "./CreatePostContainer/CreatePostContainer";

type Props = {}

export const Profile: FC<Props> = (props) => {
   const {} = props;

   return (
      <div className={s.profile}>
         <ProfileInfo/>
         <CreatePostContainer />
      </div>
   );
};
