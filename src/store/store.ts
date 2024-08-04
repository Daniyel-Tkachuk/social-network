import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";


const rootReducer = combineReducers({
   dialogsData: dialogsReducer,
   profileData: profileReducer
});


export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof store.getState>;


// @ts-ignore
window.store = store;