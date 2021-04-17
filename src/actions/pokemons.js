import { types } from "../types/types";

export const previousPageClear = ()=>({type:types.previousPageClear})
export const previousPage = (previousPage)=>{
    return{
        type:types.previousPageSet,
        payload:previousPage
    }
}
export const nextPageClear = ()=>({type:types.nextPageClear})
export const nextPage = (nextPage)=>{
    return{
        type:types.nextPageSet,
        payload:nextPage
    }
}

