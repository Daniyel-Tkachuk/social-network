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
            <Post postText="post-1" likeCount={2}/>
            <Post postText="post-2" likeCount={4}/>
            <Post postText="post-3" likeCount={10}/>
            <Post postText="post-4" likeCount={8}/>
         </div>
      </div>
   );
};
