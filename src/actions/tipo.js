import axios from 'axios';
import { types } from "../types/types";

export const setTipos = (tipos)=>{
    return{
        type:types.tiposPokemonSet,
        payload:tipos
    }
}

export const pedirTipos = () =>{
    const dataTipos = [];
    return async(dispatch) =>{
        let res = await axios.get(`https://pokeapi.co/api/v2/type/`);
            let i = 0; //El index no funciona 
            res.data.results.map(async(tipos)=>{
                
                res = await axios.get(tipos.url);
                dataTipos.push(res.data)
                i++
                if(i === 20) dispatch(setTipos(dataTipos))
            })
    }
}