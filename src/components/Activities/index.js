import React from "react";

import { Container, Header, Title, Options, Label, ScrollView } from "./styles";

import ActivityCard from "../ActivityCard";
import Tips from "../Tips";

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <Options>
          <Label active>Todas</Label>
          <Label>Minhas</Label>
        </Options>
      </Header>

      <ActivityCard />
      <Tips />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <Tips />
    </Container>
  );
};

export default Activities;
