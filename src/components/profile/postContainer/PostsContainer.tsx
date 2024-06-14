import React, {createRef, FC} from 'react';
import s from './PostContainer.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../state/state";


type Props = {
   posts: PostType[]
   addPost: (postMessage: string) => void
}

export const PostsContainer: FC<Props> = (props) => {
   const {posts, addPost} = props;

   const postsJSX: JSX.Element[] = posts && posts.map(el => <Post
      key={el.id}
      post={el}
   />);

   const postMessageRef = createRef<HTMLTextAreaElement>();

   const addPostHandler = () => {
     if (postMessageRef.current) {
        addPost(postMessageRef.current.value);
        postMessageRef.current.value = "";
     }
   }

   return (
      <div>
         <h3>My posts</h3>
         <div>
            <textarea ref={postMessageRef}/>
            <button onClick={addPostHandler}>add post</button>
         </div>
         <div>
            {postsJSX}
         </div>
      </div>
   );
};
