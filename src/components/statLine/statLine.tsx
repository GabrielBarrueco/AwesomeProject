import { IPokemonStat } from "../../api/interfaces/Pokemon/Pokemon";
import { Bar, StatsBar, StatsContainer, StatsNumber, StatsText, TextContainer } from "./statLine.style";

interface IStatLineProos {
  stat: IPokemonStat;
}

export const StatLine = (props: IStatLineProos) => {
  const barLength = props.stat.base_stat * 3;
  return (
    <StatsContainer>
      <TextContainer>
        <StatsText>{props.stat?.stat.name}</StatsText>
      </TextContainer>
        <Bar>
          <StatsBar value={barLength} />
        </Bar>
      <TextContainer>
        <StatsNumber>{props.stat.base_stat}</StatsNumber>
      </TextContainer>
    </StatsContainer>
  )
}