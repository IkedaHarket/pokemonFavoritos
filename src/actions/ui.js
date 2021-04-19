import { types } from "../types/types";

export const uiHamburger = ()=> ({type: types.uiHamburger});
export const uiHamburgerClose = ()=> ({type: types.uiHamburgerClose});
export const uiSetTemaDark = (tema)=>{
    return{
        type: types.uiSetTemaOscuro,
        payload:tema
    }
}
export const uiSetTemaYellow = (tema)=>{
    return{
        type: types.uiSetTemaYellow,
        payload:tema
    }
}
export const uiSetTemaBlue = (tema)=>{
    return{
        type: types.uiSetTemaBlue,
        payload:tema
    }
}