export enum ProfileActionType {
   ADD_POST = "ADD-POST",
   CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
}

export const addPostAC = () => {
   return {
      type: ProfileActionType.ADD_POST,
   } as const
};

export const changePostTextAC = (text: string) => {
   return {
      type: ProfileActionType.CHANGE_POST_TEXT,
      text,
   } as const;
}

export type AddPostAT = ReturnType<typeof addPostAC>;
export type ChangePostTextAT = ReturnType<typeof changePostTextAC>;
