import React, {useContext} from "react";
import {FoodDealContext} from "../../../services/foodDeal/foodDeal.context";
import {FoodDealInfoCard} from "../components/foodDeal-info-card.component";
import {HeaderText} from "../components/foodDeal-info-card.styles";

import {SafeArea} from "../../../components/utility/safe-area.component";
import {TextInput} from "react-native-paper";
import styled from "styled-components";

export const FoodDealDetailScreen = ({route}) => {
  const {restaurants} = useContext(FoodDealContext);
  const {restaurant} = route.params;
  return (
    <SafeArea>
      <FoodDealInfoCard restaurant={restaurant} />
      <HeaderText>Review</HeaderText>
      <TextInput name="review" placeholder="Enter your Review"></TextInput>
    </SafeArea>
  );
};
