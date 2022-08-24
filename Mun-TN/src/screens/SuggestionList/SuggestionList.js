import { StyleSheet,Animated, Text, View,Image, FlatList, ListItem, Dimensions  } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase,db} from "../../../firebase/config"
import styles from './styles'
import { FontAwesome5,Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import  { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
const RenderSuggessions = () => {
    const[upvotes,setupvotes]=useState(null)
    const[list,setList]=useState([])
    const [upvoted,setupvoted]=useState(false)
    const [downvoted,setdownvoted]=useState(false)
    const[downvotes,setdownvotes]=useState(null)
    const Yscroll = React.useRef(new Animated.Value(0)).current;
    const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * 1.25,
        sizeOfItem * 1.25
      ],
      outputRange: [1, 1, 1, 0]
    })
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
                    downvotes:doc.data().downvotes,
                    username:doc.data().username,
                    userimage:doc.data().userimage

                })
            }) 
            console.log(list)
            setList(list)
        })
    },[])





  return (
    <View style={{backgroundColor:"#F5F5F5"}}>

    <Animated.FlatList data={list} 
       renderItem={({item})=>(
         <Animated.View style={
           [styles.container,
        {
          transform: [{ scale }]
        }
      ]
    }>
        <View style={{flexDirection:"row",marginLeft:10,marginTop:10}}> 
        <Image source={{uri:item.userimage}} style={{width:40,height:40, borderRadius:70}}/>
                <Text style={{marginTop:8,marginLeft:5,fontWeight:"900",color:"#006AFF"}}>{item.username}</Text>

                </View>
                <Text 
        style={styles.description}
        > 
        {item.description}
        </Text>
        <Image 
        source={{uri:item.image.uri}} 
        style={styles.feedImage}
        />
      {/* <Text style={styles.title}>
        {item.type}
        </Text> 
        <Text 
        style={{padding: 15}}
        > 
        {item.municipalityname}
        </Text> */}
       
        <View 
        style={{flexDirection:'row',alignSelf:"flex-start",marginLeft:10}}
        >
       <TouchableOpacity 
       onPress={()=>{upvote(item.id)}}
       >
        
        <FontAwesome5 
        name="heart" 
        color={upvoted==true?"red":"grey"} 
        size={(30)} style={{padding: 10,marginRight:-10}}
        /></TouchableOpacity> 
       <Text 
       style={{  padding: 15, marginRight: 10}}
       >
        {item.votes}
        </Text>  
        
        <View 
        style={{ flexDirection: 'row', marginLeft: 10 }}>
      <TouchableOpacity 
      onPress={()=>{downvote(item.id)}}
      >
        <FontAwesome5  
        name="thumbs-down" 
        color={downvoted==true?"blue":"grey"} 
        size={(30)} style={{padding: 10,marginLeft:-10,marginTop:2}}
        /></TouchableOpacity>
      <Text 
      style={{  padding: 15, marginLeft: -12,marginTop:2}}
      >
        {item.downvotes}
        </Text>
        </View>
        </View>
       
        </Animated.View>  
    )} /> 
    </View>
  )}
  

export default RenderSuggessions
