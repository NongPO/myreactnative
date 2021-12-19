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

export default function Section8() {
  return (
    <View style={{ flex: 1, padding: 15 , flexDirection:'row', justifyContent:'space-between'  }}>
        <View>
      <Text>price</Text>
      <Text style={{fontSize:20,color:'#FF6666'}} >$399.99</Text>
      <Text>AVG/Night</Text>
      </View>
      <View style={{paddingVertical:20}}>
          <Button  title="Book Now" color={'#FF6666'} />
      </View>
    </View>
  );
}
