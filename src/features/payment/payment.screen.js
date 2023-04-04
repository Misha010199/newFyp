import React from "react";
import {Button} from "react-native-paper";
import styled from "styled-components";

export const PaymentScreen = ({navigation}) => {
  return (
    <Button
      title="Go Back"
      icon="arrow-left"
      textColor="black"
      onPress={() => navigation.goBack()}>
      Go Back
    </Button>
  );
};
