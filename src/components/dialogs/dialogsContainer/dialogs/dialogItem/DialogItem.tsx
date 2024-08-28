import React, {FC} from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../../../store/reducers/dialogsReducer";


type Props = {
   dialog: DialogsType
}
export const DialogItem: FC<Props> = (props) => {
   const {dialog} = props;

   const path = `/dialogs/${dialog.id}`;

   return (
      <div className={s.dialog}>
         <NavLink to={path}>{dialog.name}</NavLink>
      </div>
   );
}