import React from 'react'
import { useSelector } from 'react-redux'
import NavItem from './NavItem'

import { iconos } from '../../../images/icons'
const {iconEevee,iconPokebola,iconEstrella} = iconos


const MenuXS = () => {
    const {hamburger} = useSelector(state => state.ui)
    return (
        <div className={`menuXS ${(hamburger) && `menuXS-active`}`}>
            <NavItem to="/" icon={iconPokebola} page="Inicio"/>
            <NavItem to="/pokemons" icon={iconEevee} page="Pokemons"/>
            <NavItem to="/favoritos" icon={iconEstrella} page="Favoritos"/>
        </div>
    )
}

export default MenuXS