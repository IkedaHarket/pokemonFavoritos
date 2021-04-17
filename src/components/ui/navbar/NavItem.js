import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({to,icon,page}) => {
    

    return (
        <div className="nav__item">
            <NavLink 
                activeClassName="active"
                className="nav__item-navlink" 
                exact
                to={to}
            >
                <img src={icon} alt={`Icon ${page}`}/>
                {page}
            </NavLink>
        </div>
    )
}

export default NavItem
