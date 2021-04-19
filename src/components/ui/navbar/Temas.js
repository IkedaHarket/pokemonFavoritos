import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiHamburgerClose, uiSetTemaBlue, uiSetTemaDark, uiSetTemaYellow } from '../../../actions/ui'

const Temas = () => {

    const dispatch = useDispatch()
    const {temaDark,temaYellow,temaBlue} = useSelector(state => state.ui)

    const handleOscuro =()=>{
        dispatch(uiSetTemaDark(true));
        dispatch(uiHamburgerClose());
        localStorage.setItem('pokeNoche',JSON.stringify(true));
    }
    const handleBlanco =()=>{
        dispatch(uiSetTemaDark(false));
        dispatch(uiHamburgerClose());
        localStorage.setItem('pokeNoche',JSON.stringify(false));
    }
    const handleYellow =()=>{
        dispatch(uiHamburgerClose());
        dispatch(uiSetTemaYellow(true));
        dispatch(uiSetTemaBlue(false));
        localStorage.setItem('pokeYellow',JSON.stringify(true));
        localStorage.setItem('pokeBlue',JSON.stringify(false));
    }
    const handleBlue =()=>{
        dispatch(uiHamburgerClose());
        dispatch(uiSetTemaBlue(true));
        dispatch(uiSetTemaYellow(false));
        localStorage.setItem('pokeBlue',JSON.stringify(true));
        localStorage.setItem('pokeYellow',JSON.stringify(false));
    }
    const handleRed = ()=>{
        dispatch(uiHamburgerClose());
        dispatch(uiSetTemaBlue(false));
        dispatch(uiSetTemaYellow(false));
        localStorage.setItem('pokeBlue',JSON.stringify(false));
        localStorage.setItem('pokeYellow',JSON.stringify(false));
    }
    const $body = document.querySelector('body');
    if(temaDark){
        $body.classList.add('dark')
    }else{
        $body.classList.remove('dark')
    }

    if(temaYellow){
        $body.classList.add('yellow')
    }else{
        $body.classList.remove('yellow')
    }

    if(temaBlue){
        $body.classList.add('blue')
    }else{
        $body.classList.remove('blue')
    }

    return (
        <div className="temas"> 
            <div className={`circulo amarillo ${(temaYellow) && 'd-none'}`} onClick={handleYellow}></div>
            <div className={`circulo azul ${(temaBlue) && 'd-none'}`} onClick={handleBlue}></div>
            <div className={`circulo rojo ${(!temaBlue && !temaYellow) && 'd-none'}`} onClick={handleRed}></div>
            <div className={`circulo blanco ${(temaDark) && 'd-none'} `} onClick={handleOscuro}></div>
            <div className={`circulo negro ${(!temaDark) && 'd-none'} `} onClick={handleBlanco}></div>
        </div>
    )
}
// ${(yellow) && 'd-none'}
export default Temas
