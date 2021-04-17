import { types } from "../types/types";

const initialState = {
    nextPage:'',
    previousPage:'',
    pokemonActivo: null,
    pokemons:[]
}

export const pokemonsReducer = (state = initialState , action)=>{

    switch (action.type) {
        
        case types.nextPageSet:
            return{
                ...state,
                nextPage:action.payload
            }
        case types.nextPageClear:
            return{
                ...state,
                nextPage:false
            }
        case types.previousPageSet:
            return{
                ...state,
                previousPage:action.payload
            }
        case types.previousPageClear:
            return{
                ...state,
                previousPage:false
            }

        default:    
            return state;
    }
}