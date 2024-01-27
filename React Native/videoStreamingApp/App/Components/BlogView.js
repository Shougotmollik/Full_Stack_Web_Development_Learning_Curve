import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BlogView = () => {
  const article = [
    {
      id: 1,
      name: "What is typeScript..?",
      imageUrl:
        "https://www.sencha.com/wp-content/uploads/2023/12/JavaScript-vs-TypeScript.png",
    },
  ];
  return (
    <View>
      <Text style={styles.headingtext}>Trending Blog</Text>
      <View style={styles.container}>
        <FlatList
          data={article}
          keyExtractor={article.id}
          horizontal={true}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item.name}</Text>
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                style={styles.imageArticle}
              />
              <Text numberOfLines={3}>
                Most programming languages would throw an error when these sorts
                of errors occur, some would do so during compilation — before
                any code is running. When writing small programs, such quirks
                are annoying but manageable; when writing applications with
                hundreds or thousands of lines of code, these constant surprises
                are a serious problem
              </Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default BlogView;

const styles = StyleSheet.create({
  headingtext: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  container: {
    height: 350,
    width: 400,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 15,
    flexDirection:"column"
  },
  imageArticle: {
    height: 200,
    width: 350,
    padding: 15,
    margin: 15,
  },
});
