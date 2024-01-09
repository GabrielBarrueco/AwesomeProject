import React from "react";
import { Image } from "react-native";
import { Icons } from "../../assets/index.ts"
import { BannerContainer, BannerTitle } from "./banner.styled.tsx";

export const Banner = () => {
  return (
    <BannerContainer>
        <Image source={Icons.pokeLogo} style={{ height: 32, width: 32, alignSelf: "center"}} />
        <BannerTitle>PokeDex App</BannerTitle>
    </BannerContainer>
  )
}