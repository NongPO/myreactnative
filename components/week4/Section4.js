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

export default function Section4() {
  return <View style={{borderBottomWidth:2 ,borderBottomColor:"#D3D3D3",paddingHorizontal:5}}>
      <Text style={{fontSize:20,paddingTop:10,padding:5}}>
      Hotel Description
      </Text>
      <Text style={{padding:5,color:'grey'}}>
      218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
      </Text>
  </View>;
}
