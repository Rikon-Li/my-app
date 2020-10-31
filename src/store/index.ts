import { createStore, Reducer, compose, Action } from "redux";

enum ActionType {
  Add = "Add",
}

enum Status {
  All = "all",
  Todo = "todo",
  Finish = "finished",
}

interface ListItem {
  id: number;
  value: string;
  status: Status.Todo | Status.Finish;
}

interface StoreState {
  value: string;
  dataSource: ListItem[];
  selected: Status;
}

interface InputAction extends Action {
  type: ActionType.Add;
  value: string;
}

type ReducerAction = InputAction;

const initialState: StoreState = {
  value: "",
  dataSource: [],
  selected: Status.All,
};

const reducer: Reducer<StoreState, ReducerAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.Add:
      return {
        ...state,
        dateSource: [
          ...state.dataSource,
          {
            id: new Date().getTime(),
            value: action.value,
            status: Status.Todo,
          },
        ],
        value: "",
      };
    default:
      return state;
  }
};
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers());
