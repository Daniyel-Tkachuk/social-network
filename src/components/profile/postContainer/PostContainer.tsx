import React, {FC} from 'react';
import s from './PostContainer.module.css';
import {Post} from "./post/Post";

type Props = {

}

export const PostContainer: FC<Props> = (props) => {
   const {} = props;

   return (
      <div>
         My posts
         <div>
            <textarea />
            <button>add post</button>
         </div>
         <div>
            <Post />
            <Post />
            <Post />
            <Post />
         </div>
      </div>
   );
};
