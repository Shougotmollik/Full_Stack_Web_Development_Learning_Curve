import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatList = () => {
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
      name: 'Shougot Mollik 👨‍💻',
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
    {
      uid: 10,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 11,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
    {
      uid: 12,
      name: 'Shougot Mollik 👨‍💻',
      status: 'Love to explorer new Tecnology',
      imageUrl: 'https://avatars.githubusercontent.com/u/113712457?v=4',
    },
  ];
  return (
    <View>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, imageUrl, status}) => {
          return (
            <View key={uid} style={[styles.card, styles.elevatedCard]}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.imageCard}
              />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    marginLeft: 2,
    padding: 8,
    borderRadius: 12,
  },
  elevatedCard: {
    backgroundColor: '#abe4ff',
    elevation: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  imageCard: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001449',
  },
  userStatus: {
    fontSize: 14,
    fontWeight: '400',
    color: '#012677',
  },
});
