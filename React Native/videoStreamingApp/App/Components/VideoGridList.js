import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const VideoGridList = () => {
  const popularGrid = [
    {
      id: 1,
      name: "AI Full Course",
      imageUrl:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp",
    },
    {
      id: 2,
      name: "Blockchain Full Course",
      imageUrl:
        "https://www.trentonsystems.com/hubfs/Blockchain%20Explained.png",
    },
    {
      id: 3,
      name: "Cyber Security Full Course",
      imageUrl:
        "https://online.sbu.edu/sites/default/files/field/image/cybersecurity_tools_1.jpg",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Popular Courses</Text>
      <FlatList
        data={popularGrid}
        keyExtractor={popularGrid.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.popularImage}
            />
            <Text style={styles.courseTitle}>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default VideoGridList;

const styles = StyleSheet.create({
  headingText: {
    color: "white",
    margin: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
  popularImage: {
    height: 150,
    width: 250,
    marginLeft: 15,
    borderRadius: 10,
  },
  courseTitle: {
    color: "white",
    marginHorizontal: 20,
    padding: 4,
    fontWeight: "400",
  },
});
