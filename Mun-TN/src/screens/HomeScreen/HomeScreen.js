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
        user_name: "Barbacha",
        user_image: "https://reactnative.dev/img/tiny_logo.png",
        feed_image: "https://reactnative.dev/img/tiny_logo.png",
        like_count: "1.242",
        comment_count: "24"
    }
]

export default function HomeScreen({navigation}) {
    let user_name = DATA[0].user_name;
    let user_image = DATA[0]. user_image;
    let feed_image = DATA[0].feed_imag;
    let like_count = DATA[0]. like_count;
    let comment_count = DATA[0].comment_count;


    return (
        <View style={styles.container}>
           {/* <FlatList 
           data={DATA}
           renderItem={({ item})} => <Item title={item.title} />}
           </View>
           >

           </FlatList> */}


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
                    <FontAwesome name="ellipsis-h" style={styles.moreIcon}/>
                </View>
            </View>
            <Image 
                style={styles.feedImage}
                source={{
                    uri:feed_image,
                }}
                />
    <View style={styles.cardFooter}>
    <View style={styles.footerLeft}>  
       <View style={{ flexDirection: 'row' }}>
       <FontAwesome name="heart" color="red" size={(20)}/>
<Text style={{marginLeft: 5, fontSize: 10}}> {like_count}</Text>
       </View>
       <View style={{ flexDirection: 'row', marginLeft: 10 }}>
       <FontAwesome name="comment" color="gray" size={(20)}/>
<Text style={{marginLeft: 5, fontSize: 10}}>{comment_count}</Text>
       </View>
       </View>
        <FontAwesome name="bookmark" color="gray" size={(20)}/>
        </View>
            </View>
            </View>
            //                     {/* <InnerContainer>
            //     <WelcomeImage resizeMode="cover" source={require('../../../assets/green.png')} />    
            // <PageTitle welcome={true}>Welcome!</PageTitle>
            //     </InnerContainer> */}
                
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

