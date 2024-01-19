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
  Alert,
} from "react-native";
import Greet from "./components/Greet";
const imgload = require("./assets/adaptive-icon.png");

export default function App() {
  const [isVisiable, setIsvisiable] = useState(false);

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={{ backgroundColor: "yellow", flex: 1 }}>
        <Greet name="shougot" />
      </View>
    </View>
  );
}
