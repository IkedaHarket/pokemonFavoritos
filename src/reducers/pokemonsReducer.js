import { types } from "../types/types";

const initialState = {
    buscarPokemon:false,
    pageActiva:JSON.parse(localStorage.getItem('pagePokemon')) || 0,
    nextPage:'',
    previousPage:'',
    pokemonActivo: null,
    pokemons:[],
    favoritos: JSON.parse(localStorage.getItem('pokemonsFavoritos')) || []
}

export const pokemonsReducer = (state = initialState , action)=>{

    switch (action.type) {
        
        case types.pageActivaSet:
            return{
                ...state,
                pageActiva:action.payload
            }
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
        case types.pokemonsSet:
            return{
                ...state,
                pokemons:[...action.payload]
            }
        case types.pokemonBuscarClear:
            return{
                ...state,
                buscarPokemon:false
            }
        case types.pokemonBuscarSet:
            return{
                ...state,
                buscarPokemon:action.payload
            }
        case types.pokemonActiveSet:
            return{
                ...state,
                pokemonActivo:action.payload
            }
        case types.pokemonActiveClear:
            return{
                ...state,
                pokemonActivo:null
            }
        case types.pokemonAgregarFavorito:
            return{
                ...state,
                favoritos:[
                    ...state.favoritos,
                    action.payload
                ]
            }
        case types.pokemonQuitarFavorito:
            return{
                ...state,
                favoritos: state.favoritos.filter(favorito => favorito.id !== action.payload)
            }
        default:    
            return state;
    }
}