import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import s from './CreatePost.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../../store/_OOP_store";


type Props = {
   posts: PostType[]
   postText: string
   updateNewPostText: (text: string) => void
   addPost: () => void
}

export const CreatePost: FC<Props> = (props) => {
   const {posts, postText, addPost, updateNewPostText} = props;

   const postsJSX: JSX.Element[] = posts && posts
      .map(el => {
         return <Post
            key={el.id}
            post={el}
         />
      });

   const onAddPostHandler = () => {
      addPost();
   }

   const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      updateNewPostText(e.currentTarget.value);
   }

   const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.key === "Enter" && onAddPostHandler();
   }

   return (
      <div>
         <h3>My posts</h3>
         <div>
            <textarea value={postText}
                      onKeyPress={onEnter}
                      onChange={onPostChangeHandler}
            />
            <button onClick={onAddPostHandler}>add post</button>
         </div>
         <div>
            {postsJSX}
         </div>
      </div>
   );
};
