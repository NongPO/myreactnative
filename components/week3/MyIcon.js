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
  TouchableOpacity,
  
  
} from "react-native";

export default function MyIcon(props) {
  return (
    <View style={{flex:1, alignItems:'center' }} > 
    <View>
      <TouchableOpacity style={{alignItems : "center" }} onPress={ props.onPress}>
        <FontAwesome  name={props.name} size={props.size} color={props.color} />
        <Text>{props.title}</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}
