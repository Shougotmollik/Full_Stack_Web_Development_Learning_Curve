import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./App/Screen/HomeScreen";
import PlayListScreen from "./App/Screen/PlayListScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeScreen />
        <PlayListScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a415a",
  },
});
