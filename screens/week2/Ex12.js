import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

export default function Ex12() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
    <View style={{ flex: 1,flexDirection:"row",}}>
      <View style={{ backgroundColor: "#50E3C2",flex: 1 }}></View>
      <View style={{ backgroundColor: "#4A90E2",flex: 1 }}></View>
      <View style={{ backgroundColor: "#9013FE",flex: 1 }}></View>
      
    </View>
    <View style={{flex:1}} ></View>
    <Button title="Next" onPress={() => navigation.navigate("Ex1")} />
    </View>
  );
}


