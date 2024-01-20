import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

function App() {
  const[counter,setCounter]=useState(0)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text>
          count:{counter}
        </Text>
        <Button title='Increase'onPress={()=>{
          setCounter(counter+1)
        }} />
        <Button title='Decrease' onPress={()=>{
          setCounter(counter-1)
        }}/>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"lime"
  },
  box:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  }
})