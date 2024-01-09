import React from "react";
import { HeaderContainer, LineSeparator } from "./header.style.tsx";
import { Image } from "react-native";
import { Icons } from "../../assets/index.ts"
import { Search } from "../search/search.tsx";
import { Banner } from "../banner/banner.tsx";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Banner />
        {/* <Search /> */}
      </HeaderContainer>
      <LineSeparator />
    </>
  )
}