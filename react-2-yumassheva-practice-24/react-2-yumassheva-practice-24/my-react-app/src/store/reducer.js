import { ACTION_1, ACTION_2, ACTION_3, ACTION_4, ACTION_5, initialState } from "./action";

function reducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_1: return { ...state, cites: action.value };
  case ACTION_2: return { ...state, temp: action.value };
  case ACTION_3: return { ...state, city: action.value };
  case ACTION_4: return { ...state, icon: action.value };
  case ACTION_5: return { ...state, chooseLastCity: action.value };
  default: return state;
  }
}

export default reducer