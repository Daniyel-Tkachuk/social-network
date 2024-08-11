import React, {FC} from 'react';
import {CreatePost} from "./CreatePost/CreatePost";
import {ActionType, PostType} from "../../../store/_old_store";


type Props = {
   posts: PostType[]
   postText: string
   dispatch: (action: ActionType) => void
}

export const CreatePostContainer: FC<Props> = ({posts, postText, dispatch}) => {


   return (
      <>
       <CreatePost posts={posts} postText={postText} dispatch={dispatch}/>
      </>
   );
};
