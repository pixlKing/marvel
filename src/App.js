import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Detail from './components/detail/detail.js';
import ComicBox from './components/comic-box/comic-box.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import './App.scss';

function App() {

    const [comics, setComics] = useState([])

    useEffect(()=>{
        getComics()
    }, [])

    const getComics = async () => {
        const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=10&apikey=633832778b0cb7f4ef7d6ed45d9bd2c1`);
        const comics = await data.json()
        setComics(comics.data.results)
        //console.log(comics.data.results)
    }

    return (

        <div className="App">
            <Router>
                <Switch>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <Header />
                        <div className="content">
                            <section className="catalog">
                                {
                                    comics.map((comic)=>{
                                        return(
                                            <ComicBox key={comic.id} id={comic.id} title={comic.title} img={comic.thumbnail} />
                                        )
                                    })
                                }
                            </section>
                        </div>
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
