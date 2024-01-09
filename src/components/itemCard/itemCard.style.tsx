import styled, { css } from "styled-components";

interface itemCardProps {
    screenWidth: number;
    typeColor: string;
}

export const CardContainer = styled.TouchableOpacity`
    height: 200px;
    width: ${(props: itemCardProps) => props.screenWidth}px;
    border-radius: 12px;
    margin-vertical: 8px;
    margin-horizontal: 8px;
    background-color: ${(props: itemCardProps) => props.typeColor};
    padding: 2px;
    align-items: center;
    ${css`box-shadow: 0px 4px 8px #71768e3d;`};
`;

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const TextContainer = styled.View`
    justify-content: flex-start;
    align-items: center;
    flex: 1;
`;

export const TitleText = styled.Text`
    font-family: 'Open Sans';
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    margin-top: 8px;
    margin-left: 4px;
    margin-bottom: 16px;
    color: white;
    align-self: flex-start;
`;

export const DescriptionText = styled.Text`
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
    color: white;
    opacity: 0.6;
    align-self: flex-end;
`;