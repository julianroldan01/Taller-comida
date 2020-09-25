import React, { useRef, useEffect } from 'react';
///import React, { Component } from 'react'
import { Animated, Text, View, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { render } from 'react-dom';



export default class home extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <p><Image
          source={{
            uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/295717-que-es-malo-abusar-comida-rapida.png?itok=NWLAbya1',
          }}
          style={{ width: 1300, height: 400 }}
        /></p>

        <p>
          <text style={{ width: 350, height: 290 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 5 }}>Selecciona categoria</Text>
          </text>
        </p>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={{
            uri: 'https://personalrunning.com/wp-content/uploads/2019/07/32239.jpg'

          }}
            style={{ width: 150, height: 100 }} />


          <Image source={{
            uri: 'https://www.zenu.com.co/wp-content/uploads/2019/07/pizza-carnes-zenu-recetas-1200x900.jpg'
          }}
            style={{ width: 150, height: 100 }} />
          <Image source={{
            uri: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'
          }}
            style={{ width: 150, height: 100 }} />
          <Image source={{
            uri: 'https://s1.eestatic.com/2015/03/12/cocinillas/Cocinillas_17508325_115878909_1706x960.jpg'
          }}
            style={{ width: 150, height: 100 }} />
        </View>
        <p>
          <text style={{ width: 350, height: 290 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 5 }}>Selecciona Producto</Text>
          </text>
        </p>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={{
            uri: 'https://s1.eestatic.com/2015/03/12/cocinillas/Cocinillas_17508325_115878909_1706x960.jpg'
          }}
            style={{ width: 150, height: 100 }} />
          <text style={{ width: 250, height: 50 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 20 }}>Pollo asado:</Text>
          </text>
          <text style={{ width: 150, height: 50 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 2 }}>$12.000</Text>
          </text>
          <center><Button color="green"

            title="comprar"
            onPress={() =>
              this.props.navigation.navigate('anadir', { name: 'añadir' })}

          />
          </center>

        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={{
            uri: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'
          }}
            style={{ width: 150, height: 100 }} />
          <text style={{ width: 250, height: 50 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 20 }}>Hamburguesa:</Text>
          </text>
          <text style={{ width: 150, height: 50 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 2 }}>$9.000</Text>
          </text>
          <center>
            <Button color="green"
              title="comprar"
              onPress={() =>
                this.props.navigation.navigate('anadir', { name: 'añadir' })}

            />
          </center>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={{
            uri: 'https://s1.eestatic.com/2015/03/12/cocinillas/Cocinillas_17508325_115878909_1706x960.jpg'
          }}
            style={{ width: 150, height: 100 }} />
          <text style={{ width: 250, height: 50 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 20}}>Pollo asado:</Text>
          </text>
          <text style={{ width: 150, height: 50 }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 2 }}>$12.000</Text>
          </text>
          <center>
            <Button color="green"
              title="comprar"
              onPress={() =>
                this.props.navigation.navigate('anadir', { name: 'añadir' })}
            />
          </center>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop:20 }}>
          <text style={{ width: 100, height: 50 }}>
            <Text style={{ fontSize: 20, textAlign: 'right' }}>Tu orden</Text>
          </text>
          <center>
            <Button style={{ width: 100, height: 50 }}
              title="Me vengo!"
              onPress={() =>
                this.props.navigation.navigate('pedido', { name: 'pedido' })}
            />
          </center>
          <text style={{ width: 150, height: 50 }}>
            <Text style={{ fontSize: 20, textAlign: 'right' }}>    Valor</Text>
          </text>
        </View>
      </View>
    )
  }
}
