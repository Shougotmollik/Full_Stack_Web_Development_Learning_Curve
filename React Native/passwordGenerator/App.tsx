import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.bodyBgc}>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  bodyBgc: {
    flex: 1,
    backgroundColor: "#78909c",
  },
});
