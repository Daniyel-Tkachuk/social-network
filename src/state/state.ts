import {v1} from "uuid";

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

export const store = {
   _state: {
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
   } as StateType,
   _callSubscriber() {
      console.log("State changed")
   },
   addPost() {
      const newPost: PostType = {
         id: v1(),
         postMessage: this._state.profilePageData.postText,
         likeCount: 0
      };
      this._state.profilePageData.posts.push(newPost);
      this._state.profilePageData.postText = "";
      this._callSubscriber();
   },
   changePostText(text: string) {
      this._state.profilePageData.postText = text;
      this._callSubscriber();
   },
   getState() {
     return this._state;
   },
   subscribe(observer: () => void){
      this._callSubscriber = observer;
   }
}

// @ts-ignore
window.store = store;