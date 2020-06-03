import React from "react";

import { Container, Option, Title, Img } from "./styles";

import img8 from "../../assets/images/08.png";
import img9 from "../../assets/images/09.png";
import img10 from "../../assets/images/10.png";
import img11 from "../../assets/images/11.png";
import img12 from "../../assets/images/12.png";

const items = [
  {
    img: img8,
    title: "Universitário! Cadastre-se e ganhe mais cashback",
    color: "#172c4a",
  },
  {
    img: img9,
    title: "Compre créditos pré-pagos",
    color: "#6a0159",
  },
  {
    img: img10,
    title: "Pague um amigo a distância",
    color: "#4139c8",
  },
  {
    img: img11,
    title: "Pague suas contas sem sair de casa",
    color: "#00ab4b",
  },
  {
    img: img12,
    title: "Adicione dinheiro na sua carteira",
    color: "#ba2f76",
  },
];

const Tips = () => {
  return (
    <Container>
      {items.map((item, index) => (
        <Option bgColor={item.color} key={index}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
