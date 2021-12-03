import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Rating from '@mui/material/Rating';
import React from 'react';
import './Item.scss';
function Item({movie , baseUrlImg , isLargeRow , handleClick}) {

    
    const handleClickImg = (movie) => {
        if(!handleClick) return;
        handleClick(movie);
    }
    return (
        <div className="rowItem">
            <div className="rowItem-cover">
                <img
                    onClick={()=> handleClickImg(movie)}
                    src={`${baseUrlImg}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    className = {`rowItem__poster ${isLargeRow && "rowItem__posterLarge"}`}
                />
            <PlayCircleOutlineIcon className="rowItem__play" fontSize="large" style={{cursor: 'pointer'}}/>
            </div>
            <div className="rowItem-descBlock">
                <div>
                    <span className="rowItem__title">{movie?.name || movie?.title}</span>
                </div>
                <Rating 
                    style={{fontSize: `12px`}}
                    name="read-only" 
                    value={movie.vote_average && (movie.vote_average - 5)} 
                    readOnly 
                    size="small"
                    defaultValue={2}
                />
            </div>

        </div>
    );
}

export default Item;