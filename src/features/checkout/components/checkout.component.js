import React, {useContext} from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Text} from "../../../components/typography/text.component";

import {CheckoutContext} from "../../../services/checkout/checkout.context";
import {useNavigation} from "@react-navigation/native";

const CheckoutButton = styled(TouchableOpacity)`
  position: absolute;
  top: 190px;
  right: 25px;
  z-index: 9;
`;

export const Checkout = ({restaurant}) => {
  const navigation = useNavigation();
  const {Checkout, addToCheckout, removeFromCheckout} =
    useContext(CheckoutContext);

  const isCheckout = Checkout.find((r) => r.placeId === restaurant.placeId);

  return (
    <>
      <CheckoutButton
        color="blue"
        icon="cart"
        onPress={() =>
          !isCheckout
            ? addToCheckout(restaurant)
            : removeFromCheckout(restaurant)
        }>
        <AntDesign
          name={isCheckout ? "shoppingcart" : "shoppingcart"}
          size={24}
          color={isCheckout ? "red" : "lightblue"}
        />
      </CheckoutButton>
    </>
  );
};
