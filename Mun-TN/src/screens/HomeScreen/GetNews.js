import React, { Component } from "react";
import {
    ActivityIndicator,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class GetNews extends Component {
    state= {
        news: [],
    };
    componentDidMount(){
        this.props.navigation.setOptions({
            title: this.props.route.params.category
        });
        fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}country=us&apiKey=20abdfb4e76f40bda730770b2b7ef55f`,
        ).then(res=>
            res.json()).then(response=>{
                console.log(response)
                this.setState ({
                    news: response.articles
                })
                console.log(this.state.news.length)
            }).catch((error)=>{
                console.log(error);
            });

    }
    render() {
        return (
            <View> 
                {this.state.news.length ===0 ?( 
                <ActivityIndicator size='large' color= 'black' /> 
                ) : (
                    <ScrollView>
                        {this.state.news.map((news, index) => (
                                <View key={index}>
                                    <Image source={{ uri: `${news.urlToImage}` }} style={{height: 100, width: 100, borderRadius: 10}} />
                                </View>
                            ))}
                    </ScrollView>
                   )
                } 
            </View>
        );
    }
}

export default GetNews;