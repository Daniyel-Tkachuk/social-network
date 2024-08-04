import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import s from './PostContainer.module.css';
import {Post} from "./post/Post";
import {ActionType, PostType} from "../../../store/_old_store";
import {addPostAC, changePostTextAC} from "../../../store/actions/profileActions";




type Props = {
   posts: PostType[]
   postText: string
   dispatch: (action: ActionType) => void
}

export const PostsContainer: FC<Props> = (props) => {
   const {posts, postText, dispatch} = props;

   const postsJSX: JSX.Element[] = posts && posts
      .map(el => {
         return <Post
            key={el.id}
            post={el}
         />
      });

   const addPostHandler = () => {
      dispatch(addPostAC());
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(changePostTextAC(e.currentTarget.value));
   }

   const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.key === "Enter" && addPostHandler();
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
