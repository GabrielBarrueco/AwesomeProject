import React, { useEffect, useState } from "react";
import { FlatList } from "react-native"
import { ItemCard } from "../../components/itemCard/itemCard";
import { HomeContainer } from "./home.style"
import { IPokemonList, pokemonListMapper } from "../../api/pokemonList";
import { Header } from "../../components/header/header";

export const Home = () => {

  const [pokemons, setPokemons] = useState<IPokemonList[]>();

  useEffect(() => {
    handlePokemonList();
  }, [])

  async function handlePokemonList() {
    const list = await pokemonListMapper();
    setPokemons(list)
  }

  return (
    <HomeContainer>
      <Header />
      <FlatList
        data={pokemons}
        renderItem={({ item }) =>
          <ItemCard
            name={item.name}
            id={item.id}
            image={item.image}
            type={item.type}
          />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </HomeContainer>
  )

}