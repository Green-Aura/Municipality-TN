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
        user_name: "MosaiqueFM",
        user_image: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/26/Mosaique_fm_logo.png/220px-Mosaique_fm_logo.png",
        feed_image: "data:image/jpeg;base64,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",
        like_count: "1.242",
        comment_count: "24"
    },
    {
        user_name: "ShemsFM",
        user_image: "https://radiostunisie.com/wp-content/uploads/2020/07/shems-low.jpg",
        feed_image: "https://www.leconomistemaghrebin.com/wp-content/uploads/2014/07/Municipalit%C3%A9-l-economiste-maghrebin-1200x600.jpg",
        like_count: "1.242",
        comment_count: "24"
    },
    {
        user_name: "Barbacha",
        user_image: "https://static.wixstatic.com/media/1e24fd_87de25913d9f49468b0e12f017ad98a5~mv2.png",
        feed_image: "https://automotiveex.com/wp-content/uploads/2022/05/durapack-4060-split-body-rear-load-garbage-truck-1-696x497.jpg?ezimgfmt=ng:webp/ngcb1",
        like_count: "1.242",
        comment_count: "24"
    },
    {
        user_name: "Barbacha",
        user_image: "https://reactnative.dev/img/tiny_logo.png",
        feed_image: "https://reactnative.dev/img/tiny_logo.png",
        like_count: "1.242",
        comment_count: "24"
    }
]

function Item({ user_name, user_image, feed_image, like_count, comment_count}) {
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
    )
}

export default function HomeScreen({navigation}) {

    return (
        
        <View style={styles.container}>


       <FlatList
        data={DATA}
        renderItem={({ item }) => <Item user_name={item.user_name} 
        user_image={item.user_image}
        feed_image={item.feed_image}
        like_count={item.like_count}
        comment_count={item.comment_count}
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

