import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { useState } from "react/cjs/react.development";
import TourItem from "./TourItem";

export default function Event(props) {

  const [onlineTour, setOnlineTours] = useState([]);
  const loadOnlineTours = async () => {
    try {
      let promise = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      let data = await promise.json();
      console.log("Load Data : ", data);
      //SET STATE
      setOnlineTours(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    loadOnlineTours();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 25 }}>Upcoming Events </Text>
      <Text>What's the Worst That Could Hapend</Text>
      <FlatList
        horizontal={true}
        data={onlineTour}
        renderItem={({ item, index }) => {
          console.log(item);
          return (
            <View>
              <View style={{ marginRight: 10, marginVertical: 20,paddingLeft:10 ,  }}>
                <Image
                  style={{
                    width: Dimensions.get("screen").width /1.5,
                    height: 150,
                    borderTopLeftRadius:10,
                    paddingLeft:10,
                    borderTopRightRadius:10
                    
                  }}
                  source={{ uri: item.uri }}
                />

                <View style={{flexDirection:"row",backgroundColor:"#DEB887",borderWidth:1,borderColor:"grey",borderBottomEndRadius:10 }} >
                <View style={{padding:10}} >

                  <Text style={{ fontSize: 20, color: "red" }}>
                    {item.month}
                  </Text>


                  <Text style={{ fontSize: 20, color: "black" }}>
                    {item.date}
                  </Text>

                </View>


                <View>
                  <Text style={{ fontSize: 20, color: "black" }}>
                    {item.title}
                  </Text>
                
                  <Text style={{ fontSize: 20, color: "grey" }}>
                    {item.datetime}
                  </Text>

                  <Text style={{ fontSize: 20, color: "black" }}>
                    {item.place}
                  </Text>
                

                </View>
                    
            
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
