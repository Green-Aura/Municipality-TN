import { StyleSheet, Text, TouchableOpacity, View,Image, TextInput } from 'react-native'
import React, { useContext,useState,useEffect, createContext } from 'react'
import {firebase} from '../../../firebase/config'
import auth from "@react-native-firebase/auth"
import { AuthContext } from '../../../firebase/Authprovider'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"; 
import Updateprofile from './Updateprofile'

export default Profile = ({navigation}) => {
  const {user,logout}=createContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [userData, setUser] = useState({})
    const [page,setPage]=useState("profile")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [name,setname]=useState("")
    const [image,setImage]=useState(null)
    const [document,setdocument]=useState(null)
    
    const chooseImg = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        allowsEditing: true,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
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
                setLoading(false)
              });
          } else {
            setLoading(false)
          }
        }
      })
      
      
      }
     
    
   {/* const getUser = async() => {
      await firebase.firestore()
      .collection('users')
      .doc(user.id)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
    }
  */}
  const handleupdate=(id)=>{
firebase.firestore().collection("users").doc(id).update({
  email:email,
  fullName:name,
image:image

}).then(()=>{alert("updated successfully")
setPage("profile")
setImage(null)
setemail("")
setname("")
})
  } 
   
     useEffect (() => {
    getUser()
      } , []);

  return (
    <View>
    {page==="profile"?(<View>
      <Text style={{marginLeft:"50%",color:"blue"}}>your Profile</Text>
      <View style={{alignContent:"center",alignItems:"center"}}>
      <View style={styles.profilecontainer}>
      <Image source={{uri:userData.image}} style={styles.image}/>
      <View style={styles.infocontainer}>
      <Text>your name:{userData.fullName}
      </Text> 
      <Text>your email:{userData.email}</Text>
      <Text>your phone number :{userData.phoneNumber} </Text>
      <TouchableOpacity onPress={()=>setPage("updateprofile")}><FontAwesome name='pencil' size={20} /></TouchableOpacity>
      </View>
      </View>
      </View>
      </View>):page=="updateprofile"?(<View style={{alignContent:"center",alignItems:"center"}}>
        <View style={styles.formcontainer} >
      <TextInput style={styles.emailinput} placeholder='email ' value={email} onChangeText={(text)=>setemail(text)}/>
      <TextInput placeholder='name ' style={styles.nameinput} value={name} onChangeText={(text)=>setname(text)}/>
      {image&&<Image source={{uri:image  }} style={{width:200,height:200}}/>}
      <TouchableOpacity style={styles.imageinput} onPress={chooseImg}><Text>pick an image</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>handleupdate(userData.id)}><Text>submit</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{setPage("profile")}}><Text>back</Text></TouchableOpacity>
      </View>
      </View>):null}

  
   
   
    <TouchableOpacity style={styles.logoutbuton} onPress={async()=>{try {await firebase.auth().signOut() 
      navigation.navigate("SignUp")
      console.log("logged out")
    
    }
    catch(e){
      console.log(e)
    }
     }}>
    <Text>log out</Text> 
    </TouchableOpacity>
      
    </View>
  )
}




