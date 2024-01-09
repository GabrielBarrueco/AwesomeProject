import styled from "styled-components";

interface StatLineProps {
  value: number;
}

export const StatsContainer = styled.View`
  height: 40px;
  flex-direction: row;
  width: 100%;
  background-color: white;
  align-items: center;
  align-content: center;
  justify-content: center;
  align-content: center;
  padding-top: 2px;
`;

export const TextContainer = styled.View`
  height: 40px;
  width: 70px;
  align-items: center;
  justify-content: center;

  
`;

export const StatsText = styled.Text`
    flex: 1;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: black;
    opacity: 0.8;
    margin-left: 8px;
    margin-right: 8px;
    align-self: flex-start;
    align-content: center;
    margin-top: 8px;
`;

export const StatsNumber = styled.Text`
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: black;
    opacity: 0.8;
    margin-left: 12px;
    margin-right: 8px;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Bar = styled.View`
  flex: 1;
  width: 50%; 
  justify-content: flex-start;
  height: 6px;
  background-color: lightgrey;
  border-radius: 4px;
`;

export const StatsBar = styled.View`
  height: 6px;
  width: ${(props: StatLineProps) => props.value}px; 
  max-width: 95%;
  background-color: lightgreen;
  border-radius: 4px;
  align-self: flex-start;
`;