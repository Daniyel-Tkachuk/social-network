import {v1} from "uuid";
import {AddPostAT, ChangePostTextAT} from "../actions/profileActions";

const initialState: StateType = {
   posts: [
      {id: v1(), postMessage: "post-1", likeCount: 2},
      {id: v1(), postMessage: "post-2", likeCount: 4},
      {id: v1(), postMessage: "post-3", likeCount: 10},
      {id: v1(), postMessage: "post-4", likeCount: 8},
   ],
   postText: "",
}

export const profileReducer = (state: StateType = initialState, action: ActionsType): StateType => {
   switch (action.type) {
      case ProfileConstType.ADD_POST: {
         const newPost: PostType = {
            id: v1(),
            postMessage: state.postText,
            likeCount: 0
         };
         return {
            ...state,
            posts: [newPost, ...state.posts]
         }
      }
      case ProfileConstType.CHANGE_POST_TEXT: {
         return {
            ...state,
            postText: action.text
         }
      }
      default: {
         return state
      }
   }
}

export const ProfileConstType = {
   ADD_POST: "profile/ADD-POST",
   CHANGE_POST_TEXT: "profile/CHANGE-POST-TEXT"
} as const

type ActionsType = AddPostAT | ChangePostTextAT;

export type StateType = {
   posts: PostType[]
   postText: string
}
export type PostType = {
   id: string
   postMessage: string
   likeCount: number
}
