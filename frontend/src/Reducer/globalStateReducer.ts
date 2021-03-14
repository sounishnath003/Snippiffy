import {
  IGlobalContextState,
  initialState,
} from "../Context/GlobalContextState";

type IAction = {
  type: string;
  payload: any;
};

export function globalStateReducer(
  state: IGlobalContextState = initialState,
  action: IAction
): IGlobalContextState {
  return state;
}
