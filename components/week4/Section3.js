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
  Image
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Section3() {
  return (
      <View style={{flex:1,borderBottomWidth:2 ,borderBottomColor:"#D3D3D3",}}>
    <View style={{flex:1,marginTop:-10,marginBottom:0,paddingTop:10}} >
    <View style={{flexDirection:"row"}} >
    <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#FF6666', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20, color : "white" }}>9.5</Text>
</View>

        <View style={{ paddingLeft:10,paddingVertical:5 }}>
          <Text style={{fontSize:20,color:'#FF6666'}}>Excellent</Text>
          <Text style={{color:'black'}}>See 801 reviews</Text>
        </View>
    </View>
    </View>
    </View>
  );
}
