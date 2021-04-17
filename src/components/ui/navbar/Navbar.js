import React from 'react'
import NavItem from './NavItem'
import { iconos } from '../../../images/icons'
const {iconEevee,iconPokebola,iconEstrella} = iconos
const Navbar = () => {
    return (
        <nav className="nav">
            <NavItem to="/" icon={iconPokebola} page="Inicio"/>
            <NavItem to="/pokemons" icon={iconEevee} page="Pokemons"/>
            <NavItem to="/favoritos" icon={iconEstrella} page="Favoritos"/>
        </nav >
    )
}

export default Navbar
