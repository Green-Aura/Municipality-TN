import { StyleSheet, Text, View,Image, FlatList, ListItem } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from "../../../firebase/config"
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';

const RenderSuggessions = () => {
    const[list,setList]=useState([])
    const ref=firebase.firestore().collection('suggestions')

    useEffect(()=>{
        return ref.onSnapshot(querysnapshot=>{
            querysnapshot.forEach(doc=>{
            
                list.push({ 
                    id:doc.data().id,
                    type:doc.data().type,
                    image:doc.data().image,
                    municipalityname:doc.data().municipalityname,
                    description:doc.data().description
                })
            }) 
            setList(list)
        })
    },[])
  return (
    <View>
    <FlatList data={list} style={styles.container} renderItem={({item})=>(

        <View style={styles.card}>
        <Text style={styles.userName}>
        {item.type}
        </Text>
        <Text> 
        {item.description}
        </Text>
        <Text> 
        {item.municipalityname}
        </Text>
        
      
        <Image source={{uri:item.image.uri} } style={styles.feedImage}  /> 
        <FontAwesome name="thumbs-up" color="red" size={(20)}/>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <FontAwesome name="thumbs-down" color="gray" size={(20)}/> 
 <Text style={{marginLeft: 5, fontSize: 10}}>5</Text> 

        </View>

        </View>
    )} /> 
    </View>
  )
}

export default RenderSuggessions
