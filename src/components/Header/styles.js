import styled from "styled-components/native";
import { Platform } from "react-native";

export const HeaderWrapper = styled.View`
  padding-top: ${Platform.OS === "android" ? "26px" : "0"};
  background: #131418;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.08);
  height: 55px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceContainer = styled.View`
  align-items: center;
`;

export const BalanceLabel = styled.Text`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Balance = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
