import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonsReducer";

import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui:uiReducer,
    pokemons:pokemonsReducer,
})