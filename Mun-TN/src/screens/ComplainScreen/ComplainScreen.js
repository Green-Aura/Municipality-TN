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
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import RNDocumentPicker,{types} from "react-native-document-picker"
// import RNFetchBlob from 'rn-fetch-blob';
import { DefaultTheme} from '@react-navigation/native';
import FileViewer from "react-native-file-viewer";
import * as expoDocumentPicker from "expo-document-picker"
import MapViewComponent from '../MapBoxScreen/MapView.js';
import { FAB } from 'react-native-paper';
import * as Loaction from "expo-location"

export default function ComplainScreen ({navigation}) {
  const [user,setUser]=useState({})
  const [loading,setloading]=useState(false)
  const [location,setlocation]=useState({})
  const [errormsg,seterrormsg]=useState(null)

  var getlocation=async ()=>{
    let {status}=await Loaction.getBackgroundPermissionsAsync()
    if(status=="granted"){
      seterrormsg("permission granted")
    }
    let location= await  Loaction.getCurrentPositionAsync({})
setlocation(location.coords)
console.log(location)
    setPage("Complain")
    alert("location selected")
    }
    
  


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
                phoneNumber:document.data().phoneNumber,
               
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
    const [page,setPage]=useState("Complain")
    const[longitude,setLongitute]=useState(0)
    const[latitude,setLatitude]=useState(0)
    const [list,setList]=useState([])
    
    const[fileresponse,setFileResponse]=useState(null)
    const [file,setfile]=useState(null)
    const window=Dimensions.get('window') 
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
const ref=firebase.firestore().collection('Complains')
var handlesubmit= async ()=>{
    UploadImage()
    uploadfile()
    await  ref.add({type:type,description:desc,image:image,iduser:user.id,createdAt:Date.now(),file:file,username:user.fullName,userimage:user.image,location:location})
    alert("added successfully")
    console.log("image "+image.uri)
    setImage(null)
    setdesc("")
    setType('')
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
    
        setImage(null) 
    }
    // No permissions request is necessary for launching the image library
    
    return (
      <ScrollView>
        {page=="Complain"?(   <KeyboardAvoidingView style={styles.container} behavior='padding'>
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
               defaultButtonText={'Select type'}/>
               <View style={{flexDirection:"row",marginTop:10}}>
               <Image source={{uri:user.image }} style={{width:50,height:50,borderRadius:70,marginTop:23,marginRight:5}}/>
               <TextInput style={styles.input}   multiline={true} value={desc} onChangeText={setdesc} placeholder={`what's in your mind ${user.fullName}?`}/>
               </View>
               <SafeAreaView horizontal={true} >
               <View style={{flexDirection:"row",marginTop:80}}>
               <TouchableOpacity style={styles.camerabutton} onPress={PickImage}><FontAwesome name='camera' style={{marginTop:8,marginLeft:28}} size={32}></FontAwesome></TouchableOpacity>
               <TouchableOpacity style={styles.localisation} onPress={()=>setPage("map")}><Entypo size={32} name='location' style={{marginTop:8,marginLeft:30}}></Entypo></TouchableOpacity>
               <TouchableOpacity style={styles.pdfbut} onPress={openDocument}><AntDesign size={32} name='addfile' style={{marginTop:8,marginLeft:31}}></AntDesign></TouchableOpacity>
               
               </View>
      
     {image&&(<View><Image source={{uri:image.uri}} style={{width:300,height:275,borderRadius:40,marginTop:15,marginLeft:window.width/35}}/></View>)}
   
      
      </SafeAreaView>
    </View>
       <View style={styles.buttoncontainer}>
     
        <View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>handlesubmit()}><Text style={styles.buttontext}>submit</Text></TouchableOpacity></View>
       </View>
       </KeyboardAvoidingView>):page=="map"?(

        <View>
       
       <View>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <MapView provider="google"  style={{flex:1,position:"absolute",width:"100%",height:"100%",top:0,left:0,bottom:0,right:0}}></MapView>
       <FAB icon="plus" style={{marginTop:10,width:50,marginLeft:"90%"}} onPress={()=>getlocation()}/></View></View>
       
      ):null}
     
   </ScrollView>
  )
}