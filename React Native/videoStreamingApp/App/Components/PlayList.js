import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const PlayList = () => {
  const courseList = [
    {
      id: 1,
      name: "Python full Course",
      imageUrl:
        "https://blog.eduonix.com/wp-content/uploads/2018/09/Scientific-Python-Scipy.jpg",
    },
    {
      id: 2,
      name: "JavaScript Full Course",
      imageUrl: "https://www.keycdn.com/img/support/javascript.png",
    },
    {
      id: 3,
      name: "React Native Full Course",
      imageUrl:
        "https://codersera.com/blog/wp-content/uploads/2019/06/reactive-nativingitup.png.800x600_q96.png",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Top Courses</Text>
      <FlatList
        data={courseList}
        keyExtractor={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.courseImage}
            />
            <Text style={styles.courseTitle}>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headingText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  courseImage: {
    height: 150,
    width: 250,
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    shadowOffset: {
      width: 1,
      width: 1,
    },
  },
  courseTitle: {
    color: "white",
    marginLeft: 15,
    fontWeight: "600",
  },
});
