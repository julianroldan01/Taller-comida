import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button } from 'react-native'

export default class login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <p><Image source={{
          uri: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'
        }}
          style={{ width: 700, height: 350 }}
        /></p>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <text style={{ width: 100, height: 50 }}>
            <p><Text style={{ fontSize: 20, textAlign: 'right' }}>Cantidad</Text></p>
          </text>
          <p><Button style={{ width: 100, height: 50 }}
            title="-"
            onPress={() =>
              this.props.navigation.navigate('login', { name: 'login' })}
          /></p>
          <p><text style={{ width: 150, height: 50 }}>
            <Text style={{ fontSize: 20, textAlign: 'right' }}> 1 </Text>
          </text></p>
          <p><Button style={{ width: 100, height: 50 }}
            title="+"
            onPress={() =>
              this.props.navigation.navigate('login', { name: 'login' })}
          /></p>
          <text style={{ width: 100, height: 50 }}>
            <p><Text style={{ fontSize: 20, textAlign: 'right' }}>   Valor</Text></p>
          </text>
        </View>
        <View>
      <p><Button style={{ width: 100, height: 50 }}
      style={{paddingTop:20}}
        title="Agregar a pedido"
        onPress={() =>
          this.props.navigation.navigate('login', { name: 'login' })}
      /></p>
      </View>
      </View>

    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:'red'
  },
  texto: {
    color: 'blue'
  }

})