import React, { Component, useState } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
import Categorie from '../../../components/Categorie';
import TrendingNews from '../../../components/TrendingNews';

const deviceWidth = Dimensions.get('window').width;

function NewsScreen({navigation}) {
  const  [page,setPage]=useState("allnews")
  
        return (
            <View>
              
                <Categorie  />
               {page=="allnews"?<TrendingNews />:page=="entertainment"}
                <Text> News Screen </Text>
            </View>
        )
    
}

export default NewsScreen