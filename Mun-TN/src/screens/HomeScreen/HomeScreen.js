












// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {useTheme} from '@react-navigation/native';

// import Swiper from 'react-native-swiper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import StarRating from '../../../components/StarRating';

// const HomeScreen = ({navigation}) => {
//   const theme = useTheme();

//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
//       <View style={styles.sliderContainer}>
//         <Swiper
//           autoplay
//           horizontal={false}
//           height={200}
//           activeDotColor="#FF6347">
//           <View style={styles.slide}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//         </Swiper>
//       </View>

//       <View style={styles.categoryContainer}>
//         <TouchableOpacity
//           style={styles.categoryBtn}
//           onPress={() =>
//             navigation.navigate('CardListScreen', {title: 'Restaurant'})
//           }>
//           <View style={styles.categoryIcon}>
//             <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Restaurant</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.categoryBtn}
//           onPress={() =>
//             navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
//           }>
//           <View style={styles.categoryIcon}>
//             <MaterialCommunityIcons
//               name="food-fork-drink"
//               size={35}
//               color="#FF6347"
//             />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.categoryContainer, {marginTop: 10}]}>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <Fontisto name="hotel" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Hotels</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <Ionicons name="md-restaurant" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Dineouts</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialIcons name="expand-more" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Show More</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.cardsWrapper}>
//         <Text
//           style={{
//             alignSelf: 'center',
//             fontSize: 18,
//             fontWeight: 'bold',
//             color: '#333',
//           }}>
//           Recently Viewed
//         </Text>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sliderContainer: {
//     height: 200,
//     width: '90%',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },

//   wrapper: {},

//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//   },
//   sliderImage: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#fdeae7' /* '#FF6347' */,
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#de4f35',
//   },
//   cardsWrapper: {
//     marginTop: 20,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 100,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,
//   },
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//   },
//   cardDetails: {
//     fontSize: 12,
//     color: '#444',
//   },
// });










// import React from "react"
// import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated, Image } from 'react-native';
// import { colors } from "./colorsConfig";
// // import Articles from "../../../components/Article";
// // import News from "./News";


// const HomeScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Image 
//             style={styles.logo} 
//             source={require('../../../assets/logo.png')} 
//             />
//             <View style={styles.header}>
//                 <Text style={styles.heading}>Good Morning, Afsar</Text>
//                 <Text style={styles.subHeading}>We Wish you have a good day</Text>
//             </View>
//             <View style={styles.sectionWrapper1}>
//             <View style={styles.item1}>
//                 <Image 
//                 style={styles.basicImg}
//                 source={require('../../../assets/basicImg.png')}
//                 />
//                 <View style={styles.cardContent}>
//                 <Text style={[styles.cardTitle, {color: colors.whiteShade}]}>
//               Basic
//             </Text>
//             <Text style={[styles.cardSubTitle, {color: colors.whiteShade}]}>
//               COURSE
//             </Text>
//                 </View>
//                 <View style={styles.cardFooterWrapper}>
//                 <View>
//               <Text style={[styles.footerTitle, {color: colors.whiteShadeBg}]}>
//                 3-10 MIN
//               </Text>
//             </View>
//                 </View>
//             </View>
//             </View>
//         </View>
//     )
// }

// export default HomeScreen;

