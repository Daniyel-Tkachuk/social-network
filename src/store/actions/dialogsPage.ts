export const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";
export const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";

export const changeMessageTextAC = (messageText: string) => {
   return {
      type: CHANGE_MESSAGE_TEXT,
      messageText
   } as const;
}

export const sendNewMessageAC = () => {
   return {
      type: SEND_NEW_MESSAGE,
   } as const
}

export type ChangeMessageTextAT = ReturnType<typeof changeMessageTextAC>;
export type SendNewMessageAT = ReturnType<typeof sendNewMessageAC>;