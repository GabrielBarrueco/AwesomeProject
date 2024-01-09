import fireIcon from "../assets/typeIcons/Fire.png";
import waterIcon from "../assets/typeIcons/Water.png";
import bugIcon from "../assets/typeIcons/Bug.png";
import darkIcon from "../assets/typeIcons/Dark.png";
import dragonIcon from "../assets/typeIcons/Dragon.png";
import eletricIcon from "../assets/typeIcons/Electric.png";
import fairyIcon from "../assets/typeIcons/Fairy.png";
import fightingIcon from "../assets/typeIcons/Fighting.png";
import flyingIcon from "../assets/typeIcons/Flying.png";
import ghostIcon from "../assets/typeIcons/Ghost.png";
import grassIcon from "../assets/typeIcons/Grass.png";
import groundIcon from "../assets/typeIcons/Grass.png";
import iceIcon from "../assets/typeIcons/Ice.png";
import normalIcon from "../assets/typeIcons/Normal.png";
import poisonIcon from "../assets/typeIcons/Poison.png";
import psychicIcon from "../assets/typeIcons/Psychic.png";
import rockIcon from "../assets/typeIcons/Rock.png";
import steelIcon from "../assets/typeIcons/Steel.png";

const icons = {
    fireIcon,
    waterIcon,
    bugIcon,
    darkIcon,
    dragonIcon,
    eletricIcon,
    fairyIcon,
    fightingIcon,
    flyingIcon,
    ghostIcon,
    grassIcon,
    groundIcon,
    iceIcon,
    normalIcon,
    poisonIcon,
    psychicIcon,
    rockIcon,
    steelIcon,
}

export interface IPokemonTypeUtil {
    id: string,
    color: string,
    icon: string,
}

export const PokeType = [
    {
        id: "normal",
        color: "#A8A77A",
        icon: icons.normalIcon
    },
    {
        id: "fire",
        color: "#EE8130",
        icon: icons.fireIcon
    },
    {
        id: "Water",
        color: "#6390F0",
        icon: icons.waterIcon
    },
    {
        id: "Electric",
        color: "#F7D02C",
        icon: icons.eletricIcon
    },
    {
        id: "Grass",
        color: "#7AC74C",
        icon: icons.grassIcon
    },
    {
        id: "Ice",
        color: "#96D9D6",
        icon: icons.iceIcon
    },
    {
        id: "Fighting",
        color: "#C22E28",
        icon: icons.fightingIcon
    },
    {
        id: "Poison",
        color: "#A33EA1",
        icon: icons.poisonIcon
    },
    {
        id: "Ground",
        color: "#E2BF65",
        icon: icons.groundIcon
    },
    {
        id: "Flying",
        color: "#A98FF3",
        icon: icons.flyingIcon
    },
    {
        id: "Psychic",
        color: "#F95587",
        icon: icons.psychicIcon
    },
    {
        id: "Bug",
        color: "#A6B91A",
        icon: icons.bugIcon
    },
    {
        id: "Rock",
        color: "#B6A136",
        icon: icons.rockIcon
    },
    {
        id: "Ghost",
        color: "#735797",
        icon: icons.ghostIcon
    },
    {
        id: "Dragon",
        color: "#6F35FC",
        icon: icons.dragonIcon
    },
    {
        id: "Dark",
        color: "#705746",
        icon: icons.darkIcon
    },
    {
        id: "Steel",
        color: "#B7B7CE",
        icon: icons.steelIcon
    },
    {
        id: "Fairy",
        color: "#D685AD",
        icon: icons.fairyIcon
    },
]
