import { types } from "../types/types";

const initialState = {
    tipos:[]
}

export const tipoReducer = (state = initialState , action)=>{

    switch (action.type) {
        
        case types.tiposPokemonSet:
            return{
                ...state,
                tipos:[...action.payload]
            }

        default:    
            return state;
    }
}