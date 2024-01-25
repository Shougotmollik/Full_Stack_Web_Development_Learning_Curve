import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={[styles.bgColor, styles.container]}>
        <TouchableOpacity style={styles.actionBtn}>
          <View>
            <Text style={styles.actionBtnTxt}> Press Here</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtnTxt: {
    color: "white",
  },
  actionBtn: {
    backgroundColor: "#0de5a8",
    height: 50,
    width: 150,
  },
});
