import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const App = (): JSX.Element => {
  const [randomBgColor, setRandomBgColor] = useState("#ffffff");
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBgColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBgColor} />

      <View style={[styles.container, { backgroundColor: randomBgColor }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}> Press Here</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtnTxt: {
    color: "white",
    fontSize: 24,
    textTransform: "uppercase",
  },
  actionBtn: {
    backgroundColor: "#0de5a8",
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
