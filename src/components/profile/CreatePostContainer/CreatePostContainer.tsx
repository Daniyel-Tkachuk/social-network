import React, {ChangeEvent, FC} from 'react';
import {CreatePost} from "./CreatePost/CreatePost";
import {ActionType, PostType} from "../../../store/_OOP_store";
import {addPostAC, changePostTextAC} from "../../../store/actions/profileActions";


type Props = {
   posts: PostType[]
   postText: string
   dispatch: (action: ActionType) => void
}

export const CreatePostContainer: FC<Props> = ({posts, postText, dispatch}) => {

   const addPost = () => {
      dispatch(addPostAC());
   }

   const onPostChange = (text: string) => {
      dispatch(changePostTextAC(text));
   }

   return (
      <>
         <CreatePost posts={posts}
                     postText={postText}
                     updateNewPostText={onPostChange}
                     addPost={addPost}
         />
      </>
   );
};
