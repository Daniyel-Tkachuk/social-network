import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";


const rootReducer = combineReducers({
   dialogs: dialogsReducer,
   profile: profileReducer
});



export const store = createStore(rootReducer);

export type AppStoreType = ReturnType<typeof store.getState>;

// @ts-ignore
window.store = store;