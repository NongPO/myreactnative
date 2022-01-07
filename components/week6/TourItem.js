import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text } from "react-native";

export default function TourItem(props) {
  return (
    <View>
      <View style={{ marginRight: 10, marginVertical: 20 }}>
                <Image
                  style={{ width: Dimensions.get("screen").width/1.5, height: 150, borderRadius: 10 }}
                  source={{
                    uri:item.uri ,
                  }}
                />
                <View
                  style={{
                    marginTop: -30,
                    height: 30,
                    width: Dimensions.get("screen").width/1.5,
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
