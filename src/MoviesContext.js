import { createContext } from "react";
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export let MoviesContext = createContext([]);

export function MoviesContextProvider(props) {
    let [trendingMovie, setTrendingMovies] = useState([]);
    let [trendingTv, setTrendingTv] = useState([]);
    let [trendingPerson, setTrendingPerson] = useState([]);

    async function getTrendingItems(mediaType, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=56e1518a4076ce79296b2aaa9751fe18`);
        callback(data.results.slice(0, 10));
    };

    useEffect(() => {
        getTrendingItems('movie', setTrendingMovies);
        getTrendingItems('tv', setTrendingTv);
        getTrendingItems('person', setTrendingPerson);
    }, [])

    return (

        <MoviesContext.Provider value={{ trendingMovie, trendingTv, trendingPerson }}>
            {props.children}
        </MoviesContext.Provider>

    )
}