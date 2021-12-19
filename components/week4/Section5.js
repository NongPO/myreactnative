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

export default function Section5() {
  return <View style={{borderBottomWidth:2 ,borderBottomColor:"#D3D3D3",paddingVertical:10}}>
      
      <View style={{paddingTop:10,flexDirection :'row'}}>
            <MyIcon title='Wifi' name="wifi" size={32} color='orange' />
            <MyIcon title='Coffee' name="coffee" size={32} color='orange' />
            <MyIcon title='bath' name="bath" size={32} color='orange' />
            <MyIcon title='car' name="car" size={32} color='orange' />
            <MyIcon title='pawn' name="paw" size={32} color='orange' />
        </View>
  </View>;
}
