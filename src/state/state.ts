import {v1} from "uuid";
import {rerenderEntireThee} from "../common/render";

export type PostType = {
   id: string
   postMessage: string
   likeCount: number
}
export type DialogsType = {
   id: string
   name: string
}
export type MessagesType = {
   id: string
   message: string
}
export type ProfilePageType = {
   posts: PostType[]
   postText: string
}
export type DialogsPageType = {
   dialogs: DialogsType[]
   messages: MessagesType[]
}

export type StateType = {
   profilePageData: ProfilePageType
   dialogsPageData: DialogsPageType
}

export const state: StateType = {
   profilePageData: {
      posts: [
         {id: v1(), postMessage: "post-1", likeCount: 2},
         {id: v1(), postMessage: "post-2", likeCount: 4},
         {id: v1(), postMessage: "post-3", likeCount: 10},
         {id: v1(), postMessage: "post-4", likeCount: 8},
      ],
      postText: ""
   },
   dialogsPageData: {
      dialogs: [
         {id: v1(), name: "Daniyel"},
         {id: v1(), name: "Viktoriya"},
         {id: v1(), name: "Zakhar"},
         {id: v1(), name: "Andrey"},
         {id: v1(), name: "Tereza"},
      ],
      messages: [
         {id: v1(), message: "Hi"},
         {id: v1(), message: "How is your it-kamasutra?"},
         {id: v1(), message: "Yo! How are you ?"},
      ]
   }
};


export const addPost = () => {
   const newPost = {
      id: v1(),
      postMessage: state.profilePageData.postText,
      likeCount: 0
   };
   state.profilePageData.posts.push(newPost);
   state.profilePageData.postText = " ";
   rerenderEntireThee(state);
}

export const changePostText = (text: string) => {
   state.profilePageData.postText = text;
   rerenderEntireThee(state);
}

// @ts-ignore
window.state = state;