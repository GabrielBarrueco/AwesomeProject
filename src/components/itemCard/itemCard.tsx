import React from "react";
import { Image, Dimensions, FlatList } from "react-native"
import {CardContainer, TitleText, DescriptionText, ImageContainer, TextContainer} from "./itemCard.style"
import { useNavigation } from "@react-navigation/native";

const screenWidth = ((Dimensions.get("screen").width ) - 32) / 2;

interface ItemCardProps {
    name: string;
    id: number;
    image: string;
    type: {
        id: string,
        color: string,
        icon: string
    }[]
}

export const ItemCard: React.FC<ItemCardProps> = (props) => {
    const name = props.name[0].toUpperCase() + props.name.substring(1);
    const navigation = useNavigation()

    const handlePokemonTap = () => {
        navigation.navigate("PokemonDetail", {id: props.id, color: props?.type[0].color})
    }

    return(
        <CardContainer screenWidth={screenWidth} typeColor={props?.type[0].color} onPress={handlePokemonTap}>
            <TitleText>{name}</TitleText>
            <ImageContainer>
                <Image 
                    style={{height: 120, width: 120}} 
                    source={{uri: props.image }}
                    resizeMode="contain"
                />
            </ImageContainer>
            <DescriptionText>{`#${props.id}`}</DescriptionText>
        </CardContainer>
    )
}