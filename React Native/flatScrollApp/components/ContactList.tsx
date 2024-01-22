import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
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
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => {
          return (
            <View key={uid} style={styles.userCard}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.cardImage}
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

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {
    backgroundColor: 'white',
    height: 180,
    width: 360,
    marginHorizontal: 16,
    marginTop: 8,
    padding: 12,
    elevation: 6,
    borderRadius: 8,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#abe4ff',
    marginBottom: 2,
    borderRadius: 12,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  userStatus: {
    fontSize: 12,
  },
});
