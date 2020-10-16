import React from 'react'

function Header(props){
	return(
		<header className="header">
            <span className="info">
                <img src="/img/info-icon.svg" />
            </span>
            <a className="header__logo" href="http://www.marvel.com" title="Go to home">
                <img src="/img/marvel-logo.svg" />
                <span>API Explorer</span>
            </a>
        </header>
	)
}

export default Header;