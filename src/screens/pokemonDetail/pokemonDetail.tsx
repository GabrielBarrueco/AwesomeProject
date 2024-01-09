import React, { useEffect, useState } from "react";
import { Image} from "react-native";
import { IPokemonDetail, pokemonDetailFetch } from "../../api/pokemonDetail";
import { Carousel, CarouselContainer, Container, ContentContainer, NumberTitle, SectionTitle, Title, TopContainer } from "./pokemonDetail.style";
import { StatLine } from "../../components/statLine/statLine";
import { useNavigation } from "@react-navigation/native";

export const PokemonDetail = ({route}) => {

  const [pokemon, setPokemon] = useState<IPokemonDetail>();

  const { id, color  } = route.params
  
  useEffect(() => {
    handlePokemonFetched(id);
  }, [id])

  async function handlePokemonFetched(param: number | string){
    const pokemon = await pokemonDetailFetch(param);
    setPokemon(pokemon)
  }
  const name = pokemon?.name[0].toUpperCase() + pokemon?.name.substring(1);

  const navigation = useNavigation()
  navigation.setOptions({
    headerRight: () => (
     <></>
    ),
  })

  return (
    <Container>
     <TopContainer colorType={color}>
      <NumberTitle>{`#${pokemon?.id}`}</NumberTitle>
      <Title>{name}</Title>
      <Image 
          style={{height: 280, width: 280, alignSelf: "center"}} 
          source={{uri: pokemon?.image}}
          resizeMode="contain"
        />
     </TopContainer>
     <ContentContainer>
        <SectionTitle>Stats</SectionTitle>
          {pokemon?.stats.map(item => {
            return(
              <>
                <StatLine stat={item} />
              </>
            )
          })}
     </ContentContainer>
    </Container>
  )
}