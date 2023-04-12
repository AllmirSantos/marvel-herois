import { FlatList, Text } from "react-native";
import * as Box from "./style";
import { Header } from "../../components/header";
import { Categories } from "../../components/categories";
import { Card } from "../../components/card";

import { DATA } from "./data";

export function Home() {
  return (
    <Box.Container>
      <Header />
      <Box.ContainerScroll>
        <Box.ContentText>
          <Box.TextH5 className="text-center">
            Bem vindo ao Marvel Heroes
          </Box.TextH5>
          <Box.TextH1 className="text-center">
            Escolha o seu personagem
          </Box.TextH1>
        </Box.ContentText>
        <Categories />

        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Card name={item.title} nameHero={item.value} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </Box.ContainerScroll>
    </Box.Container>
  );
}
