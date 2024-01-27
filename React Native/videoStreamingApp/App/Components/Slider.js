import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    setSliderList([
      {
        id: 1,
        name: "Slider 1",
        imageUrl: "https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg",
      },
      {
        id: 2,
        name: "Slider 2",
        imageUrl: "https://i.ytimg.com/vi/_5-1wVJvxSY/maxresdefault.jpg",
      },
    ]);
  }, []);

  return (
    <View>
      <FlatList
        data={sliderList}
        horizontal={true}
        renderItem={({ item, index }) => (
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.sliderImage} />
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get("screen").width * 0.88,
    height: 170,
    marginTop: 12,
    borderRadius: 10,
    marginRight: 10,
  },
});
