import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
       <View style={[styles.card,styles.cardOne]}>
        <Text>Red</Text>
       </View>
       <View style={[styles.card,styles.cardTwo]}>
        <Text>Blue</Text>
       </View>
       <View style={[styles.card,styles.cardThree]}>
        <Text>Green</Text>
       </View>
       
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
 headingText:{
  fontSize:24,
  fontWeight:"bold",
  paddingHorizontal:10,
  color:"white"
 },
 container:{
  flex:1,
  flexDirection:"row"
 },
 card:{
  height:100,
  width:100,
  borderRadius:8,
  margin:8,
  flex:1,
  justifyContent:"center",
  alignItems:"center"
 },
 cardOne:{
  backgroundColor:"red",
 },
 cardTwo:{
  backgroundColor:"blue"
 },
 cardThree:{
  backgroundColor:"green"
 }
})