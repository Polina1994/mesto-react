import headerLogo from '../../src/images/logo.svg'
import React from 'react'

function Header() {
    return (

    <header className="header">
        <img className="header__image" src={headerLogo} alt="лого"/>
    </header>
    )
}

export default Header;