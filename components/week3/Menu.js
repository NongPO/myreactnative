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
} from "react-native";
import MyIcon from "./MyIcon";

export default function Menun() {
  return (
    <View style={{flex:1,magin:10,padding:10,borderWidth:1}} >
        <View>
            <TextInput placeholder="What're you looking for?"/>
        </View>
        <View style={{flexDirection :'row'}}>
            <MyIcon title='หัวใจ' name="building" size={32} color='orange' />
            <MyIcon title='หัวใจ' name="map-maker" size={32} color='orange' />
            <MyIcon title='หัวใจ' name="car" size={32} color='orange' />
            <MyIcon title='หัวใจ' name="plane" size={32} color='orange' />
        </View>
        <View style={{flexDirection :'row'}} >
            <MyIcon title='หัวใจ' name="ship" size={32} color='orange' />
            <MyIcon title='หัวใจ' name="bus" size={32} color='orange' />
            <MyIcon title='หัวใจ' name="star" size={32} color='orange' />
            <MyIcon title='หัวใจ' name="ellipsis-h" size={32} color='orange' />
        </View>
    </View>
  );
}
