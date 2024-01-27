import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Welcome, </Text>
        <Text style={styles.nameText}>Shougot Mollik</Text>
      </View>
      <Image
        source={{
          uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c81bf4c-53df-47dd-bd2d-0015c90567ba/dga879j-b58d4f78-75f7-4126-b4d2-1f29255770de.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjODFiZjRjLTUzZGYtNDdkZC1iZDJkLTAwMTVjOTA1NjdiYVwvZGdhODc5ai1iNThkNGY3OC03NWY3LTQxMjYtYjRkMi0xZjI5MjU1NzcwZGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OgDmNmmnB0WxmRc8bj4uNI9SmDrysD9X47aDZntwsqc",
        }}
        style={styles.ImageStyles}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
  },
  ImageStyles: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  welcomeText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  nameText: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
});
