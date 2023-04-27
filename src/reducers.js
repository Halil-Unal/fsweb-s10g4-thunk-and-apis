import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
  FETCH_ANOTHER,
} from "./actions";

const initial = {
  random:null,
  favs: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      return {
        ...state,
        favs: [...state.favs, action.payload]
      };
    

    case FAV_REMOVE:
      return {
        ...state,
        favs: state.favs.filter(item => (item.Year !== action.payload))
      };

    case FETCH_SUCCESS:
      return state;

    case FETCH_LOADING:
      return state;

    case FETCH_ERROR:
      return state;

    case GET_FAVS_FROM_LS:

    return state;
      case FETCH_ANOTHER:

      return {
        ...state,
        random: action.payload, loading: false
      };
    default:
      return state;
  }
}
