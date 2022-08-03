import { StyleSheet, Text, View,Image, FlatList, ListItem } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase,db} from "../../../firebase/config"
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

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
    <View>
    <FlatList data={list} style={styles.container} renderItem={({item})=>(

        <View style={styles.card}>
        <Text style={styles.userName}>
        {item.type}
        </Text>
        <Text> 
        {item.description}
        </Text>
        <Text>{item.id}</Text> 
        <Text> 
        {item.municipalityname}
        </Text>
        
        
      
        <Image source={{uri:item.image.uri} } style={styles.feedImage}  /> 
       <TouchableOpacity onPress={()=>{upvote(item.id)}}><FontAwesome name="thumbs-up" color={upvoted==true?"red":"grey"} size={(20)}/></TouchableOpacity> 
       <Text style={{marginLeft: 5, fontSize: 10}}>{item.votes}</Text>  

        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
      <TouchableOpacity onPress={()=>{downvote(item.id)}}><FontAwesome name="thumbs-down" color={downvoted==true?"red":"grey"} size={(20)}/></TouchableOpacity>
      <Text>{item.downvotes}</Text>
        </View>

        </View>  
    )} /> 
    </View>
  )
}

export default RenderSuggessions
