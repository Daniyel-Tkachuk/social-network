import React, {FC} from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../index";


type Props = {
   dialogData: DialogType
}
export const DialogItem: FC<Props> = (props) => {
   const {dialogData} = props;

   const path = `/dialogs/${dialogData.id}`;

   return (
      <div className={s.dialog}>
         <NavLink to={path}>{dialogData.name}</NavLink>
      </div>
   );
}