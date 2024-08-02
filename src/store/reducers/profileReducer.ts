import {v1} from "uuid";
import {PostType} from "../state";

export enum ProfileActionType {
   ADD_POST = "ADD-POST",
   CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
}

export const profileReducer = (state: any, action: any): any => {
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