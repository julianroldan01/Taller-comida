import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native'

export default class pedido extends React.Component {

   render() {
      return (
         <View style={styles.fondo}>
            <View style={styles.container}>
               <center><Text style={styles.texto}>TU PEDIDO</Text></center>
            </View>
            <View style={styles.productos}>
               <View style={[styles.flex, styles.productosLeft]}>
                  <Text style={styles.textColor} onPress={this.login}>
                     CANTIDAD
            </Text>
               </View>

               <View style={[styles.flex, styles.productosCenter]}>
                  <Text style={styles.textColor} onPress={this.login}>
                     NOMBRE PRODUCTO
            </Text>
               </View>
               <View style={[styles.flex, styles.productosCenter]}>
                  <Text style={styles.textColor} onPress={this.login}>
                     VALOR
            </Text>
               </View>
            </View>
            <ScrollView>
               <View style={styles.productos}>
                  <View style={[styles.flex, styles.productosLeft]}>
                     <Text style={styles.textColor} onPress={this.login}>
                        1
              </Text>
                  </View>

                  <View style={[styles.flex, styles.productosCenter]}>
                     <Text style={styles.textColor} onPress={this.login}>
                        HAMBUGUESA MIXTA
              </Text>
                  </View>

                  <View style={[styles.flex, styles.productosRight]}>
                     <Text style={styles.textColor} onPress={this.login}>
                        $22.000
              </Text>
                  </View>
               </View>
            </ScrollView>
            <View style={styles.productos}>
               <View style={[styles.flex, styles.productosLeft, styles.espacio]}>
                  <Text style={styles.textColor}>
                     TU ORDEN
            </Text>
               </View>

               <View style={[styles.flex, styles.productosCenter, styles.espacio]}>
                  <TouchableOpacity
                     style={styles.buttn1}
                     onPress={() =>
                        this.props.navigation.navigate("login", { name: "login" })
                     }>
                     <text>Confirmar</text>
                  </TouchableOpacity>
               </View>

               <View style={[styles.flex, styles.productosRight, styles.espacio]}>
                  <Text style={styles.textColor} >
                     VALOR
            </Text>
               </View>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
   },
   espacio: {
      paddingTop: 300
   },
   texto: {
      color: "#000000",
      fontSize: 50,
      padding: 10,
      alignContent: "center",
      justifyContent: "center",
   },

   textColor: {
      color: "#000000",
      fontSize: 25,
      justifyContent: "center",
   },
   fondo: {
      flex: 0.5,
      justifyContent: "center",
      alignContent: "center",
   },

   buttn1: {
      backgroundColor: "#99DE1E",
      padding: 10,
      margin: 15,
      height: 40,
   },

   productos: {
      flex: 0.5,
      flexDirection: "row",
   },

   flex: {
      flex: 0.3,
   },
   productosLeft: {
      alignItems: "center",
      justifyContent: "center",
   },
   productosCenter: {
      alignItems: "center",
      justifyContent: "center",
   },
   productosRight: {
      alignItems: "center",
      justifyContent: "center",
   },
});
