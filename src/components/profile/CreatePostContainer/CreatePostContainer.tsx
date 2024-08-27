import React, {FC} from 'react';
import {CreatePost} from "./CreatePost/CreatePost";
import {addPostAC, changePostTextAC} from "../../../store/actions/profileActions";
import {StoreContext} from "../../../context/storeContext";


type Props = {}

export const CreatePostContainer: FC<Props> = ({}) => {

   return (
      <>
         <StoreContext.Consumer>
            {
               (store) => {
                  const {posts, postText} = store.getState().profileData;

                  const addPost = () => {
                     store.dispatch(addPostAC());
                  }
                  const onPostChange = (text: string) => {
                     store.dispatch(changePostTextAC(text));
                  }
                  return (
                     <CreatePost posts={posts}
                                 postText={postText}
                                 updateNewPostText={onPostChange}
                                 addPost={addPost}
                     />
                  )
               }
            }
         </StoreContext.Consumer>

      </>
   );
};
