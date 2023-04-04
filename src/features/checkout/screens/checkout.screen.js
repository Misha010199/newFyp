// import React from "react";
// import {ScrollView} from "react-native";
// import {SafeArea} from "../../../components/utility/safe-area.component";
// import {Spacer} from "../../../components/spacer/spacer.component";
// import {
//   ButtonContainer,
//   ButtonCover,
//   ProceedButton,
// } from "../components/checkout.styles";

// export const CheckoutScreen = ({navigation}) => {
//   return (
//     <SafeArea>
//       <ScrollView>
//         <ButtonCover />
//         <ButtonContainer>
//           <Spacer size="large">
//             <ProceedButton label="Pay" icon="cash" mode="contained">
//               Proceed to Pay
//             </ProceedButton>
//           </Spacer>
//         </ButtonContainer>
//       </ScrollView>
//     </SafeArea>
//   );
// };

import React, {useContext} from "react";
import styled from "styled-components/native";
import {List, Avatar} from "react-native-paper";

import {CheckoutContext} from "../../../services/checkout/checkout.context";

import {SafeArea} from "../../../components/utility/safe-area.component";
import {Text} from "../../../components/typography/text.component";
import {Spacer} from "../../../components/spacer/spacer.component";

import {RestaurantList} from "../../../features/FoodDeal/components/foodDeal-list.styles";
import {FoodDealInfoCard} from "../../FoodDeal/components/foodDeal-info-card.component";
import {Button} from "react-native-paper";

const NoCheckoutArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const CheckoutScreen = ({navigation}) => {
  const {Checkout} = useContext(CheckoutContext);

  return Checkout.length ? (
    <SafeArea>
      <Button
        title="Go Back"
        icon="arrow-left"
        textColor="black"
        onPress={() => navigation.goBack()}></Button>

      <RestaurantList
        data={Checkout}
        renderItem={({item}) => {
          return (
            // <TouchableOpacity
            //   onPress={() =>
            //     navigation.navigate("RestaurantDetail", {
            //       restaurant: item,
            //     })
            //   }>
            <Spacer position="bottom" size="large">
              <FoodDealInfoCard restaurant={item} />
            </Spacer>

            // </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />

      <Spacer position="left" size="medium">
        <List.Section />
        <Button
          title="Go to Checkout"
          buttonColor="#5D3FD3"
          icon="shopping"
          textColor="white"
          mode="contained"
          onPress={() => navigation.navigate("Payments")}>
          Proceed To Pay
        </Button>
      </Spacer>
    </SafeArea>
  ) : (
    <NoCheckoutArea>
      <Text center>No Checout yet</Text>
    </NoCheckoutArea>
  );
};
