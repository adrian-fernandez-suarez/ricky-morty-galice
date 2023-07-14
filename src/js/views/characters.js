import  React from "react";
import { useEffect, useState } from "react";

export function Characters() {

    const [characters, setCharacters] = useState([]);
    
    const fetchCharacters = () => {
        fetch('https://rickandmortyapi.com/api/character').
        then(response => response.json()).
        then(data => setCharacters([...data.results])).
        catch(error => console.log(error))
    }
    useEffect(() => {
        fetchCharacters();
    },[]);

    return (
    <div className="container">
        <div className="">
            {characters.map( (character) => <article key={character} className="card">
            <div className="imgContainer">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="info">
                <p>Name: {character.name}</p>
            </div>
        </article> )}
        </div>
    </div>
    );
}