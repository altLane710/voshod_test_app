export enum AppActionTypes {
  SET_VALUE = "SET_VALUE",
}

export interface IAppState {
  brand: string[];
  model: string[];
  tarif: string[];
  page: number;
  pages: number;
}

export interface IAppAction {
  type: AppActionTypes;
  payload?: any;
}

export const initialState: IAppState = {
  brand: [],
  model: [],
  tarif: [],
  page: 1,
  pages: 1,
};

export function appReducer(state: IAppState, action: IAppAction): IAppState {
  const { type, payload } = action;

  switch (type) {
    case AppActionTypes.SET_VALUE:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    default:
      return state;
  }
}
