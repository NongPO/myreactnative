import { StatusBar } from "expo-status-bar";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";

export default function Hotel() {
  return (
    <View style={{ flex: 1 ,padding :10 }}>
      <View style={{flexDirection:"row"}}>
          <Image style={{flex:1 ,resizeMode:"cover",aspectRatio: 5/2,borderRadius:20  }} source={require("../../assets/week3/room-1.jpg")} />
      </View>
      <View style={{flexDirection:"row"}} > 
          <FontAwesome name="map-marker" size={32} color="orange" />
          <Text style={{fontSize:20,color:"grey"}} >553 Cislason Radial</Text>
      </View>
      <View > 
          <Text style={{fontSize:30}} >Boston Hotel</Text>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between",}}>
      <View style={{flexDirection:"row"}} > 
          <FontAwesome name="star" size={32} color="orange"/>
          <FontAwesome name="star" size={32} color="orange"/>
          <FontAwesome name="star" size={32} color="orange"/>
          <FontAwesome name="star" size={32} color="orange"/>
          <FontAwesome name="star" size={32} color="orange"/>
      </View>
      </View>
      <View>
          <Text style={{fontSize:30,color:'grey'}} >125$</Text>
      </View>
    </View>
  );
}
