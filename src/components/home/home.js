import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ComicBox from '../comic-box/comic-box.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Loading from '../loading/loading.js';
import './home.scss';


function Home(){

	const [comics, setComics] = useState([])
	const [Busy, setBusy] = useState(true)
    const history = useHistory();
    let page = useParams().page;

    useEffect(()=>{
        getComics()
        onPageChange()
    }, [])

    const getComics = async () => {
        const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics?offset=${page}&limit=10&apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const comics = await data.json()
        setComics(comics.data.results)
        setBusy(false)
    }

    const onPageChange = ()=>{
		history.listen((location) => {
			page = Number(location.pathname.replace("/",""));
        	setBusy(true)
			getComics()
		})
    }

	return(
		<Fragment>
	        <Header />
	        <div className="content">
	            <section className="catalog">
	            	{
	            		Busy ? <Loading />
	            		: comics.map((comic)=>{
		                        return(
		                            <ComicBox key={comic.id} id={comic.id} title={comic.title} img={comic.thumbnail} />
		                        )
		                })
	            	}

	            </section>
	        </div>
	        <Footer />
	    </Fragment>
	)
}

export default Home;