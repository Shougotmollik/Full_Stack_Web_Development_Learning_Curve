import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FlexBox from "./components/FlexBox";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>{/* <FlexBox /> */}</View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
});
