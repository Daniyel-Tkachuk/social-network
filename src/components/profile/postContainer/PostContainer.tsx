import React, {FC} from 'react';
import s from './PostContainer.module.css';
import {Post} from "./post/Post";

type Props = {

}

export const PostContainer: FC<Props> = (props) => {
   const {} = props;

   const postsData = [
      {id: 1, postMessage: "post-1", likeCount: 2},
      {id: 2, postMessage: "post-2", likeCount: 4},
      {id: 3, postMessage: "post-3", likeCount: 10},
      {id: 4, postMessage: "post-4", likeCount: 8},
   ]

   return (
      <div>
         <h3>My posts</h3>
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
