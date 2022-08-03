import React, {Component} from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import config from '../config/config'


class TrendingNews extends Component {
    state= {
        news: []
    }

    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.API_KEY}`,
        ).then((res)=>
            res.json()).then((response)=>{
                this.setState({
                    news: response.artices
                })
            }).catch((error)=>{
                console.log(error)
            })
    }
    render () {
        return (
            <View>
                {this.state.news.length ===0 ? (
                    <ActivityIndicator color="black" size="large" /> ): ( <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {

                        }
                    </ScrollView>
                )}
            </View>
        );
    }
}


export default TrendingNews;