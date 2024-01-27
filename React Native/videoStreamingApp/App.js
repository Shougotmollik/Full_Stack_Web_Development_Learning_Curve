import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./App/Screen/HomeScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeScreen />
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
