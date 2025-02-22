import {
  useCurrentSelectCategorySetter,
  useCurrentSelectKeywordSetter,
  useSearchByFilteringSetter
} from "@atoms/index";
import { useTheme } from "@emotion/react";
import { useInput } from "@toppings/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Text } from "~/components/Common/Typo";
import { useSetNavigation } from "~/hooks";
import {
  useFetchRestaurantByName,
  useUploadRecentHistory
} from "~/server/recent";
import { useMapStore } from "~/stores/map";
import { isLoggedIn } from "~/utils";

const useFilterRestaurant = () => {
  const { colors, weighs } = useTheme();
  const [restaurantList, setRestaurantList] =
    useState<Restaurant.SearchByFilteringDTO[]>();

  useSetNavigation({
    top: {
      marginBottom: 37,
      backDirectlyURL: isLoggedIn() ? "/recent" : "/",
      title: (
        <Text _fontSize={19} weight={weighs.bold} _color={colors.secondary[47]}>
          {restaurantList?.length ?? "0"} Restaurants
        </Text>
      )
    }
  });

  const { push } = useRouter();

  const dispatchCurrentLocation = useMapStore(
    state => state.dispatchCurrentLocation
  );
  const setCurrentSelectCategory = useCurrentSelectCategorySetter();
  const setCurrentSelectKeyword = useCurrentSelectKeywordSetter();
  const mapSearchByFiltering = useSearchByFilteringSetter();
  const { mutate: uploadRecentHistoryMutate } = useUploadRecentHistory();
  const { mutate: fetchRestaurantByNameMutate } = useFetchRestaurantByName({
    onSuccess: data => {
      setRestaurantList(data);
    }
  });

  const {
    props: keyword,
    debouncedValue,
    setValue
  } = useInput({
    useDebounce: true,
    debounceTimeout: 300
  });

  useEffect(() => {
    if (!debouncedValue.length) {
      setRestaurantList(undefined);
      return;
    }

    fetchRestaurantByNameMutate(debouncedValue);
  }, [debouncedValue, fetchRestaurantByNameMutate]);

  const restaurantCardClickHandler = (
    item: Restaurant.SearchByFilteringDTO
  ) => {
    uploadRecentHistoryMutate({
      type: "Filter",
      keyword: item.name,
      category: "Name",
      content: item.address,
      restaurantId: item.id
    });

    dispatchCurrentLocation({
      latitude: item.latitude,
      longitude: item.longitude
    });

    mapSearchByFiltering([item]);
    setCurrentSelectKeyword(item.name);
    setCurrentSelectCategory("Name");

    push("/");
  };

  return {
    keyword,
    setValue,
    restaurantList,
    fetchRestaurantByNameMutate,
    restaurantCardClickHandler
  };
};

export default useFilterRestaurant;
