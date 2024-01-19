import React from "react";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1, styles.box_shadow]}>
        <Text>Hello</Text>
      </View>
      <View style={[styles.box, styles.box2, styles.box_shadow]}></View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    padding: 60,
  },
  box: {
    height: 200,
    width: 200,
    margin: 20,
    borderRadius: 25,
    borderWidth: 2,
  },
  box1: {
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "yellow",
  },
  box_shadow: {
    elevation: 30,
    shadowColor: "blue",
  },
});
