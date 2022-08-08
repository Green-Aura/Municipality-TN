import { StyleSheet, Text, TouchableOpacity, View,Image, TextInput, ImageBackground, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native'
import React, { useContext,useState,useEffect, createContext } from 'react'
import {firebase} from '../../../firebase/config'
import auth from "@react-native-firebase/auth"
import { AuthContext } from '../../../firebase/Authprovider'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"; 
import {EvilIcons} from "react-native-vector-icons"
import LoginScreen from '../LoginScreen/LoginScreen'
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
    const [complains,setcomplains]=useState([])
    
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
    const getComplaints= ()=>{
      const complainsref=firebase.firestore().collection("Complains")
      return complainsref.onSnapshot(documentsnapshot=>{
        const list=[]
        documentsnapshot.forEach(doc=>{
          console.log(doc.data())
          list.push({
            description:doc.data().description,
            image:doc.data().image,
            type:doc.data().type
          })       })
          setcomplains(list)
          console.log(list)

      })

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
      useEffect (() => {
       getComplaints()
        
          } , []);

  return (
   <ScrollView>
    {page==="profile"?(<View>
      <KeyboardAvoidingView>
      <View style={{alignContent:"center",alignItems:"center"}}>
      <View style={styles.profilecontainer}>
      <Image source={{uri:userData.image}} style={styles.image}/>
      <EvilIcons style={styles.icon } name="check" size={40} color="green"/>
      <View style={styles.infocontainer}>
      <TouchableOpacity style={{marginTop:"-10%",marginLeft:350}} onPress={()=>setPage("updateprofile")}><FontAwesome name='pencil' size={20} /></TouchableOpacity>
      <Text style={{fontWeight:"200",color:'#AEB5BC',fontSize:30,marginTop:20,marginLeft:100}}>your name:{userData.fullName}
      </Text>  
      <Text style={{fontWeight:"200",color:'#AEB5BC',fontSize:30,marginTop:20,marginLeft:100}}>your email: {userData.email}</Text>
      <Text style={{fontWeight:"200",color:'#AEB5BC',fontSize:30,marginTop:20,marginLeft:100}}>your phone number :{userData.phoneNumber} </Text>
      <View style={styles.buttonscontainer}>
      <TouchableOpacity style={styles.submitbutton}  onPress={()=>{setPage("complains")}}><Text>your complains</Text></TouchableOpacity>
      <TouchableOpacity style={styles.logoutbuton} onPress={async()=>{try {await firebase.auth().signOut() 
    
        console.log("logged out")
      setPage("Login")
      }
      catch(e){
        console.log(e)
      }
       }}>
      <Text>log out</Text> 
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      </KeyboardAvoidingView>
      </View>):page=="updateprofile"?(<View style={{alignContent:"center",alignItems:"center"}}>
        <View style={styles.formcontainer} >
      <TextInput style={styles.emailinput} placeholder='email ' value={email} onChangeText={(text)=>setemail(text)}/>
      <TextInput placeholder='name ' style={styles.nameinput} value={name} onChangeText={(text)=>setname(text)}/>
      
      {image&&<Image source={{uri:image  }} style={{width:200,height:200}}/>}
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={styles.imageinput} onPress={chooseImg}><Text>pick an image</Text></TouchableOpacity>
      <TouchableOpacity style={styles.submitbutton} onPress={()=>handleupdate(userData.id)}><Text>submit</Text></TouchableOpacity>
      <TouchableOpacity style={styles.backbutton} onPress={()=>{setPage("profile")}}><Text>back</Text></TouchableOpacity>
      </View>
      </View>
      
      </View>):page=="complains"?<View>
      <TouchableOpacity style={styles.backbutton} onPress={()=>{setPage("profile")}}><Text>back</Text></TouchableOpacity>

      <FlatList  data={complains} style={styles.container} renderItem={({item})=>(
        
    
      <ScrollView>
       <View style={styles.card}>
       <Text style={{fontSize:30}}>{item.type}</Text>
       <Image source={{uri:item.image.uri} } style={{width:200,height:200}}/>
       <Text>{item.description}</Text>
       </View>
       </ScrollView>
       
      
        
       
        
        
      
        
    )} /> 
      
      </View>:page==="Login"?(<LoginScreen/>):null}

  
   
   
   
    </ScrollView>
  )
}




