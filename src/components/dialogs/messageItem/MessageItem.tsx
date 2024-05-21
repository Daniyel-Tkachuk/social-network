import React, {FC} from "react";
import s from "./MessageItem.module.css";
import {MessageType} from "../Dialogs";

type Props = {
   messageData: MessageType
}
export const MessageItem: FC<Props> = (props) => {
   const {messageData} = props;

   return (
      <div className={s.message}>
         {messageData.message}
      </div>
   );
}