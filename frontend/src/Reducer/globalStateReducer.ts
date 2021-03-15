import { ADD_NEW_LABEL, LOAD_ALL_LABEL } from "../actions";
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
    case LOAD_ALL_LABEL:
      return {
        ...state,
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
