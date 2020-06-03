import React from "react";

import { Container, Option, Image, Label } from "./styles";

import img1 from "../../assets/images/01.png";
import img2 from "../../assets/images/02.png";
import img3 from "../../assets/images/03.png";
import img4 from "../../assets/images/04.png";
import img5 from "../../assets/images/05.png";
import img6 from "../../assets/images/06.png";
import img7 from "../../assets/images/07.png";

const items = [
  {
    key: 5,
    img: img5,
    label: "Central de Doações",
  },
  {
    key: 6,
    img: img6,
    label: "Pagar Conta",
  },
  {
    key: 7,
    img: img7,
    label: "Cobrar",
  },
  {
    key: 1,
    img: img1,
    label: "Recarga de Celular",
  },
  {
    key: 2,
    img: img2,
    label: "Uber Pré Pago",
  },
  {
    key: 3,
    img: img3,
    label: "Cartão de Transporte",
  },
  {
    key: 4,
    img: img4,
    label: "SKY TV Pré-Pago",
  },
];

const Suggestions = () => {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key}>
          <Image source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
