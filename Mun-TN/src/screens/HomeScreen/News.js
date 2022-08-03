import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Categorie from '../../../components/Categorie';
import config from "../../../config/config"
import TrendingNews from '../../../components/TrendingNews';



class NewsScreen extends Component {
    componentDidMount() {
        console.log(config.API_KEY)
    }
    render (){
        return (
            <View>
                <Categorie />
                <TrendingNews />
                <Text> News Screen </Text>
            </View>
        )
    }
}


export default NewsScreen