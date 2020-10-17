import React from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'

function Footer(props){

    const pages = [0,10,20,30,40,50];

	return(
        <footer className="footer">
            <div className="footer__pager">
                {
                    pages.map((page, index)=>{
                        return(
                            <NavLink key={index} to={`/${page}`} activeClassName="active">{index+1 === pages.length ? '>' : index+1}</NavLink>
                        )
                    })
                }
            </div>
        </footer>
	)
}

export default Footer;