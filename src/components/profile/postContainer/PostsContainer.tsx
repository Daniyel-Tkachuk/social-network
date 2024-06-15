import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import s from './PostContainer.module.css';
import {Post} from "./post/Post";
import {PostType} from "../../../state/state";


type Props = {
   posts: PostType[]
   postText: string
   addPost: () => void
   changePostText: (text: string) => void
}

export const PostsContainer: FC<Props> = (props) => {
   const {posts, postText, addPost, changePostText} = props;

   const postsJSX: JSX.Element[] = posts && posts
      .map(el => <Post
         key={el.id}
         post={el}
      />);

   const addPostHandler = () => {
      addPost();
   }

   const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.key === "Enter" && addPostHandler();
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      changePostText(e.currentTarget.value);
   }

   return (
      <div>
         <h3>My posts</h3>
         <div>
            <textarea value={postText}
                      onKeyPress={onEnter}
                      onChange={onChangeHandler}
            />
            <button onClick={addPostHandler}>add post</button>
         </div>
         <div>
            {postsJSX}
         </div>
      </div>
   );
};
