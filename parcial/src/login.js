import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image, ScrollView, Button } from 'react-native'

export default class login extends React.Component {

  render() {
    return (

        <ScrollView>
      <text><center><h2>Ingresa tu direccion:</h2></center></text>
      <text><center><h5>Nombre:</h5></center></text>
    <TextInput
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 2
    }}
    
  />
  
  <View style={styles.logins}>
  <View style={[styles.flex, styles.loginRight]}>
   <TextInput  
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 2
    }}
   
  />
  </View>
  <View style={[styles.flex, styles.loginLeft]}>
   <TextInput  
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 2
    }}
   
  />
  </View>
  <View style={[styles.flex, styles.loginRight]}>
   <TextInput  
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 2
    }}
   
  />
  </View>
  </View>
    </ScrollView>
          
    )
 }
}
const styles = StyleSheet.create({
  loginRight : {
    alignItems : 'center',
    justifyContent : 'center'
},
logins : {
  flex : 0.6,
  flexDirection : 'row'
},
flex : {
  flex : 1
},
loginLeft : {
  alignItems : 'center',
  justifyContent : 'center'
},
});
