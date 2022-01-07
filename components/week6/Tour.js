import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
  return (
    <View>
      <Text style={{ fontSize: 25 }}>Tour</Text>
      <Text>Let find out what most interesting things</Text>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row" }}>
          {/* <TourItem/>
        <TourItem/>
        <TourItem/> */}

          <View>
            <View style={{ marginRight: 10, marginVertical: 20 }}>
              <Image
                style={{ width: 200, height: 150, borderRadius: 10 }}
                source={{
                  uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
                }}
              />

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
                  Tour in Somewhere
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ marginRight: 10, marginVertical: 20 }}>
              <Image
                style={{ width: 200, height: 150, borderRadius: 10 }}
                source={{
                  uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
                }}
              />

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
                  Tour in Somewhere
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ marginRight: 10, marginVertical: 20 }}>
              <Image
                style={{ width: 200, height: 150, borderRadius: 10 }}
                source={{
                  uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
                }}
              />

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
                  Tour in Somewhere
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
