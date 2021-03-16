import {
  ADD_NEW_LABEL,
  CREATE_SNIPPET_FILE,
  DISMISS_ERROR,
  LOAD_ALL_LABEL,
  ON_LABEL_SELECTED,
  SET_ERROR,
  SET_LOADING
} from "../actions";
import {
  IGlobalContextState,
  initialState
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
    case CREATE_SNIPPET_FILE:
      return {
        ...state,
        files: [...state.files, action.payload.data],
      };
    case ON_LABEL_SELECTED:
      return {
        ...state,
        label: action.payload.data.selectedLabel,
        files: [...action.payload.data.files],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload.error,
      };

    case DISMISS_ERROR:
      return {
        ...state,
        loading: false,
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
        success: `${action.payload} has been added`,
        labels: [...state.labels, action.payload],
      };

    default:
      return state;
  }
}
