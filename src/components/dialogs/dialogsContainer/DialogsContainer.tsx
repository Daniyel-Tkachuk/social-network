import {changeMessageTextAC, sendNewMessageAC} from "../../../store/actions/dialogsActions";

import {AppStateType} from "../../../store/store";
import {StateType} from "../../../store/reducers/dialogsReducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Dialogs} from "./dialogs/Dialogs";


type MapStateToPropsType = {
   dialogsData: StateType
}

type MapDispatchToPropsType = {
   sendMessage: () => void
   changeMessageText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      dialogsData: state.dialogsData
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
     sendMessage: () => {
        dispatch(sendNewMessageAC())
     },
      changeMessageText: (text: string) => {
        dispatch(changeMessageTextAC(text))
      }
   }
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

export const Container = connect(mapStateToProps, mapDispatchToProps)(Dialogs);





