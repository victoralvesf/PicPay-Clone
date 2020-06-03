import React from "react";

import Header from "../../components/Header";
import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activities";

import { Wrapper, ScrollView } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <ScrollView>
        <Header />
        <Suggestions />
        <Activities />
      </ScrollView>
    </Wrapper>
  );
};

export default Home;
