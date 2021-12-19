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

export default function Section2() {
  return (
    
      <View
        style={{
          flex: 1,
          margin: 50,
          padding: 10,
          borderRadius: 20,
          alignItems: "center",
          marginTop: -40,
          borderColor: "grey",
          borderWidth: 1,
          backgroundColor: "white",
          borderWidth: 1,
          marginBottom:0
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            
          }}
        >
          Hilton San Francisco
        </Text>

        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>

        <Text style={{ fontSize: 10, textAlign: "center", color: "grey" }}>
          Facilities provided may range from a modest quality mattress in a
          small room to large suites
        </Text>
      </View>
    
  );
}
