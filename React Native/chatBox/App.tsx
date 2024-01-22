import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StoriesList from './components/StoriesList';
import ChatList from './components/ChatList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StoriesList />
        <ChatList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00b4fc',
    flex: 1,
  },
});
