import React, {FC} from 'react';
import s from './Post.module.css';

type Props = {

}

export const Post: FC<Props> = (props) => {
   const {} = props;

   return (
      <div className={s.item}>
         <img src="https://hips.hearstapps.com/hmg-prod/images/index-avatar3-1672251913.jpg?crop=0.502xw:1.00xh;0.210xw,0&resize=1200:*" alt="image-post"/>
         <span>post</span>
         <div>
            like
         </div>
      </div>
   );
};
