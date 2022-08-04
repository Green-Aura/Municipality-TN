import React, {Component} from "react";
import {ActivityIndicator, ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';


class TrendingNews extends Component {
    state= {
        news: [],
        view:""
    }
    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=20abdfb4e76f40bda730770b2b7ef55f`,
        ).then(res=>
            res.json()).then(response=>{
                console.log(response)
                this.setState ({
                    news: response.articles
                })
                console.log(this.state.news.length)
            }).catch((error)=>{
                console.log(error)
            })
    }
//     changeView(View){
// this.setState({
//     view:View
// })

//     }
    render () {
        return (
            <View>
                {this.state.news.length === 0 ? (
                    <ActivityIndicator color='black' size='large' /> ) : (
                    <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                        {
                            this.state.news.map((news, index) =>(
                                <View style={{ margin: 10 }}  key={index}>
                                    <Image source={{
                                        uri: `${news.urlToImage}`}} 
                                        style={{ height: 200, width: 200, borderRadius: 10 }} />
                                        <Text style={{ width: 200, textAlign: 'justify' }}>{news.title}</Text>
                                </View>
                            ))
                        }

                    </ScrollView>
                )}
            </View>
        );
    }
}


export default TrendingNews;