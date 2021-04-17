import { combineReducers } from "redux";
import { habitatReducer } from "./habitatReducer";
import { pokemonsReducer } from "./pokemonsReducer";
import { tipoReducer } from "./tipoReducer";

import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui:uiReducer,
    pokemons:pokemonsReducer,
    habitat:habitatReducer,
    tiposPokemons:tipoReducer,
})