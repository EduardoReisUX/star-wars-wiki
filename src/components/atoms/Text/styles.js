import styled from "styled-components/native";

export const CustomText = styled.Text`
  font-size: 24px;
  color: ${({ color }) => color || "white"};
  font-weight: bold;
  margin-top: 16px;
  line-height: 150%;
`;
