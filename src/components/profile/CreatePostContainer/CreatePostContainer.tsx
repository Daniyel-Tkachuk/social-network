import {CreatePost} from "./CreatePost/CreatePost";
import {addPostAC, changePostTextAC} from "../../../store/actions/profileActions";
import {AppStateType} from "../../../store/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PostType} from "../../../store/reducers/profileReducer";



type MapStateToPropsType = {
   posts: PostType[]
   postText: string
}

type MapDispatchToPropsType = {
   updateNewPostText: (text: string) => void
   addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      posts: state.profileData.posts,
      postText: state.profileData.postText
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      updateNewPostText: (text: string) => {
         dispatch(changePostTextAC(text))
      },
      addPost: () => {
         dispatch(addPostAC())
      }
   }
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

export const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)
