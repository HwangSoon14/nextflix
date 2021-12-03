import axios from 'axios';
import React, { useState , useEffect} from 'react';
import requests from '../api/request';
import './Banner.scss'

function Banner(props) {
    const baseUrlImg = "https://image.tmdb.org/t/p/original"
    const baseUrl = "https://api.themoviedb.org/3"
    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const trending = requests.fetchTreding;
            const response = await axios.get(`${baseUrl}${trending}`)
            const data = response.data.results;
            // console.log(data);
            setMovie(data[
                Math.floor(Math.random() * data.length)
            ])
            return data;
        }
        fetchData();
    },[])
    console.log(movie); 
    return (
        
        <div className="banner">
            <img src={movie && `${baseUrlImg}${movie.backdrop_path}`} alt="asd" />
            <div className="banner-content">
                <h1>{movie && `${movie?.original_title || movie.name}`}</h1>
                <p>{movie && `${movie?.overview}`}</p>
                <div className="banner-buttons">
                    <button className="banner__btn banner__play">Watch</button>
                    <button className="banner__btn banner__list">My List</button>
                </div>
            </div>
            <div className="banner__fadeBottom"></div>
        </div>
    );
}

export default Banner;