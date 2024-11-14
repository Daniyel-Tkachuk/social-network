import {ProfileConstType} from "../reducers/profileReducer";


export const addPostAC = () => {
   return {
      type: ProfileConstType.ADD_POST,
   } as const
};

export const changePostTextAC = (text: string) => {
   return {
      type: ProfileConstType.CHANGE_POST_TEXT,
      text,
   } as const;
}

export type AddPostAT = ReturnType<typeof addPostAC>;
export type ChangePostTextAT = ReturnType<typeof changePostTextAC>;
