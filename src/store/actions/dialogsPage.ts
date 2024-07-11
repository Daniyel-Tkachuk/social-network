export const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";

export const changeMessageTextAC = (messageText: string) => {
   return {
      type: CHANGE_MESSAGE_TEXT,
      messageText
   } as const;
}

export type ChangeMessageTextAT = ReturnType<typeof changeMessageTextAC>;