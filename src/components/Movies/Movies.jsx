import React, { useContext } from 'react'
import { MoviesContext } from './../../MoviesContext';



export default function Movies() {

    let posterUrl = 'https://image.tmdb.org/t/p/w500';

    let { trendingMovie } = useContext(MoviesContext);
    return (
        
        <div className='row'>
            <div className='col-md-4'>
                    <div>
                        <div className="brdr w-25"></div>
                        <h2>Trending <br /> Movies <br />To Watch Now</h2>
                        <span className='text-muted'>most watched movies by days</span>
                        <div className="brdr w-100 "></div>

                    </div>
                </div>
            {trendingMovie.map((movie, index) =>
                <div className='col-md-4' key={index}>
                    <img className='w-75 my-4 mx-auto rounded-3' src={posterUrl + movie.poster_path} alt="movie.title" />
                    <h2 className='h6 text-center'>{movie.title}</h2>
                </div>
            )}
        </div>
    )
}
