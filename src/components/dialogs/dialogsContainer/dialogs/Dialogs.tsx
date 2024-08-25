import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsPageType} from "../../../../store/_OOP_store";
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";



type Props = {
   dialogsData: DialogsPageType
   changeMessageText: (text: string) => void
   sendMessage: () => void
}

export const Dialogs: FC<Props> = (props) => {
   const {
      dialogsData: {dialogs, messages, messageText},
      changeMessageText,
      sendMessage,
   } = props;

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

   const onSendMessageHandler = () => {
      sendMessage();
   };

   const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      changeMessageText(e.currentTarget.value);
   };

   const onEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
         e.preventDefault(); // Предотвращает переход на новую строку
         onSendMessageHandler();
      }
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsJSX}
         </div>
         <div className={s.messages}>
            {messagesJSX}
            <div>
               <div>
                  <textarea placeholder="Enter your message"
                            value={messageText}
                            onChange={changeMessageTextHandler}
                            onKeyPress={onEnterHandler}
                  />
               </div>
               <div>
                  <button onClick={onSendMessageHandler}>Send</button>
               </div>
            </div>
         </div>
      </div>
   );
};
