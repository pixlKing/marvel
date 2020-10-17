import React from 'react'
import './header.scss'

function Header(props){
	return(
		<header className="header">
            <span className="info">
                <img src="/img/info-icon.svg" alt="Info icon" />
            </span>
            <a className="header__logo" href="http://www.marvel.com" title="Go to home">
                <img src="/img/marvel-logo.svg" alt="Marvel logo"/>
                <span>API Explorer</span>
            </a>
        </header>
	)
}

export default Header;