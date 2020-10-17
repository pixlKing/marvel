import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './detail.scss'

function Detail(props){

	const id = useParams().id;

	const [comicDetail, setComicDetail] = useState([])
	const [Creators, setCreators] = useState([])
	const [Stories, setStories] = useState([])
	const [Image, setImage] = useState([])

	useEffect(()=>{
        getComicDetail()
        getCreator()
    }, [])

    const getComicDetail = async () => {
        const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const comics = await data.json()
        setComicDetail(comics.data.results[0])
        setStories(comics.data.results[0].stories.items)
        setImage(comics.data.results[0].thumbnail.path+"."+comics.data.results[0].thumbnail.extension)
        console.log(comics.data.results[0])
    }
    const getCreator = async () => {
        const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}/creators?apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const dataJson = await data.json()
        setCreators(dataJson.data.results)
        //console.log(dataJson.data.results)
    }


	return(
		<div className="detail">
			<section className="detail__cont--img">
				<figure className="detail__cover">
					<img src={Image} />
				</figure>
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
		</div>
	)
}

export default Detail