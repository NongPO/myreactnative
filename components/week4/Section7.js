import { StatusBar } from "expo-status-bar";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import MyIcon from "../week3/MyIcon";

export default function Section7() {
  return <View style={{flex:1,padding:15,borderBottomWidth:2 ,borderBottomColor:"#D3D3D3",}} >
      <Text style={{fontSize:20,paddingVertical:10}}>Room Type</Text>
  <View style={{flexDirection:"row"}} >
      <Image style={{width:100,height:100,borderRadius: 20}} source={ require('../../assets/week3/room-8.jpg') }/>
      <View style={{ paddingLeft:10}}>
        <Text style={{fontSize:20}}>Standard Twin Room</Text>
        <Text style={{color:'#FF6666',fontSize:20,paddingTop:20}}>$399.99</Text>
        <Text style={{color:'#00BFFF'}}>Hurry Up! This is your last room!</Text>
      </View>
  </View>
      
      
  </View>;
}
