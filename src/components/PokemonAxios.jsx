import React, { useState } from 'react';
import axios from 'axios';

const PokemonAxios = (props) => {
    const [allPokemon,setAllPokemon] = useState([]);

    const clickHandeler = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(dex=>{
            console.log(dex);
            setAllPokemon(dex.data.results);
        })
        .catch(err=>{
            console.log(err);
        })
    }


    return (
        <>
            <div>
                <button onClick={clickHandeler} className="mt-3" >Fetch Pokemon</button>
                {
                    allPokemon.map((mon, idx) => {
                        return <h1 key={idx} >{mon.name}</h1>
                    })
                }
            </div>
        </>
    );
}

export default PokemonAxios;