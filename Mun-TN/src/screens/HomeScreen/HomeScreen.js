import * as React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const window=Dimensions.get('window')


export default function HomeScreen ({navigation}) {{

   const changeScreen = (screen) => {
       navigation.navigate(screen)
       console.log('it works')
   }

  
       return (
           <View style ={{flex:1,backgroundColor:'#DCDCDC'}}>
               {/* <View style={{position:'absolute', top:0,height:0,backgroundColor:'#FFF',width:'100%',alignItems:'center'}}>
                   <Text style={{textAlign:'center', fontsize:30,marginTop:5}}>
                   Tableau de bord
                   </Text>
               </View> */}


               <View style={{alignItems:'center',justifyContent:'center'}}>
                   <Image style={{
                    resizeMode: 'cover',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius: 20,
                    marginLeft:5,
                    marginRight:5,
                    width:window.width,
                    height:window.height/2.8}}
                  source={require('../../../assets/The_municipality_of_Tunis.jpg')}
                  />
               </View>

               <View style={{padding:20, marginBottom: -35}}>
                   <ScrollView horizontal={true} >
                   <TouchableOpacity style={{marginLeft:window.height/25}} onPress={() =>{changeScreen('Suggestion')}}>
                       <Image style={{height:100 , width:120,borderRadius:20,}}
                       source={require('../../../assets/newspaper.png')}  />
                           <Text style={{fontSize:13,fontWeight:'bold',textAlign:'center'}}>
                             Events
                           </Text>
                   </TouchableOpacity>


                   <TouchableOpacity style={{marginLeft:30}}  onPress={() =>{changeScreen('SuggestionList')}}>
                       <Image style={{height:100 , width:120,borderRadius:20,}}
                       source={require('../../../assets/internet.png')} />
                           <Text style={{ fontSize:13,fontWeight:'bold',textAlign:'center'}}>
                      News
                           </Text>
                   </TouchableOpacity>    
                   </ScrollView>
               </View>
               <View style={{padding:20}}>
                   <ScrollView horizontal={true} >
                   <TouchableOpacity style={{marginLeft:window.height/25}} onPress={() =>{changeScreen('Complain')}}>
                       <Image style={{height:100 , width:120,borderRadius:20,}}
                       source={require('../../../assets/calendar.png')}  />
                           <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
                              Calendar 
                           </Text>
                   </TouchableOpacity>


                   <TouchableOpacity style={{marginLeft:30}}  onPress={() =>{changeScreen('Suggestion')}}>
                       <Image style={{height:100 , width:120,borderRadius:20}}
                       source={require('../../../assets/contact-book.png')} />
                           <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
                         Contact-US 
                           </Text>
                   </TouchableOpacity>    
                   </ScrollView>
               </View>
           </View>
       )
   }
}