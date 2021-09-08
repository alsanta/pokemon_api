import React, { useState } from 'react';

const Pokemon = (props) => {
    const [allPokemon,setAllPokemon] = useState([]);

    const clickHandeler = ()=>{
        // fetch is where you place the api link
        fetch("https://pokeapi.co/api/v2/pokemon/")
        // This then gets the file and converts it to a json file
        // You can name it whatever you want. Here i used dex
        .then(dex=>{
            return dex.json()
        })
        // You then get that dex and add it to the array of pokemon
        // For this specific api I had to go a little deeper hence the .results
        // Not every api will need that
        .then(dex=>{
            console.log(dex);
            setAllPokemon(dex.results);
        })
        // If there is an error here is where we "catch it"
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
        <div>
            <button onClick={clickHandeler} className="mt-3" >Fetch Pokemon</button>
            {
                allPokemon.map((mon,idx)=>{
                    return <h1>{mon.name}</h1>
                })
            }
        </div>
        </>
    );
}

export default Pokemon;