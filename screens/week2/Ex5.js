
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

export default function Ex5() {
  const navigation = useNavigation();
  return (
        <View style={{flex:1}} >
    <View style={{ flex: 1, flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      <View style={{ backgroundColor: "#50E3C2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#4A90E2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#9013FE", width: 100,height:100, }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex6")} />
      </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
