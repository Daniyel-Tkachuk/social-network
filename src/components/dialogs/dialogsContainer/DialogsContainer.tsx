import React, {FC} from 'react';
import {Dialogs} from "./dialogs/Dialogs";
import {ActionType, DialogsPageType} from "../../../store/_OOP_store";
import {changeMessageTextAC, sendNewMessageAC} from "../../../store/actions/dialogsActions";

type Props = {
   dialogsData: DialogsPageType
   dispatch: (action: ActionType) => void
}

export const DialogsContainer: FC<Props> = (props) => {
   const {
      dialogsData,
      dispatch
   } = props;

   const sendMessage = () => {
      dispatch(sendNewMessageAC());
   };

   const changeMessageText = (text: string) => {
      dispatch(changeMessageTextAC(text));
   };

   return (
      <>
         <Dialogs dialogsData={dialogsData}
                  changeMessageText={changeMessageText}
                  sendMessage={sendMessage}
         />
      </>
   );
};
