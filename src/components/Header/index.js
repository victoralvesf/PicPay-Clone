import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  HeaderWrapper,
  BalanceContainer,
  BalanceLabel,
  Balance,
} from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <MaterialCommunityIcons name="qrcode-scan" size={28} color="#10c86e" />

      <BalanceContainer>
        <BalanceLabel>Meu saldo</BalanceLabel>
        <Balance>R$ 0,00</Balance>
      </BalanceContainer>

      <AntDesign name="gift" size={30} color="#10c86e" />
    </HeaderWrapper>
  );
};

export default Header;
