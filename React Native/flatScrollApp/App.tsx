import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'

const App = () => {
  return (
    <SafeAreaView style={styles.bodyColor}>
      <ScrollView>
        <FlatCards/>
        <ElevatedCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  bodyColor:{
    flex:1,
    backgroundColor:"grey",
    
  }
});