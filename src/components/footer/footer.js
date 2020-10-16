import React from 'react'

function Footer(props){
	return(
        <footer className="footer">
            <div className="footer__pager">
                <span>&lt;</span>
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>&gt;</span>
            </div>
        </footer>
	)
}

export default Footer;