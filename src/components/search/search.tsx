import React from "react";
import { SearchContainer, StyledSearchInput } from "./search.style";
import { Image } from "react-native";
import { Icons } from "../../assets";
export const Search = () => {
  return (
    <SearchContainer>
      <StyledSearchInput />
      <Image source={Icons.searchLogo} style={{ height: 24, width: 24, alignSelf: "center"}} />
    </ SearchContainer>
  )
}