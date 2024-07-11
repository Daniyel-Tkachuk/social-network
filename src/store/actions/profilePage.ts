export const ADD_POST = "ADD-POST";
export const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

export const addPostAC = () => {
   return {
      type: ADD_POST,
   } as const
};

export const changePostTextAC = (text: string) => {
   return {
      type: CHANGE_POST_TEXT,
      text,
   } as const;
}

export type AddPostAT = ReturnType<typeof addPostAC>;
export type ChangePostTextAT = ReturnType<typeof changePostTextAC>;
