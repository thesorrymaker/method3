import {allReducers} from "./reducer/reducer";
import {createStore} from "redux";
export const Store = createStore(allReducers);
//创建一个 Redux store 来以存放应用中所有的 state。
//应用中应有且仅有一个 store。