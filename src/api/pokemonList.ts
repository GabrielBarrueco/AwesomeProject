import axios from "axios";
import pokeApi from "./pokeApi"
import { mapType } from "../utils/pokemonType.mapper";

export interface IPokemonList {
    name: string;
    id: number;
    image: string;
    type: {
        id: string,
        color: string,
        icon: string
    }[]
}

const pokemonListFetch = async () => {
    try {
        const endpoints = [];
        for(let i = 1; i < 10; i++ ){
            const randomId = Math.floor(Math.random() * (1025 - 1) + 1)
            endpoints.push(`pokemon/${randomId}`)
        }
        return await axios.all(endpoints.map(endpoint => pokeApi(endpoint)))
    } catch (error) {
        console.log("ERROR ->", error)
        return []
    }
}
   
export const pokemonListMapper = async () => {
    const response = await pokemonListFetch();
   
    const mappedPokemonList = response.map(poke => {

        return {
            name: poke.data.name,
            id: poke?.data.id, 
            image: poke?.data.sprites.front_default,
            type: mapType(poke?.data.types)
        }
    })
    return mappedPokemonList
}
