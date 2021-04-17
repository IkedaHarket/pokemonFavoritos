import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { uiHamburgerClose } from '../../../actions/ui'

const NavItem = ({to,icon,page}) => {
    const dispatch = useDispatch()
const handleClick = ()=>{
    dispatch(uiHamburgerClose());
}
    return (
        <div className="nav__item">
            <NavLink 
                onClick={handleClick}
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
