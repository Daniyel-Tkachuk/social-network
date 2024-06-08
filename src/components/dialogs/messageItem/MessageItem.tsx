import React, {FC} from "react";
import s from "./MessageItem.module.css";
import {MessagesType} from "../../../index";


type Props = {
   messageData: MessagesType
}
export const MessageItem: FC<Props> = (props) => {
   const {messageData} = props;

   return (
      <div className={s.message}>
         {messageData.message}
      </div>
   );
}