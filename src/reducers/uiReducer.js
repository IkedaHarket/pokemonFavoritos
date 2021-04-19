import { types } from "../types/types";

const initialState = {
    hamburger: false,
    temaDark: JSON.parse(localStorage.getItem('pokeNoche')) || false,
    temaYellow: JSON.parse(localStorage.getItem('pokeYellow')) || false,
    temaBlue: JSON.parse(localStorage.getItem('pokeBlue')) || false,
    
}

export const uiReducer = (state = initialState , action)=>{

    switch (action.type) {
        
        case types.uiHamburger:
            return{
                ...state,
                hamburger: !state.hamburger
            }
        case types.uiHamburgerClose:
            return{
                ...state,
                hamburger: false
            }
        case types.uiSetTemaOscuro:
            return{
                ...state,
                temaDark: action.payload
            }
        case types.uiSetTemaYellow:
            return{
                ...state,
                temaYellow: action.payload
            }
        case types.uiSetTemaBlue:
            return{
                ...state,
                temaBlue: action.payload
            }
        default:    
            return state;
    }
}