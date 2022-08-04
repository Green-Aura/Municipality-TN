import * as React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const window=Dimensions.get('window')


export default function OptionScreen ({navigation}) {{

   const changeScreen = (screen) => {
       navigation.navigate(screen)
       console.log('it works')
   }

  
       return (
           <View style ={{flex:1,backgroundColor:'#FFF'}}>
               {/* <View style={{position:'absolute', top:0,height:0,backgroundColor:'#FFF',width:'100%',alignItems:'center'}}>
                   <Text style={{textAlign:'center', fontsize:30,marginTop:5}}>
                   Tableau de bord
                   </Text>
               </View> */}


               <View style={{marginTop:5,alignItems:'center',justifyContent:'center'}}>
                   <Image style={{
                  resizeMode: 'cover',
                    alignItems:'center',
                   justifyContent:'center'   ,
  
                   marginLeft:5,
                   marginRight:5,
                   width:window.width,
                   height:window.height/2.5}}
                  source={require('../../../assets/admin_suggestions.jpg')}
                  /> 
                   <View style={{
                       position:'absolute',
                       marginLeft:5,
                       height:window.height/2.5,
                        width:window.width,
                     /*    borderBottomRightRadius:50,   
                        borderBottomLeftRadius:50, */
                        marginRight:5,
                        backgroundColor:'#00000050',
                        alignItems:'center',
                        justifyContent:'center'  
             
                   }}>
                       
                       <Text style={{fontsize:41,color:'#FFF',fontWeight:'bold'}}>Choississez une option </Text>
                   </View>
               </View>

               <View style={{padding:20}}>

                   <Text>Les Choix</Text>
                   <ScrollView horizontal={true} style={{marginTop:10}}>
                   <TouchableOpacity style={{marginLeft:window.height/15}} onPress={() =>{changeScreen('Complain')}}>
                       <Image style={{height:100 , width:120,borderRadius:20,}}
                       source={require('../../../assets/complain.jpg')}  />
                           <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
                             Complain
                           </Text>
                   </TouchableOpacity>


                   <TouchableOpacity style={{marginLeft:30}}  onPress={() =>{changeScreen('Suggestion')}}>
                       <Image style={{height:100 , width:120,borderRadius:20,}}
                       source={require('../../../assets/suggestion2.jpg')} />
                           <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
                           Suggestion
                           </Text>
                   </TouchableOpacity>
                  
                   </ScrollView>
               </View>
           </View>
       )
   }
}