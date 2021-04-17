import axios from 'axios';
import { types } from "../types/types";

export const setHabitats = (habitats)=>{
    return{
        type:types.habitatPokemonsSet,
        payload:habitats
    }
}

export const pedirHabitats = () =>{
    const dataHabitats = [];
    return async(dispatch) =>{
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/`);
            let i = 0; //El index no funciona 
            res.data.results.map(async(habitats)=>{
                
                res = await axios.get(habitats.url);
                dataHabitats.push(res.data)
                i++
                if(i === 9) dispatch(setHabitats(dataHabitats))
            })
    }
}