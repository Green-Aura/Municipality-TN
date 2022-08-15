import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, ScrollView, Platform} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import {firebase} from "../../../firebase/config.js"
import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import * as ImagePicker from "expo-image-picker"
import { SafeAreaView } from 'react-native-safe-area-context';
import DocumentPicker,{types} from "react-native-document-picker"
import {Feather} from "@expo/vector-icons"
import * as expoDocumentPicker from"expo-document-picker"
// import RNFetchBlob from 'rn-fetch-blob';
const SuggesstionScreen = ({navigation}) => {
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
    const openDocument= async()=>{
        const res= await expoDocumentPicker.getDocumentAsync({type:types.allFiles})
           const source={uri:res.uri}
           setfile(source)
           console.log(source)
      }
  
        
const ref=firebase.firestore().collection('suggestions')
var handlesubmit= async ()=>{
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
        <ScrollView>
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
                return <Ionicons name={isOpened ? 'ios-chevron-up-circle-outline' : 'ios-chevron-up-circle-outline'} color={'#444'} size={18} />;
            }}
            defaultButtonText={'Select type '}
            />
    <TextInput style={styles.input}  multiline={true} value={desc} onChangeText={setdesc} placeholder='description ' />
   <SafeAreaView>
   <View>
   <TouchableOpacity onPress={PickImage}><Text><Feather name="camera" size={30} color="#14b8a6" />  </Text></TouchableOpacity>
   
   </View>
   <View>
   <TouchableOpacity onPress={openDocument}><Text><Feather name="file-plus" size={30} color="#14b8a6" /></Text></TouchableOpacity>
   </View>
   {image&&(<View><Image source={{uri:image.uri}} style={{width:300,height:300}}/></View>)}

   
   </SafeAreaView>
    
   <View style={styles.buttoncontainer}>
  
  <View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>handlesubmit()}><Text style={styles.buttontext}>submit</Text></TouchableOpacity></View>
 </View>

    </View>
  
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SuggesstionScreen
