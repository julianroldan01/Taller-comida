import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import login  from './src/login';
import admin from './src/admin';
import pedido from './src/pedido';
import home  from './src/home';
import añadir from './src/anadir';
//import registro  from './src/views/login/registro';
//import ejercicio2  from './src/ejercicio2';

const proyectoNavigator = createStackNavigator({
 
   home:
    {
      screen: home ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
    login:
    {
      screen: login ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
    admin:
    {
      screen: admin ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
   
    pedido:
    {
      screen: pedido ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
    anadir:
    {
      screen: añadir ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    }
})

export default createAppContainer(proyectoNavigator);