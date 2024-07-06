//Custom Hook
// Tạo ra các hook riêng ==>
// - Có thể sử dụng các hook khác
// - Tuân thủ các quy định về React Hook

import { useContext } from "react";
import { ProviderContext } from "./Provider";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from "react-redux";

//Tạo ra 2 hook để đọc state và dispatch từ global state
//useSelector(callback)
//useDispatch()
export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

export const useSelector = (callback) => {
  //callback để lọc dữ liệu
  if (typeof callback !== "function") {
    throw new Error("callback phải là 1 function");
  }
  const { state } = useContext(ProviderContext);
  return callback(state);
};
