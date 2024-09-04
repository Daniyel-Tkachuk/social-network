import {v1} from "uuid";

const initialState: StateType = {
   posts: [
      {id: v1(), postMessage: "post-1", likeCount: 2},
      {id: v1(), postMessage: "post-2", likeCount: 4},
      {id: v1(), postMessage: "post-3", likeCount: 10},
      {id: v1(), postMessage: "post-4", likeCount: 8},
   ],
   postText: "",
}

//

export const profileReducer = (state: StateType = initialState, action: any): StateType => {
   switch (action.type) {
      case ProfileActionType.ADD_POST: {
         const newPost: PostType = {
            id: v1(),
            postMessage: state.postText,
            likeCount: 0
         };
         state.posts.push(newPost);
         state.postText = "";
         return state
      }
      case ProfileActionType.CHANGE_POST_TEXT: {
         state.postText = action.text;
         return state
      }
      default: {
         return state
      }
   }
}

export enum ProfileActionType {
   ADD_POST = "ADD-POST",
   CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
}

export type StateType = {
   posts: PostType[]
   postText: string
}
export type PostType = {
   id: string
   postMessage: string
   likeCount: number
}
