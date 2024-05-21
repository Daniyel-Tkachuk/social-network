import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";

type Props = {}

export type DialogType = {
   id: number
   name: string
};

export type MessageType = {
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

   const dialogsJSX: JSX.Element[] = dialogsData.map(el => <DialogItem key={`${el.id}_${el.name}`} dialogData={el}/>);

   const messagesJSX: JSX.Element[] = messageData.map(el => <MessageItem key={`${el.id}`} messageData={el}/>)

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
