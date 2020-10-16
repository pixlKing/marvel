import React from 'react'

function ComicBox(props){

	const path = props.img.path;
	const extension = props.img.extension;
	const image = `${path}.${extension}`;
	const styles = {
		backgroundImage: `url(${image})`
	}

	 //`background-image: url(${image}) `;

	return(
		<article className="product" style={styles}>
            <h1 className="product__title">{props.title}</h1>
        </article>
	)
}

export default ComicBox;