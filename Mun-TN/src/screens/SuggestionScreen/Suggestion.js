import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, ScrollView, Platform} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import {firebase} from "../../../firebase/config.js"
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {AntDesign,MaterialIcons} from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import { SafeAreaView } from 'react-native-safe-area-context';
import DocumentPicker,{types} from "react-native-document-picker"
import * as expoDocumentPicker from "expo-document-picker"
import FileViewer from "react-native-file-viewer";

import {Feather} from "@expo/vector-icons"

// import RNFetchBlob from 'rn-fetch-blob';

const SuggesstionScreen = ({navigation}) => {

    const options = ["general", "electicity", "garbage"]
    const[loading,setLoading]=useState(false)
    const[user,setuser]=useState({})
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
    const openDocument= async()=>{
      const res= await expoDocumentPicker.getDocumentAsync({type:types.allFiles})
         const source={uri:res.uri}
         setfile(source)
         console.log(source)
    }
    const uploadfile=async ()=>{
      setUploading(true)
      const response=await fetch(file.uri)
      const blob=await response.blob()
      const filename=file.uri.substring(file.uri.lastIndexOf('/')+1)
      var ref=firebase.storage().ref().child(filename).put(blob)
      try{
        await ref
      }catch(e){
        console.log(e)
      }
      setUploading(false)
      setfile(null)
    }
   useEffect(()=>{
    getUser()
   },)
   const getUser=()=>{
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(async (user) => {
      {
        if (user) {
         await usersRef
            .doc(user.uid)
            .get()
            .then((document) => {
             
              setLoading(false)
              setuser({
                id:document.id,
                email:document.data().email,
                fullName:document.data().fullName,
                image:document.data().image,
                phoneNumber:document.data().phoneNumber,
              })
              
            })
            
            .catch((error) => {
              setLoading(false)
            });
        } else {
          setLoading(false)
        }
      }
    })
    
    
    }  
        
const ref=firebase.firestore().collection('suggestions')
var handlesubmit= async ()=>{
  uploadfile()
    UploadImage()
    await  ref.add({type:type,municipalityname:name,description:desc,image:image,votes:0,downvotes:0})
    alert("added successfully")
    console.log("image "+image.uri)
  navigation.navigate("Rendersuggestions")
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
        <ScrollView style={styles.suggestions}>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View >
        <View style={styles.inputcontainer}>
        <View>
        <View style={{alignSelf:"center"}}>
        <SelectDropdown
        data={options}
        search={true}
        statusBarTranslucent={true}
        onSelect={(selectedItem, index) => {
            
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
        defaultButtonText={'Select type'}/>
        </View>
        <Image source={{uri:user.image}} style={{width:50,height:50,borderRadius:70}}/>
        <TextInput style={styles.input}  multiline={true} value={desc} onChangeText={setdesc} placeholder={`feel free to add something here ${user.fullName}`} />
        
   <SafeAreaView>

   <View>
   <TouchableOpacity onPress={PickImage}><Text><Feather name="camera" size={30} color="#14b8a6" /> pick an Image </Text></TouchableOpacity>
   {/* <TouchableOpacity onPress={chooseImg}><Text> <Feather name="camera" size={30} color={brand} />  Choose image from camera roll</Text></TouchableOpacity> */}
   <TouchableOpacity onPress={openDocument}><Text><Feather name="file-plus" size={30} color="#14b8a6" />pick a pdf file </Text></TouchableOpacity>
   </View>
   {image&&(<View><Image source={{uri:image.uri}} style={{width:300,height:300}}/></View>)}

   
   </SafeAreaView>
    


    </View>
    <View style={styles.buttoncontainer}>
  </View>
    </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SuggesstionScreen
