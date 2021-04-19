import React from 'react'
import NavItem from './NavItem'
import { iconos } from '../../../images/icons'
import Temas from './Temas'
const {iconEevee,iconEstrella} = iconos

const Navbar = () => {

    return (
        <nav className="nav">
            {/* <NavItem to="/" icon={iconPokebola} page="Inicio"/> */}
            <NavItem to="/pokemons" icon={iconEevee} page="Pokemons"/>
            <NavItem to="/favoritos" icon={iconEstrella} page="Favoritos"/>
            <Temas />
        </nav >
    )
}

export default Navbar
