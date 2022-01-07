import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text, ScrollView, Image, FlatList,Dimensions } from "react-native";
import { useState } from "react/cjs/react.development";
import TourItem from "./TourItem";

export default function TourFlatList(props) {

  const tours = [
    { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
    { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg"  },
    { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg"  },
    { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg"  },
    { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
];

const [onlineTour,setOnlineTours ] = useState([]);
const loadOnlineTours = async () => {
  try{
      let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
      let data = await promise.json();
      console.log("Load Data : " , data);
    //SET STATE
      setOnlineTours(data);
  }catch(error){
      console.log("ERROR : " , error);
  }
}
useEffect(() =>{
  loadOnlineTours();

 },[]);

  return (
    <View>
      <Text style={{ fontSize: 25 }}>Tour with flatlist </Text>
      <Text>Let find out what most interesting things</Text>
      <FlatList
      horizontal={true}
      data={onlineTour}
      renderItem={
        ({item,index}) => {
          console.log(item);
          return (  
            <View>
            <View style={{ marginRight: 10, marginVertical: 20 }}>
              <Image
                style={{ width: Dimensions.get("screen").width/2.0,height:150, borderRadius: 10  }}
                source={{ uri: item.uri }} />
  
             

              <View
                style={{
                  marginTop: -30,
                  height: 30,
                  width: 200,
                  paddingHorizontal: 10,
                  backgroundColor: "black",
                  opacity: 0.5,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
              
              <Text style={{ fontSize: 20, color: "cyan" }}>
                {item.title}
              </Text>
            </View>
            </View>
            </View>
            
          );
        }
      }

      
      />
      
    </View> 
  );
}
