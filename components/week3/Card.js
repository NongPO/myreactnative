import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from "react-native";

export default function Card() {
  return (
    <View style={{flex:1}} >
        <View style={{flexDirection:"row"}} >
            <Image style={{width:50,height:50,borderRadius: 25}} source={ require('../../assets/week3/profile-2.jpg') }/>
            <View style={{ paddingLeft:10}}>
              <Text style={{fontSize:20}}>Steve Garlett</Text>
              <Text style={{color:'grey'}}>5 hours ago | 100k views</Text>
            </View>
        </View>

        <View style={{flexDirection:"row"}}>
        <Image style={{flex:1,resizeMode:"cover",aspectRatio:4/2}} source={ require('../../assets/week3/trip-2.jpg') }/>
        </View>
        <View>
          <Text style={{fontSize:20}}>Overseas Adventure Travel In Nepal</Text>
          <Text style={{color:'red'}}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
          
        </View>
      
    </View>
  );
}
