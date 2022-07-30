import { combineReducers } from "redux";

import charactersReducer from "./characters/reducer";
import characterReducer from "./character/reducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
