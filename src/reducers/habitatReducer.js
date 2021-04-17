import { types } from "../types/types";

const initialState = {
    habitats:[]
}

export const habitatReducer = (state = initialState , action)=>{

    switch (action.type) {
        case types.habitatPokemonsSet:
            return{
                ...state,
                habitats:[...action.payload]
            }
        default:    
            return state;
    }
}