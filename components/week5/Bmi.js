import React from "react";
import { View ,Text,TextInput,Button } from "react-native";



export default function Bmi() {    
    return (
        <View >
           <Text>Weight (kg.)</Text>
        <TextInput placeholder="Input your Weight" ></TextInput>
         
         <Text>
         Height (cm.)
         </Text>
         <TextInput placeholder="" > Input your Height</TextInput>

        <View>
            <Text>
                24.54
            </Text>
        </View>
        <View>
            <Text>
                <Text>Normal</Text>
            </Text>
        </View>
        <Button title="calculate" />
        

         </View>
         
    );
}
