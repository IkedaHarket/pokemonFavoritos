import axios from 'axios';
import { types } from "../types/types";


export const setCargarPokemons = (bol) =>{
    return{
        type:types.pokemonSetCargarpokemons,
        payload:bol
    }
}

export const setPaginaActiva = (page)=>{
    return{
        type:types.pageActivaSet,
        payload:page
    }
}
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
export const setPokemons = (pokemons)=>{
    return{
        type:types.pokemonsSet,
        payload:pokemons
    }
}
export const pedirPokemons = () =>{
    const page = JSON.parse(localStorage.getItem('pagePokemon')) || 0
    const pokemons = [];
    return async(dispatch) =>{
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page*20}&limit=20`);
            dispatch(nextPage(res.data.next))
            dispatch(previousPage(res.data.previous))
            let i = 0; //El index no funciona 
            res.data.results.map(async(pokemon)=>{
                
                res = await axios.get(pokemon.url);
                pokemons.push(res.data)
                i++
                if(i === 20) dispatch(setPokemons(pokemons))
            })
    }
}
export const setearBusquedaPokemons = (busqueda)=>{
    return{
        type:types.pokemonBuscarSet,
        payload:busqueda
    }
}
export const clearBusquedaPokemons = ()=>({type:types.pokemonBuscarClear})

export const buscarpokemons = (nombre) =>{
    const pokemons = [];
    return async(dispatch) =>{
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`);
        res.data.results.map(async(pokemon)=>{
            // console.log(pokemon.name.includes(nombre))
            if(pokemon.name.includes(nombre)){
                res = await axios.get(pokemon.url);
                pokemons.push(res.data)
                
                dispatch(setPokemons(pokemons))
            }
        })
    }
}
export const pokemonActivoSet =(pokemon)=>{
    localStorage.setItem('pokemonActivo',JSON.stringify(pokemon))
    return{
        type:types.pokemonActiveSet,
        payload:pokemon
    }
}
export const clearPokemonActivo = ()=>({type:types.pokemonActiveClear})

export const agregarFavoritoApp = (pokemon)=>{
    return{
        type:types.pokemonAgregarFavorito,
        payload:pokemon
    }
}
export const quitarFavoritoApp = (pokemonId)=>{
    return{
        type:types.pokemonQuitarFavorito,
        payload:pokemonId
    }
}