import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

function App() {
  const[counter,setCounter]=useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize:20,fontWeight:'bold'}}> The Count Value :{counter}</Text>
        <Button  title='increase' onPress={()=>{
          setCounter(counter+1);
          if(counter==20){
            setCounter(0);
          }
        }}/>
        <Button title='Decrease' onPress={()=>{
          setCounter(counter-1);
          if(counter==0){
            setCounter(0)
          }
        }}/>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"aqua",
    justifyContent:"center",
  }
})