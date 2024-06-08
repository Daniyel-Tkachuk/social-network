import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";
import {MessagesPageType} from "../../state/state";


type Props = {
   messagesPageData: MessagesPageType
}

export const Dialogs: FC<Props> = (props) => {
   const {dialogs, messages} = props.messagesPageData;

   const dialogsJSX: JSX.Element[] = dialogs
      && dialogs
         .map(el =>
            <DialogItem key={`${el.id}_${el.name}`} dialog={el}/>
         );

   const messagesJSX: JSX.Element[] = messages
      && messages
         .map(el =>
            <MessageItem key={`${el.id}`} message={el}/>
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
