import styled from "styled-components/native";
import { colors, fontSizes } from "../../theme";

export const Container = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.silver};
`;
export const ContainerScroll = styled.ScrollView`
  width: 100%;
  display: flex;
  height: 100%;
  padding: 20px 20px;
`;

export const ContentText = styled.View`
  width: 100%;
  display: flex;
`;
export const TextH5 = styled.Text`
  width: 100%;
  display: flex;
  font-size: ${fontSizes.homeSubtitle};
  color: ${colors.grey};
  font-weight: 600;
`;

export const TextH1 = styled.Text`
  width: 100%;
  display: flex;
  font-size: ${fontSizes.homeTitle}
  color: ${colors.dark};
  font-weight: 800,
  padding-top: 5px;
`;
