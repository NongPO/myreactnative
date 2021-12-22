import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity,OnPressButton } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("24.54");
  const [text, setText] = useState("Normal");

  console.log("STATE : ", weight, height, bmi);

  const OnPressButton = () => {
    console.log("Calculate button on pressed ! ! !");
    let output = weight / (((height / 100) * height) / 100);
    setBmi(output.toFixed(2));

    let description = "";
if (output < 18.5)
        description ="Underweight ";
else if (output>=18.5 && output<=24.99)
        description ="Normal";
else if (output>=25 && output<=29.99)
        description ="Overweight ";
else if (output>=30 && output<=34.9)
        description ="Obese ";
else
        description ="Extreme Obese ";

        setText(description);
  };

  return (
    <View>
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          justifyContent: "space-around",
          height: 150,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
        <TextInput
          onChangeText={(newWeight) => setWeight(newWeight)}
          value={weight}
          placeholder="Input your Weight"
        ></TextInput>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          justifyContent: "space-around",
          height: 150,
          marginTop: 20,
        }}
      >
        <Text>Height (cm.)</Text>
        <TextInput
          onChangeText={(newHeight) => setHeight(newHeight)}
          value={height}
          placeholder="Input your Height"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            height: 150,
            marginTop: 20,
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>{bmi}</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            justifyContent: "center",
            height: 150,
            marginTop: 20,
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            <Text>{text}</Text>
          </Text>
        </View>
      </View>
      {/* <Button title="calculate" onPress={OnPressButton} /> */}
      
      <TouchableOpacity onPress = {OnPressButton}>
    <View style={{ padding: 20, backgroundColor: "#9900FF", borderRadius: 20 }}>
        <Text style={{ fontSize: 20, textAlign: "center", color: 'white' }}>
            Calculate
        </Text>
    </View>
</TouchableOpacity>

          


     
    </View>
  );
}
