import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import s from './PostContainer.module.css';
import {Post} from "./post/Post";
import {ActionType, PostType} from "../../../state/state";


type Props = {
   posts: PostType[]
   postText: string
   dispatch: (action: ActionType) => void
}

export const PostsContainer: FC<Props> = (props) => {
   const {posts, postText, dispatch} = props;

   const postsJSX: JSX.Element[] = posts && posts
      .map(el => <Post
         key={el.id}
         post={el}
      />);

   const addPostHandler = () => {
      const action: ActionType = {type: "ADD-POST"}
      dispatch(action);
   }

   const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.key === "Enter" && addPostHandler();
   }

   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const action: ActionType = {type: "CHANGE-POST-TEXT", text: e.currentTarget.value};
      dispatch(action);
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
