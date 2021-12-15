import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import Signup from '../../components/week3/Signup';
import MyIcon from '../../components/week3/MyIcon';
import Menu from '../../components/week3/Menu';


export default function Travel() { 
    
    return (        
        <ScrollView>
        <View style={{ flex: 1, paddingTop : 50 }}>
                <Menu/>
                <Card/>
                <Hotel/>
                 <Signup/>
           
            {/* <MyIcon/> */}
            {/* <MyIcon title='หัวใจ' name='heart' size={30} color='orange'  /> */}
            
            
           
            
        </View>
        </ScrollView>
    );
}
