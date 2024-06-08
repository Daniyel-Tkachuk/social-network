import React, {FC} from 'react';
import s from './PostContainer.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../state/state";



type Props = {
   posts: PostType[]
}

export const PostsContainer: FC<Props> = (props) => {
   const {posts} = props;

   const postsJSX: JSX.Element[] = posts && posts.map(el => <Post
      key={el.id}
      id={el.id}
      postMessage={el.postMessage}
      likeCount={el.likeCount}
   />);

   return (
      <div>
         <h3>My posts</h3>
         <div>
            <textarea/>
            <button>add post</button>
         </div>
         <div>
            {postsJSX}
         </div>
      </div>
   );
};