// export const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         flex: 1,
//         padding: 20,
//       },
//       logo: {
//         alignSelf: 'center',
//         marginTop: 30,
//       },
//       header: {},
//       heading: {
//         fontFamily: 'HelveticaNeue',
//         fontSize: 28,
//         fontWeight: 'bold',
//         marginTop: 40,
//       },
//       subHeading: {
//         fontFamily: 'HelveticaNeue',
//         fontSize: 20,
//         fontWeight: '300',
//         marginTop: 10,
//       },
//       basicImg: {
//         alignSelf: 'flex-end',
//       },
//       cardContent: {
//         position: 'absolute',
//         top: '35%',
//         padding: 15,
//       },
//       cardTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         fontFamily: 'HelveticaNeue',
//       },
//       cardSubTitle: {
//         marginTop: 10,
//         fontSize: 11,
//       },
//       cardFooterWrapper: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 15,
//         marginTop: '0%',
//         alignItems: 'center',
//       },
//       footerTitle: {
//         fontSize: 11,
//         fontFamily: 'HelveticaNeue',
//       },
//       cardBtn: {
//         borderRadius: 50,
//       },
//       btnLabel: {
//         fontFamily: 'HelveticaNeue',
//         fontSize: 12,
//         paddingTop: 10,
//         paddingBottom: 10,
//         marginLeft: 15,
//         marginRight: 15,
//         color: colors.heading,
//       },
//   });


import React from "react"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated } from 'react-native';
import Articles from "../../../components/Article";
import News from "./News";


const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <News />
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
})






// import React, { useState } from 'react'
// import {View,Text,Image,TouchableOpacity} from 'react-native'
// import {Dimensions} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// const window=Dimensions.get('window')
// import News from '../HomeScreen/News'
// import Events from '../HomeScreen/Events'


// export default function HomeScreen ({navigation}) {{
//   const [Page,SetPage] = useState('Home');


//    const changeScreen = (screen) => {
//        navigation.navigate(screen)
//        console.log('it works')
//    }

  
//        return (
//            <View style ={{flex:1,backgroundColor:'#DCDCDC'}}>
//                {/* <View style={{position:'absolute', top:0,height:0,backgroundColor:'#FFF',width:'100%',alignItems:'center'}}>
//                    <Text style={{textAlign:'center', fontsize:30,marginTop:5}}>
//                    Tableau de bord
//                    </Text>
//                </View> */}

//            {Page === 'Home' ? 
//            <View>
//                <View style={{alignItems:'center',justifyContent:'center'}}>
//                    <Image style={{
//                     resizeMode: 'cover',
//                     alignItems:'center',
//                     justifyContent:'center',
//                     borderRadius: 20,
//                     marginLeft:5,
//                     marginRight:5,
//                     width:window.width,
//                     height:window.height/2.8}}
//                   source={require('../../../assets/The_municipality_of_Tunis.jpg')}
//                   />
//                </View>

//                <View style={{padding:20, marginBottom: -35}}>
//                    <ScrollView horizontal={true} >
//                    <TouchableOpacity style={{marginLeft:window.height/25}} onPress={() =>{SetPage('events')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20,}}
//                        source={require('../../../assets/newspaper.png')}  />
//                            <Text style={{fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                              Events
//                            </Text>
//                    </TouchableOpacity>


//                    <TouchableOpacity style={{marginLeft:30}}  onPress={() =>{SetPage('News')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20,}}
//                        source={require('../../../assets/internet.png')} />
//                            <Text style={{ fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                       News
//                            </Text>
//                    </TouchableOpacity>    
//                    </ScrollView>
//                </View>
//                <View style={{padding:20}}>
//                    <ScrollView horizontal={true} >
//                    <TouchableOpacity style={{marginLeft:window.height/25}} onPress={() =>{changeScreen('Complain')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20,}}
//                        source={require('../../../assets/calendar.png')}  />
//                            <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                               Calendar 
//                            </Text>
//                    </TouchableOpacity>


//                    <TouchableOpacity style={{marginLeft:30}}  onPress={() =>{changeScreen('Suggestion')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20}}
//                        source={require('../../../assets/contact-book.png')} />
//                            <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                          Contact-US 
//                            </Text>
//                    </TouchableOpacity>    
//                    </ScrollView>
//                </View>
//                </View>: Page === 'events' ? (<View><Events /><TouchableOpacity onPress={()=> SetPage('Home')}><Text>Back</Text></TouchableOpacity></View>): Page === 'News' ? (<View><TouchableOpacity onPress={()=> SetPage('Home')}><Text>Back</Text></TouchableOpacity><News /></View>): null}
//            </View>
//        )
//    }
// }