import React from 'react'
import { Link } from 'react-router-dom'
import './comic-box.scss'

function ComicBox(props){

	const path = props.img.path;
	const extension = props.img.extension;
	const image = `${path}.${extension}`;
	const styles = {
		backgroundImage: `url(${image})`
	}

	return(
		<Link className="product" to={`/detail/${props.id}`} >
			<figure className="product__imgArea" style={styles}></figure>
			<h1     className="product__title">{props.title}</h1>
        </Link>
	)
}

export default ComicBox;