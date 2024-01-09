import { AxiosError } from "axios";
import { IPokemon, IPokemonStat, IPokemonType } from "./interfaces/Pokemon/Pokemon"
import pokeApi from "./pokeApi"

export interface IPokemonList {
    name: string;
    id: number;
    image: string;
}

export interface IPokemonDetail {
    name: string;
    id: number;
    image: string;
    types: IPokemonType[];
    stats: IPokemonStat[]
}

export const pokemonDetailFetch = async (param: number | string): Promise<IPokemonDetail> => {
    try {
       const response = await pokeApi(`pokemon/${param}/`)
       const pokemonData = {
        name: response.data.name,
        id: response.data.id,
        image: response.data.sprites.other["official-artwork"].front_default,
        types: response.data.types,
        stats: response.data.stats,
       }
       return pokemonData;
    } catch (error) {
        console.log("ERROR ->", error)
        throw AxiosError.ECONNABORTED
    }
}
