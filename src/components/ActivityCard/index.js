import React from "react";
import { Feather, EvilIcons } from "@expo/vector-icons";

import {
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardFooter,
  Details,
  Value,
  Period,
  Actions,
  Option,
  OptionLabel,
  Divider,
} from "./styles";

import avatar from "../../assets/images/avatar.png";

const ActivityCard = () => {
  return (
    <Card>
      <CardHeader>
        <Avatar source={avatar} />
        <Description>
          <Bold>Você</Bold> pagou a <Bold>@victoralves</Bold>
        </Description>
      </CardHeader>

      <CardFooter>
        <Details>
          <Value>R$ 18,00</Value>

          <Divider />

          <Feather name="lock" color="#ccc" size={12} />
          <Period>2 anos atrás</Period>
        </Details>

        <Actions>
          <Option>
            <EvilIcons name="comment" size={24} color="#fff" />
            <OptionLabel>0</OptionLabel>
          </Option>
          <Option>
            <EvilIcons name="heart" size={24} color="#fff" />
            <OptionLabel>0</OptionLabel>
          </Option>
        </Actions>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
