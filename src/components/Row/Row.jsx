import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from './components/Item';
import './Row.scss';
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';
function Row({title , fetchUrl , isLargeRow }) {
    const handleCount = (isLargeRow) => {
        let x = 0;
        (isLargeRow) ? x = 7 : x = 9;
        return x; 
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: handleCount(isLargeRow),
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
  }
};
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movies , setMovies] = useState([]);
    const baseUrlImg = "https://image.tmdb.org/t/p/original"
    const baseUrl = "https://api.themoviedb.org/3"
    useEffect(() => {
         async function fecthData () {
            const response = await axios.get(`${baseUrl}${fetchUrl}`)
            const data = response.data.results;
            // console.log(data);
            setMovies(data);
        }
        fecthData();
    }, [] )
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.title || "")
            .then((url) => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(() => console.log('Temporary Unavailable'))
        }
    }

    console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2> 
            <Carousel
                className="row-wrapper"
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                swipeable
                >
                {movies.map((movie,index) => (
                        <Item 
                            key={index} 
                            movie={movie} 
                            isLargeRow={isLargeRow} 
                            baseUrlImg={baseUrlImg}  
                            handleClick={handleClick}
                        />
                ))}
            </Carousel>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
        </div>
    );
}

export default Row;




