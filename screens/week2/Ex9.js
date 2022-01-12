import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

export default function Ex9() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}} >
    <View style={{ flex: 1, flexDirection:"column",justifyContent:"space-around",}}>

    <View style={{  flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",}}>
      <View style={{ backgroundColor: "#50E3C2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#4A90E2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#9013FE", width: 100,height:100, }}></View>
    </View>

    <View style={{  flexDirection:"row",alignItems:"center",justifyContent:"space-between",}}>
      <View style={{ backgroundColor: "#50E3C2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#4A90E2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#9013FE", width: 100,height:100, }}></View>
    </View>
    <View style={{  flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between",}}>
      <View style={{ backgroundColor: "#50E3C2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#4A90E2", width: 100,height:100 }}></View>
      <View style={{ backgroundColor: "#9013FE", width: 100,height:100, }}></View>
    </View>
    <View>
    </View>
      <View style={{flex:1}}></View>
    <Button title="Next" onPress={() => navigation.navigate("Ex10")} />
    </View>
    

    


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
