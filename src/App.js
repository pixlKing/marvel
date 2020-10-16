import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Home from './components/home.js';
import Detail from './components/detail.js';
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
        console.log(comics.data.results)
    }

    return (
        <div className="App">
            <div className="page">
                <Header />
                <div className="content">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/detail">
                                <Detail />
                            </Route>
                            <Route path="/">
                                <section className="catalog">
                                    {
                                        comics.map((comic)=>{
                                            return(
                                                <ComicBox title={comic.title} img={comic.thumbnail} />
                                            )
                                        })
                                    }
                                </section>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
