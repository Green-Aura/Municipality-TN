import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';

class TrendingNews extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-07-05&sortBy=publishedAt&apiKey=20abdfb4e76f40bda730770b2b7ef55f`,
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        this.setState({
          news: response.articles,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        {this.state.news.length === 0 ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.news.map((news, index) => (
                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('WebView', {
                    url: news.url
                })}>
              <View style={{margin: 10}}>
                <Image
                  source={{uri: `${news.urlToImage}`}}
                  style={{height: 200, width: 200, borderRadius: 10}}
                />
                <Text style={{width: 200, textAlign: 'justify'}}>
                  {news.title}
                </Text>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default TrendingNews;