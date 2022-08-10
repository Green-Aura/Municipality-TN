import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, ScrollView, Platform,useColorScheme } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import {firebase} from "../../../firebase/config.js"
import SelectDropdown from 'react-native-select-dropdown'
import {Dimensions} from 'react-native';
import {Entypo,FontAwesome,AntDesign} from 'react-native-vector-icons';
import styles from './styles.js'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import * as ImagePicker from "expo-image-picker"
import { SafeAreaView } from 'react-native-safe-area-context';
import DocumentPicker,{types} from "react-native-document-picker"
// import RNFetchBlob from 'rn-fetch-blob';
import { DefaultTheme} from '@react-navigation/native';

export default function ComplainScreen ({navigation}) {
  const [user,setUser]=useState({})
  const [loading,setloading]=useState(false)
  const getUser=()=>{
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(async (user) => {
      {
        if (user) {
         await usersRef
            .doc(user.uid)
            .get()
            .then((document) => {
             
              setloading(false)
              setUser({
                id:document.id,
                email:document.data().email,
                fullName:document.data().fullName,
                image:document.data().image,
                phoneNumber:document.data().phoneNumber
              })
              console.log(document.data())
            })
            
            .catch((error) => {
              setloading(false)
            });
        } else {
          setloading(false)
        }
      }
    })
  }
  useEffect(()=>{
    getUser()
  },[])
    const MyTheme = {
        ... DefaultTheme,
        colors:{
          ... DefaultTheme.colors,
          primary:'dodgerblue',
          background:'lightblue',
          text:'green',
        },
      }
    const scheme = useColorScheme()
    const options = ["general", "electicity", "garbage"]
    const[type,setType]=useState('')
    const [name,setname]=useState('')
    const [desc,setdesc]=useState('')
    const [image,setImage]=useState(null)
    const [uploading,setUploading]=useState(false)
    const [page,setPage]=useState(1)
    const[longitude,setLongitute]=useState(0)
    const[latitude,setLatitude]=useState(0)
    const [list,setList]=useState([])
    const[fileresponse,setFileResponse]=useState(null)
    const window=Dimensions.get('window') 
   /* const openDocument= async()=>{
        try{
          const res =await DocumentPicker.pick({
            type:[DocumentPicker.types.allFiles],
    
          })
        }
        catch(e){
         if(DocumentPicker.isCancel(e)){
    
         }
         else{
          throw e
         } 
        }
       }           */
const ref=firebase.firestore().collection('Complains')
var handlesubmit= async ()=>{
    UploadImage()
    await  ref.add({type:type,description:desc,image:image,location:{latitude:latitude,longitude:longitude},iduser:user.id,createdAt:Date.now(),username:user.fullName,userimage:user.image})
    alert("added successfully")
    console.log("image "+image.uri)

}

const PickImage=async () =>{
   let result=await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.All,
    allowsEditing:true,
    aspect: [4,3],
    quality:1
})
   const source= {uri: result.uri}
    console.log(source)
    setImage(source)
}    
const UploadImage=async()=>{
    setUploading(true)
    const response=await fetch(image.uri)
    const blob=await response.blob()
    const filename=image.uri.substring(image.uri.lastIndexOf('/')+1)
    var ref=firebase.storage().ref().child(filename).put(blob)
    try{
        await ref
    }
    catch(e){
        console.log(e)
    }
    setUploading(false)
    Alert.alert(
        'photo uploaded'
        )
        setImage(null) 
    }
    // No permissions request is necessary for launching the image library
    
    return (
        <ScrollView theme={scheme === 'dark'? DarkTheme : MyTheme}>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
     <View style={styles.inputcontainer}>
        <SelectDropdown
            data={options}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setType(selectedItem)
                
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                
                return item
            }}
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            defaultButtonText={'Select type '}/>
    <TextInput style={styles.input} numberOfLines={10}  multiline={true} value={desc} onChangeText={setdesc} placeholder='Description ' />
   <SafeAreaView horizontal={true} >
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity style={styles.camerabutton} onPress={PickImage}><FontAwesome name='camera' style={{marginTop:8,marginLeft:28}} size={32}></FontAwesome></TouchableOpacity>
   <TouchableOpacity style={styles.localisation}><Entypo size={32} name='location' style={{marginTop:8,marginLeft:30}}></Entypo></TouchableOpacity>
   <TouchableOpacity style={styles.pdfbut}><AntDesign size={32} name='addfile' style={{marginTop:8,marginLeft:31}}></AntDesign></TouchableOpacity>
   
    </View>
   
  {image&&(<View><Image source={{uri:image.uri}} style={{width:300,height:275,borderRadius:40,marginTop:15,marginLeft:window.width/35}}/></View>)}

   
   </SafeAreaView>
 </View>
    <View style={styles.buttoncontainer}>
  
     <View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>handlesubmit()}><Text style={styles.buttontext}>submit</Text></TouchableOpacity></View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}