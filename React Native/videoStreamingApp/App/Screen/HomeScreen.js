import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import PlayList from "../Components/PlayList";
import VideoGridList from "../Components/VideoGridList";
import BlogView from "../Components/BlogView";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Slider />
      <PlayList />
      <VideoGridList />
      <BlogView />
    </View>
  );
};

export default HomeScreen;
