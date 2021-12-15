import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function Signup() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding:10
      }}
    >
      <TextInput placeholder="Input ID" style={{fontSize:20, marginTop: 10}} />
      <TextInput placeholder="Input Email"style={{fontSize:20, marginTop: 10}} />
      <TextInput placeholder="Input Address"style={{fontSize:20, marginTop: 10,marginBottom:10}} />
      <Button title="Sign UP" color="purple" />
    </View>
  );
}
