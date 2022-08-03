import React,  { Component } from "react";
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { black } from "react-native-paper/lib/typescript/styles/colors";


const categories = [
    'Entertainment',
    'Business',
    'Politics',
    'Health',
    'Technology',
    'Sports',
  ];

class Categorie extends Component {
   state ={}
   render() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            {
              categories.map((category, index) => (
                <View key={index}>
                  <Text style={{ 
                    padding: 10, 
                    borderWidth: 1, 
                    borderColor: 'black', 
                    fontSize: 19, 
                    margin: 10, 
                    borderRadius: 10 
                    }}>{category}</Text>
                </View>
              ))
            }
        </ScrollView>
      );
    }
  }

export default Categorie;