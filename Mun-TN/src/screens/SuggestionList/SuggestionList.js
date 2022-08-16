import { StyleSheet, Text, View,Image, FlatList, ListItem, Dimensions  } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase,db} from "../../../firebase/config"
import styles from './styles'
import { FontAwesome5,Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import  { Animated,useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
const RenderSuggessions = () => {
    const[upvotes,setupvotes]=useState(null)
    const[list,setList]=useState([])
    const [upvoted,setupvoted]=useState(false)
    const [downvoted,setdownvoted]=useState(false)
    const[downvotes,setdownvotes]=useState(null)
    const navigation=useNavigation()
    const ref=firebase.firestore().collection('suggestions') 
    const upvote=(id)=>{
       if(upvoted===false&&downvoted==false){ 

        ref.doc(id).get().then(snapshot=>{setupvotes(snapshot.data().votes)  })
    

        ref.doc(id).update({votes:upvotes+1}).then(()=>{
         console.log("updated successfully")
        }).catch(err=>{
         console.log(err)
        })
 
         setupvoted(true)
    
 
       }
       else if (upvoted===true&&downvoted==false){
        ref.doc(id).get().then(snapshot=>{setupvotes(snapshot.data().votes)  })
    

        ref.doc(id).update({votes:upvotes-1}).then(()=>{
         console.log("updated successfully")
        }).catch(err=>{
         console.log(err)
        })
setupvoted(false)

       }
            
        }


        const downvote=(id)=>{
            if(downvoted===false&&upvoted==false){
             ref.doc(id).get().then(snapshot=>{setdownvotes(snapshot.data().downvotes)  })
         
       ref.doc(id).update({downvotes:downvotes+1}).then(()=>{
              console.log("updated successfully")
             }).catch(err=>{
              console.log(err)
             })
      
              setdownvoted(true)
         
      
            }
            else if (downvoted===true){
             ref.doc(id).get().then(snapshot=>{setdownvotes(snapshot.data().downvotes)  })
         
     
             ref.doc(id).update({downvotes:downvotes-1}).then(()=>{
              console.log("updated successfully")
             }).catch(err=>{
              console.log(err)
             })
     setdownvoted(false)
     
            }
                 
             }   

    useEffect(()=>{
        return ref.onSnapshot(querysnapshot=>{
            const list=[]
            querysnapshot.forEach(doc=>{
            
                list.push({ 
                    id:doc.id,
                    type:doc.data().type,
                    image:doc.data().image,
                    municipalityname:doc.data().municipalityname,
                    description:doc.data().description,
                    votes:doc.data().votes,
                    downvotes:doc.data().downvotes

                })
            }) 
            setList(list)
        })
    },[])





  return (
    <FlatList data={list} renderItem={({item})=>(
        <View style={styles.card}>
        <View style={{alignContent:'center',alignItems:'center'}}>
        <Text style={styles.userName}>
        {item.type}
        </Text>
        </View>
       
        
        <Text> 
        {item.municipalityname}
        </Text>
        
        
      
        <Image source={{uri:item.image.uri} } style={styles.feedImage}  /> 
        <Text> 
        {item.description}
        </Text>
        <View style={{flexDirection:'row'}}>
       <TouchableOpacity onPress={()=>{upvote(item.id)}}><FontAwesome5 name="thumbs-up" color={upvoted==true?"red":"grey"} size={(30)}/></TouchableOpacity> 
       <Text style={{marginLeft: 5, fontSize: 10}}>{item.votes}</Text>  

        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
      <TouchableOpacity onPress={()=>{downvote(item.id)}}><FontAwesome5  name="thumbs-down" color={downvoted==true?"red":"grey"} size={(30)}/></TouchableOpacity>
      <Text>{item.downvotes}</Text>
        </View>
        </View>
       
        </View>  
    )} /> 
  )}
  

export default RenderSuggessions
