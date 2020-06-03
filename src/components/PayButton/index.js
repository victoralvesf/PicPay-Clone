import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Button, Label } from "./styles";

const PayButton = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ["#094031", "#094031"] : ["#00fc6c", "#00ac4a"]}
        start={[1, 0.2]}
      >
        <MaterialIcons name="attach-money" size={30} color="#fff" />
        <Label>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;
