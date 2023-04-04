import React, {useContext, useState} from "react";
import {TouchableOpacity, FlatList} from "react-native";
import styled from "styled-components/native";
import {ActivityIndicator, Colors} from "react-native-paper";

import {SafeArea} from "../../../components/utility/safe-area.component";
import {Spacer} from "../../../components/spacer/spacer.component";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";

import {FoodDealContext} from "../../../services/foodDeal/foodDeal.context";
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import {FadeInView} from "../../../components/animations/fade.animation";
import {Search} from "../components/search.component";
import {FoodDealInfoCard} from "../components/foodDeal-info-card.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    // width: 200,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const FoodDealScreen = ({navigation}) => {
  const {isLoading, restaurants} = useContext(FoodDealContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("FoodDealDetail", {
                  restaurant: item,
                })
              }>
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <FoodDealInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
