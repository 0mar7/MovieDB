import React, { useContext } from 'react'
import { MoviesContext } from '../../MoviesContext';

export default function People() {

    let posterUrl = 'https://image.tmdb.org/t/p/w500';
    let { trendingPerson } = useContext(MoviesContext);
    return (
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
            <div className="col-md-3" key={index}>
                <img className='w-100 my-2 rounded-3' src={posterUrl + person.profile_path} alt="person.name" />
                <h2 className='h6 mt-3 text-center'>{person.name}</h2>
            </div>)}
    </div>
    )
}

