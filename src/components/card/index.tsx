import Shadow from "../../assets/shadow.svg";

import * as Box from "./style";

export function Card({ image, name, nameHero }) {
  return (
    <Box.Container>
      <Box.contentText>
        <Box.image source={{ uri: image }} alt="image" />
        <Box.imageShadow
          source={require("../../assets/shadow.png")}
          alt="image"
        />
        <Box.TextName>{name}</Box.TextName>
        <Box.TextNameHero>{nameHero}</Box.TextNameHero>
      </Box.contentText>
    </Box.Container>
  );
}
