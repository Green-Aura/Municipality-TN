import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { 
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    Colors,
    StyledButton,
    Buttontext,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from "../../../components/styles.js";


const DATA =[
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

function Item({ user_name, user_image, feed_image, description }) {
    return (
        <View style={styles.card}>
        <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>   
        <Image 
        style={styles.userImage}
        source={{
            uri: user_image,
        }}
        />
        <Text style={styles.userName}>{user_name}</Text>
        </View>
        <View style={styles.headerRight}>
        </View>
    </View>
    <Image 
        style={styles.feedImage}
        source={{
            uri:feed_image,
        }}
        />
        <Text>{description}</Text>
<View style={styles.cardFooter}>
<View style={styles.footerLeft}> 
</View>
</View>
    </View>
    )
}

export default function News({navigation}) {

    return (
        <View>

            <FlatList 
               data={DATA}
               renderItem={({ item })=> <Item user_name={item.user_name} 
               user_image={item.user_image}
               feed_image={item.feed_image}
               description={item.description}
               />}
               keyExtractor={item => item.id}
            />
            </View>              
    );
}

const styles = StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor: "#ddd",
    },
    card: {
       backgroundColor: "#fff",
       padding: 10,
       margin: 10,
       borderRadius: 10
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerLeft: {
        flexDirection: 'row',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50/2 
    },
    userName: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15
    },
    moreIcon : {
        fontSize: 20,
        color: "#ddd",
        marginTop: 15
    },
    feedImage: {
        height: 300,
        borderRadius: 10,
        marginVertical: 10
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    footerLeft: {
        flexDirection: 'row',
    },
});