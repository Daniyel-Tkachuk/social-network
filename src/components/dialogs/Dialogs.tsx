import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type Props = {}

type DialogType = {
   id: number
   name: string
};

type MessageType = {
   id: number
   message: string
}

export const Dialogs: FC<Props> = (props) => {
   const {} = props;

   const dialogsData: DialogType[] = [
      {id: 1, name: "Daniyel"},
      {id: 2, name: "Viktoriya"},
      {id: 3, name: "Zakhar"},
      {id: 4, name: "Andrey"},
      {id: 5, name: "Tereza"},
   ];

   const messageData: MessageType[] = [
      {id: 1, message: "Hi"},
      {id: 2, message: "How is your it-kamasutra?"},
      {id: 3, message: "Yo! How are you ?"},
   ];

   const dialogsJSX: JSX.Element[] = dialogsData.map(el => <DialogItem key={`${el.id}_${el.name}`} id={el.id} name={el.name}/>);

   const messagesJSX: JSX.Element[] = messageData.map(el => <MessageItem key={`${el.id}`} id={el.id} message={el.message}/>)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsJSX}
         </div>
         <div className={s.messages}>
            {messagesJSX}
         </div>
      </div>
   );
};


type DialogItemProps = {
   id: number
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
   id: number
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
