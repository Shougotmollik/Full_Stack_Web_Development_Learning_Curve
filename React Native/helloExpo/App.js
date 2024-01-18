import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollViewComponent,
  ScrollView,
  Image,
  ImageBackground,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
} from "react-native";
const imgload = require("./assets/adaptive-icon.png");

export default function App() {
  const [isVisiable, setIsvisiable] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="limegreen" />
      <ActivityIndicator />
    </View>
  );
}
