import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StoriesList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary 👨‍💻',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 3,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 4,
      name: 'Shougot Moll8k 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 5,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 6,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 7,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 8,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 9,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
  ];
  return (
    <View>
      <ScrollView horizontal={true} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => {
          return (
            <View key={uid}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.storiesImage}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default StoriesList;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    elevation: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginHorizontal: 8,
    // backgroundColor:"#17f9ff"
  },
  storiesImage: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 4,
    borderWidth: 2,
    borderColor: '#001449',
  },
});
