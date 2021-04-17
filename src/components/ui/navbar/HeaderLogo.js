import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
    return (
        <h1>
            <Link to="/" className="header__logo-link">IkedaPoke</Link>
        </h1>
    )
}

export default HeaderLogo
