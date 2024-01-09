import {IPokemonType} from "../api/interfaces/Pokemon/Pokemon";
import {PokeType} from "../api/pokemonType";

export const mapType = (types: IPokemonType[]) => {
    return types.map(item => {
      return findTypeById(item.type.name)
    })
} 

function findTypeById(name: string) {
  const foundType = PokeType.find((element) => element.id.toUpperCase() === name.toUpperCase());
  return foundType;
}