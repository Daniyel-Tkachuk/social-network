import {v1} from "uuid";
import {AddPostAT, ChangePostTextAT, ProfileActionType} from "./actions/profilePage";
import {ChangeMessageTextAT, DialogsActionType, SendNewMessageAT} from "./actions/dialogsPage";


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
   messageText: string
}

export type StateType = {
   profilePageData: ProfilePageType
   dialogsPageData: DialogsPageType
}

export type ActionType = AddPostAT | ChangePostTextAT | ChangeMessageTextAT
   | SendNewMessageAT;

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
         ],
         messageText: "",
      }
   } as StateType,
   _callSubscriber() {
      console.log("State changed")
   },
   getState() {
      return this._state;
   },
   subscribe(observer: () => void){
      this._callSubscriber = observer;
   },
   dispatch(action: ActionType) {
      switch (action.type) {
         case ProfileActionType.ADD_POST: {
            const newPost: PostType = {
               id: v1(),
               postMessage: this._state.profilePageData.postText,
               likeCount: 0
            };
            this._state.profilePageData.posts.push(newPost);
            this._state.profilePageData.postText = "";
            this._callSubscriber();
            break;
         }
         case ProfileActionType.CHANGE_POST_TEXT: {
            this._state.profilePageData.postText = action.text;
            this._callSubscriber();
            break
         }
         case DialogsActionType.CHANGE_MESSAGE_TEXT: {
            this._state.dialogsPageData.messageText = action.messageText;
            this._callSubscriber();
            break;
         }
         case DialogsActionType.SEND_NEW_MESSAGE: {
            const newMessageBody = this._state.dialogsPageData.messageText;
            this._state.dialogsPageData.messageText = "";
            this._state.dialogsPageData.messages.push({id: v1(), message: newMessageBody});
            this._callSubscriber();
            break;
         }
         default: {
            console.log("error");
         }
      }
   },
}

// @ts-ignore
window.store = store;