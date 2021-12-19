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

export default function Section6() {
  return <View style={{paddingTop:20,borderBottomWidth:2 ,borderBottomColor:"#D3D3D3",paddingVertical:5}}>
      <Text style={{fontSize:20}}>Location</Text>
      <Text style={{color:'grey', paddingVertical:10}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
      <View style={{flexDirection:"row"}}>
        <Image style={{flex:1,resizeMode:"cover",aspectRatio:4/2}} source={ require('../../assets/week3/map.jpg') }/>
        </View>
      
  </View>;
}
