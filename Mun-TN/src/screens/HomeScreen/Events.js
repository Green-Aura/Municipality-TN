import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const BASE_URL = 'https://dummyapi.io/data/v1/user?limit=10';
const APP_ID = '62eea66992b32ac34483ed2d';

const DATA =[
  {
      user_name: "ALJAZEERA",
      user_image: "https://pbs.twimg.com/profile_images/1190503677108400128/q7i77pmz_400x400.jpg",
      feed_image: "https://arabcenterdc.org/wp-content/uploads/2020/09/Kais-Saied-Supreme-Court-768x384.jpg",
      description: "A new Tunisian constitution giving far more power to President Kais Saied passed in a referendum with a 30.5% turnout, the electoral commission said on Tuesday, tightening his grip in what critics fear is a march to a new era of autocracy.",
      
  },
  {
      user_name: "France24",
      user_image: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/24/Logos_FRANCE24_RVB_2013.svg/langfr-150px-Logos_FRANCE24_RVB_2013.svg.png",
      feed_image: "https://s.france24.com/media/display/a25e16f2-0d6d-11ed-8ba6-005056bf30b7/w:1280/p:1x1/2022-07-26T220049Z_1798490233_RC2XJV98L8B2_RTRMADP_3_TUNISIA-POLITICS-REFERENDUM-RESULTS-1.JPG",
      description: "Tunisians have approved a new constitution granting unchecked powers to the office of President Kais Saied in a referendum marked by low voter turnout. The move has sparked warnings of a dangerous democratic regression in a country facing political and economic crises.",
      
  },
  {
      user_name: "BBC News",
      user_image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/365px-BBC_News.svg.png?20210511002936",
      feed_image: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/7/29/46c97332-35bd-4974-8ae8-48fc6196e533.jpg",
      description: "The US says it shares concerns that Tunisia s new constitution could weaken democracy and erode respect for human rights and fundamental freedoms.It comes after the approval of a new Tunisian constitution that gives sweeping powers to the president in the 25 July referendum marked by low voter participation.The referendum, which delivered a yes vote of 94.6% with a turnout of 30.5% - was boycotted by opposition parties.",
      
  },
  {
      user_name: "FM Tunis",
      user_image: "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/277660052_1103423870500566_1292150545505681508_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Jj6n7M9tcykAX-bQjgD&_nc_ht=scontent.ftun4-2.fna&oh=00_AT_R5Us_3uc7AnYH4g-k3elkh_5ez8BcAjnuHcAn2bhvsw&oe=62F3DDAF",
      feed_image: "https://content.mosaiquefm.net/uploads/content/thumbnails/ons_jabeur_1659739342.jpg",
      description: "La joueuse de tennis tunisienne Ons Jabeur a été battue, ce vendredi 8 août 2022, par la russe Veronika Kudermetova, lors des quarts de finale du tournoi de San José en Californie.",
      
  },
  {
      user_name: "MosaiqueFM",
      user_image: "https://www.mosaiquefm.net/images/front2020/logofr.png",
      feed_image: "https://content.mosaiquefm.net/uploads/content/thumbnails/fridhi_1659612248.jpg",
      description: "Mohamed Fridhi, secrétaire général de l’Association nationale des diplômés du supérieur, a déclaré, ce jeudi 4 août 2022, que les forces de l'ordre ont exercé de la pression sur les membres de l'association avant leur arrivée au palais de Carthage, où ils comptaient organiser une manifestation pour revendiquer leur droit au recrutement.",
      
  },
  {
      user_name: "Shems-FM",
      user_image: "https://cdn-radiotime-logos.tunein.com/s129025g.png",
      feed_image: "https://media.shemsfm.net/uploads/content/big/1659804600_content.jpg",
      description: "In the context of continuing to monitor the preservation of the cleanliness of the beaches, the environmental police, according to a communiqué issued today, Saturday, by the municipality of Sousse, launched campaigns to address the manifestations that disturb the overall city, such as the concentration of huts and the introduction of dogs into the sea water and the prevention of excessive possession of the beaches",
      
  }
]


const Events = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIsloading(true);
    getAllUsers();
    return () => {

    }
  }, []);

  getAllUsers = () => {
    fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
      .then((res) => res.json())
      .then((resJson) => { setData(resJson.data) })
      .catch(console.error)
      .finally(() => setIsloading(false));
  }

  const renderUser = ({ item, index }) => {
    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })
    return (
      <Animated.View style={
        [styles.item,
        {
          transform: [{ scale }]
        }
        ]
      }>
        <Image
          style={styles.image}
          source={{ uri: item.picture }}
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />
        <View style={styles.wrapText}>
          <Text style={styles.fontSize}>{`${item.title} ${item.firstName} ${item.lastName}`}</Text>
        </View>
      </Animated.View>
    )

  }


  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
          <Animated.FlatList
            data={data}
            keyExtractor={item => `key-${item.id}`}
            renderItem={renderUser}
            contentContainerStyle={{
              padding: 20
            }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}
          />
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 18
  },
  image: {
    width: 100,
    height: imgHeight
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    marginBottom: marginBottomItem,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    shadowRadius: 30,
    padding: paddingItem
  },
  container: {
    flex: 1
  }

});

export default Events;