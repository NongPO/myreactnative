import React from "react";
import { View,TouchableOpacity,Text,OnpressButton } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";

export default function Heartbeat() {    

    const [count , setCount] = useState ("0");

    const onPressButton = () => {
    console.log("PRESSED!")
    let newCount = parseInt(count) + 1;

    setCount(newCount);
};

    return (
        <View>
            <View style={{flexDirection:'row',padding:20,justifyContent:'space-around'}} >
            <TouchableOpacity onPress={onPressButton} >
                <FontAwesome name="heart" size={45} color="red" />
            </TouchableOpacity>
            <Text style={{fontSize:40}} >{count}</Text>
            </View>
        </View>
    );
}
