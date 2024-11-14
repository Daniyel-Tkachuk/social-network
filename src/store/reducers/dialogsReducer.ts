import {v1} from "uuid";
import {ChangeMessageTextAT, SendNewMessageAT} from "../actions/dialogsActions";

export const DialogsConstType = {
   CHANGE_MESSAGE_TEXT: "CHANGE_MESSAGE_TEXT",
   SEND_NEW_MESSAGE: "SEND_NEW_MESSAGE"
} as const;

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

export const dialogsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
   switch (action.type) {
      case DialogsConstType.SEND_NEW_MESSAGE: {
         return {
            ...state,
            messages: [{id: v1(), message: state.messageText}, ...state.messages],
            messageText: ""
         }
      }
      case DialogsConstType.CHANGE_MESSAGE_TEXT: {
         return {
            ...state,
            messageText: action.messageText
         }
      }
      default: {
         return state
      }
   }
}

type ActionsType = ChangeMessageTextAT | SendNewMessageAT;

export type StateType = {
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