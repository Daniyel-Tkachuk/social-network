import {v1} from "uuid";

export enum DialogsActionType {
   CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT",
   SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE"
}

const initialState: StateType = {
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

export const dialogsReducer = (state: StateType = initialState, action: any): StateType => {
   switch (action.type) {
      case DialogsActionType.SEND_NEW_MESSAGE: {
         const newMessageBody = state.messageText;
         state.messageText = "";
         state.messages.push({id: v1(), message: newMessageBody});
         return state
      }
      case DialogsActionType.CHANGE_MESSAGE_TEXT: {
         state.messageText = action.messageText;
         return state
      }
      default: {
         return state
      }
   }
}

type StateType = {
   dialogs: DialogsType[]
   messages: MessagesType[]
   messageText: string
}
export type DialogsType = {
   id: string
   name: string
}
export type MessagesType = {
   id: string
   message: string
}