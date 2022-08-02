import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, ScrollView, Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../../../firebase/config'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'
import * as ImagePicker from "expo-image-picker"
import { SafeAreaView } from 'react-native-safe-area-context';
import DocumentPicker from "react-native-document-picker"
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
    
        async function choosefile (){
            try{
                const file=await DocumentPicker.pick({
                    type:[DocumentPicker.types.allFiles]
                })

                const path=await normalizepath(file.uri)
            }catch(e){
                if(DocumentPicker.isCancel(e)){

                }
                else{
                    throw e
                }
            }
        }
        async function normalizepath(path){
            if(Platform.OS==="ios"|| Platform.OS==="android"){
                const filePrefix='file://'
                if(path.startsWith(filePrefix)){
                    path=path.substring(filePrefix.length)
                    try{
                        path=decodeURI(path)

                    }catch(err){

                    }
                }
            }
        }
const ref=firebase.firestore().collection('suggestions')
var handlesubmit= async ()=>{
    UploadImage()
    await  ref.add({type:type,municipalityname:name,description:desc,image:image,location:{latitude:latitude,longitude:longitude}})
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
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            defaultButtonText={'Select type '}/>
    <TextInput style={styles.input} value={desc} onChangeText={setdesc} placeholder='description ' />
   <SafeAreaView>
   
   <TouchableOpacity onPress={PickImage}><Text>pick an Image </Text></TouchableOpacity>
   <TouchableOpacity onPress={choosefile}><Text>pick a pdf fil </Text></TouchableOpacity>
   {image&&(<View><Image source={{uri:image.uri}} style={{width:300,height:300}}/></View>)}

   
   </SafeAreaView>
    


    </View>
    <View style={styles.buttoncontainer}>
  
     <View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>handlesubmit()}><Text style={styles.buttontext}>submit</Text></TouchableOpacity></View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SuggesstionScreen
