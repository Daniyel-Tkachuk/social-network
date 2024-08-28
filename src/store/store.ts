import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";


const rootReducer = combineReducers({
   dialogsData: dialogsReducer,
   profileData: profileReducer
});


export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;

export type StoreType = typeof store;

// @ts-ignore
window.store = store;