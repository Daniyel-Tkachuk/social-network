import {DialogsConstType} from "../reducers/dialogsReducer";


export const changeMessageTextAC = (messageText: string) => {
   return {
      type: DialogsConstType.CHANGE_MESSAGE_TEXT,
      messageText
   } as const;
}

export const sendNewMessageAC = () => {
   return {
      type: DialogsConstType.SEND_NEW_MESSAGE,
   } as const
}

export type ChangeMessageTextAT = ReturnType<typeof changeMessageTextAC>;
export type SendNewMessageAT = ReturnType<typeof sendNewMessageAC>;