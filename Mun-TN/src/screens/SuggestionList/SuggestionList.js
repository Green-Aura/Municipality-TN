import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '../../../firebase/config'
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
    <FlatList data={list} renderItem={({item})=>(
        <View>
        <Text>
        {item.type}
        </Text>
        <Text>
        {item.description}
        </Text>
        </View>
    )} />
    </View>
  )
}

export default RenderSuggessions
