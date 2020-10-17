import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './detail.scss'

function Detail(){

	const id = useParams().id;

	const [Detail, setDetail] = useState({
		title:  '',
		creators: [],
		stories:  [],
		image: {
			cover: '/img/loading.gif',
			blur:''
		}
	})

	useEffect(()=>{
        getComicDetail()
    }, [])

    const getComicDetail = async () => {
        const generalData = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const comics = await generalData.json()

        const creatorData = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}/creators?apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const dataJson = await creatorData.json()

        let coverImage = comics.data.results[0].thumbnail.path+"."+comics.data.results[0].thumbnail.extension;

        setDetail({
        	title: comics.data.results[0].title,
        	creators: dataJson.data.results,
        	stories: comics.data.results[0].stories.items,
        	image: {
	        	cover: coverImage,
	        	blur:  coverImage
	        }
        })

    }

	return(
		<article className="detail">
			<section  className="detail__cont--img">
				<Link className="detail__navBack" to="/" >&lt;</Link>
				<img src={Detail.image.cover} alt="Article image" />
				<span className="detail__blur" style={{backgroundImage: `url(${Detail.image.blur})`}} ></span>
			</section>
			<section className="detail__cont--data">
				<div className="detail__top">
					<h1>{Detail.title}</h1>
				</div>
				<div className="detail__bottom">
					<h2>Creators</h2>
					<ol>
						{
							Detail.creators.map((creator)=>{
								return (
									<li key={creator.id} >{creator.fullName}</li>
								)
							})
						}
					</ol>

					<h2>Stories</h2>
					<ol>
						{
							Detail.stories.map((item, index)=>{
								return(
									<li key={index} >{item.name}</li>
								)
							})
						}
					</ol>
				</div>
			</section>
		</article>
	)
}

export default Detail