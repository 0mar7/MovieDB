import React, { useContext } from 'react'
import { MoviesContext } from './../../MoviesContext';

export default function Tvshows() {

    let posterUrl = 'https://image.tmdb.org/t/p/w500';
    
    let { trendingMovie, trendingTv, trendingPerson } = useContext(MoviesContext);

    return (
        <>
            <div className='row my-5'>
                <div className='col-md-4'>
                    <div>
                        <div className="brdr w-25"></div>
                        <h2>Trending <br /> Tv Shows <br />To Watch Now</h2>
                        <span className='text-muted'>most watched Tv shows by days</span>
                        <div className="brdr w-100 "></div>

                    </div>
                </div>
                {trendingTv.map((tv, index) =>
                    <div className="col-md-2" key={index}>
                        <img className='w-100 my-2' src={posterUrl + tv.poster_path} alt="movie.title" />
                        <h2 className='h6 mt-2 text-center'>{tv.name}</h2>
                    </div>)}
            </div>

            <div className='row my-5'>
                <div className='col-md-4'>
                    <div>
                        <div className="brdr w-25"></div>
                        <h2>Trending <br /> Person <br />To Watch Now</h2>
                        <span className='text-muted'>most watched movies by days</span>
                        <div className="brdr w-100 "></div>

                    </div>
                </div>
                {trendingPerson.map((person, index) =>
                    <div className="col-md-2" key={index}>
                        <img className='w-100 my-2' src={posterUrl + person.profile_path} alt="movie.title" />
                        <h2 className='h6 mt-3 text-center'>{person.name}</h2>
                    </div>)}
            </div>

            <div className='row my-5'>
                <div className='col-md-4'>
                    <div>
                        <div className="brdr w-25"></div>
                        <h2>Trending <br /> Movies <br />To Watch Now</h2>
                        <span className='text-muted'>most watched movies by days</span>
                        <div className="brdr w-100 "></div>

                    </div>
                </div>
                {trendingMovie.map((movie, index) =>
                    <div className="col-md-2" key={index}>
                        <img className='w-100 my-2' src={posterUrl + movie.poster_path} alt="movie.title" />
                        <h2 className='h6 mt-3 text-center'>{movie.title}</h2>
                    </div>)}
            </div>
        </>
    )
}
