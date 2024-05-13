import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem id="1" name="Daniyel"/>
            <DialogItem id="2" name="Viktoriya"/>
            <DialogItem id="3" name="Zakhar"/>
         </div>
         <div className={s.messages}>
            <MessageItem message="Hi"/>
            <MessageItem message="How is your it-kamasutra?"/>
            <MessageItem message="Yo"/>
         </div>
      </div>
   );
};


type DialogItemProps = {
   id: string
   name: string
}
const DialogItem: FC<DialogItemProps> = (props) => {
   const {id, name} = props;

   const path = `/dialogs/${id}`;

   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path}>{name}</NavLink>
      </div>
   );
}

type MessageItemProps = {
   message: string
}
const MessageItem: FC<MessageItemProps> = (props) => {
   const {message} = props;

   return (
      <div className={s.message}>
         {message}
      </div>
   );
}
