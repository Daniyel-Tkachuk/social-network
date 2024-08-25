import React, {FC} from 'react';
import {Dialogs} from "./dialogs/Dialogs";
import {ActionType, DialogsPageType} from "../../../store/_OOP_store";
import {changeMessageTextAC, sendNewMessageAC} from "../../../store/actions/dialogsActions";
import {StoreContext} from "../../../context/storeContext";

type Props = {}

export const DialogsContainer: FC<Props> = (props) => {
   const {} = props;

   return (
      <>
         <StoreContext.Consumer>
            {
               (store) => {
                  const dialogsState = store.getState().dialogsData;
                  const sendMessage = () => {
                     store.dispatch(sendNewMessageAC());
                  };

                  const changeMessageText = (text: string) => {
                     store.dispatch(changeMessageTextAC(text));
                  };
                  return <Dialogs dialogsData={dialogsState}
                                  changeMessageText={changeMessageText}
                                  sendMessage={sendMessage}
                  />
               }
            }
         </StoreContext.Consumer>

      </>
   );
};
