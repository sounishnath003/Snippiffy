import {
  ADD_NEW_LABEL,
  DISMISS_ERROR,
  LOAD_ALL_LABEL,
  SET_ERROR,
  SET_LOADING,
} from "../actions";
import {
  IGlobalContextState,
  initialState,
} from "../Context/GlobalContextState";

export type IAction = {
  type: string;
  payload: any;
};

export function globalStateReducer(
  state: IGlobalContextState = initialState,
  action: IAction
): IGlobalContextState {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    case DISMISS_ERROR:
      return {
        ...state,
        error: "",
      };

    case LOAD_ALL_LABEL:
      return {
        ...state,
        loading: false,
        success: action.payload.data.message,
        labels: [...action.payload.data.labels],
      };

    case ADD_NEW_LABEL:
      return {
        ...state,
        labels: [...state.labels, action.payload],
      };

    default:
      return state;
  }
}
