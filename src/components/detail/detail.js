import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './detail.scss'

function Detail(props){

	const id = useParams().id;

	const [comicDetail, setComicDetail] = useState([])
	const [Creators, setCreators] = useState([])
	const [Stories, setStories] = useState([])
	const [Image, setImage] = useState({ cover: '/img/loading.gif', blur:'' })

	useEffect(()=>{
        getComicDetail()
        getCreator()
    }, [])

    const getComicDetail = async () => {
        const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const comics = await data.json()
        setComicDetail(comics.data.results[0])
        setStories(comics.data.results[0].stories.items)
        let coverImage = comics.data.results[0].thumbnail.path+"."+comics.data.results[0].thumbnail.extension;
        setImage({
        	cover: coverImage,
        	blur:  coverImage
        })
    }

    const getCreator = async () => {
        const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}/creators?apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const dataJson = await data.json()
        setCreators(dataJson.data.results)
    }

	return(
		<article className="detail">
			<section  className="detail__cont--img">
				<Link className="detail__navBack" to="/" >&lt;</Link>
				<img src={Image.cover} alt="Article image" />
				<span className="detail__blur" style={{backgroundImage: `url(${Image.blur})`}} ></span>
			</section>
			<section className="detail__cont--data">
				<div className="detail__top">
					<h1>{comicDetail.title}</h1>
				</div>
				<div className="detail__bottom">
					<h2>Creators</h2>
					<ol>
						{
							Creators.map((creator)=>{
								return (
									<li key={creator.id} >{creator.fullName}</li>
								)
							})
						}
					</ol>

					<h2>Stories</h2>
					<ol>
						{
							Stories.map((item, index)=>{
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