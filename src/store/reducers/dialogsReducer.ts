import {v1} from "uuid";

export enum DialogsActionType {
   CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT",
   SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE"
}

export const dialogsReducer = (state: any, action: any): any => {
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