import { styled } from "styled-components";

interface IPokemonDetailStyledProps {
  value: number;
  colorType: string;
}

export const Container = styled.View`
 flex: 1;
 background-color: #FFF;
`;

export const TopContainer = styled.View`
  height: 420px;
  width: 100%;
  padding-top: 42px;
  background-color: ${(props: IPokemonDetailStyledProps) => props.colorType ?? "#DDD"};
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;

`;

export const ContentContainer = styled.View`
  width: 100%;
  background-color: white;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'Open Sans';
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  margin-left: 12px;
  color: white;
  align-self: flex-start;
`;

export const NumberTitle = styled.Text`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
    color: white;
    opacity: 0.8;
    margin-left: 12px;
`;

export const SectionTitle = styled.Text`
    font-family: 'Open Sans';
    font-size: 22px;
    font-weight: 700;
    color: black;
    opacity: 0.8;
    margin-left: 4px;
    margin-top: 12px;
`;

export const Carousel = styled.ScrollView`
  flex: 1;
  paddingHorizontal: 8px;
  width: 100%;
  height: auto;
  background-color: white;
`;

export const CarouselContainer = styled.View`
    width: 214px;
    height: auto;
    margin-left: 2px;
    margin-right: 4px;
    margin-vertical:  4px;
    align-items: center;
    shadow-color: #4a4a4a;
    shadow-offset: 0px 0px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 6;
    background-color: white;
`;