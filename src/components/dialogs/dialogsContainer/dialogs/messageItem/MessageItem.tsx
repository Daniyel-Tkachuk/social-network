import React, {FC} from "react";
import s from "./MessageItem.module.css";
import {MessagesType} from "../../../../../store/_OOP_store";



type Props = {
   message: MessagesType
}
export const MessageItem: FC<Props> = (props) => {
   const {message} = props;

   return (
      <div className={s.message}>
         {message.message}
      </div>
   );
}