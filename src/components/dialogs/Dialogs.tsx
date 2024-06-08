import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";
import {DialogType, MessagesType} from "../../index";

type Props = {
   dialogsData: DialogType[]
   messagesData: MessagesType[]
}

export const Dialogs: FC<Props> = (props) => {
   const {dialogsData, messagesData} = props;

   const dialogsJSX: JSX.Element[] = dialogsData
      && dialogsData
         .map(el =>
            <DialogItem key={`${el.id}_${el.name}`} dialogData={el}/>
         );

   const messagesJSX: JSX.Element[] = messagesData
      && messagesData
         .map(el =>
            <MessageItem key={`${el.id}`} messageData={el}/>
         );

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
