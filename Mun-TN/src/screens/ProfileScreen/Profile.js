import { StyleSheet, Text, TouchableOpacity, View,Image, TextInput, ImageBackground, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native'
import React, { useContext,useState,useEffect, createContext } from 'react'
import {firebase} from '../../../firebase/config'
import auth from "@react-native-firebase/auth"
import { AuthContext } from '../../../firebase/Authprovider'
import styles from './styles'
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import * as PhotoPicker from "expo-image-picker"; 
import {EvilIcons} from "react-native-vector-icons"
import LoginScreen from '../LoginScreen/LoginScreen'
import ImagePicker from "react-native-image-picker"
export default Profile = ({navigation}) => {
  const {user,logout}=createContext(AuthContext)
  const [showpopup,setshowpopup]=useState(false)
    const [loading, setLoading] = useState(true)
    const [userData, setUser] = useState({})
    const [page,setPage]=useState("profile")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [name,setname]=useState("")
    const [image,setImage]=useState(null)
    const [document,setdocument]=useState(null)
    const [complains,setcomplains]=useState([])
    const complainsref=firebase.firestore().collection("Complains")
    const [popupinput,setpopupinput]=useState("")
const convertDate=(seconds)=>{
 /*  var numyears = Math.floor(seconds / 31536000);
  var nummonths = Math.floor((seconds % 31536000) / 2628000);
  var numdays = Math.floor(((seconds % 31536000) % 2628000) / 86400);
  var numhours = Math.floor((((seconds % 31536000) % 2628000) % 86400)/3600);
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
return(`${numyears}/${nummonths}/${numdays}:${numhours}:${numminutes}`) */
var months=Math.floor(( seconds/2592000))
var days=Math.floor((seconds%604800)/86400)
 var hours=Math.floor((seconds%86400)/3600)
 var minutes=Math.floor((seconds%3600)/60)
}
    const handlecomplaintupdate=(id)=>{
      
      complainsref.doc(id).update({
        description:popupinput,
        image:image 
      }).then(()=>{setImage(null)  
        setpopupinput("") }).catch(e=>console.log(e))
      }
    const chooseImg = async () => {
      let result = await PhotoPicker.launchImageLibraryAsync({
        mediaTypes: PhotoPicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        allowsEditing: true, 
      }); 
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
    const takePhoto=()=>{
      const options={}
      ImagePicker.launchCamera(options,response=>{
        console.log(response)
      })
    }
    const getComplaints= ()=>{
      return complainsref.onSnapshot(documentsnapshot=>{
        const list=[]
        documentsnapshot.forEach(doc=>{
          console.log(doc.data())
          list.push({
            id:doc.id,
            description:doc.data().description,
            image:doc.data().image,
            type:doc.data().type,
            iduser:doc.data().iduser,
            createdAt:doc.data().createdAt,
            username:doc.data().username,
            userimage:doc.data().userimage
          })       })
          setcomplains(list)
          console.log(list)

      })
 
    }
    const handledelete=(id)=>{
      complainsref.doc(id).delete().then(()=>alert("deleted successfully")).catch(e=>console.log(e))
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
                  phoneNumber:document.data().phoneNumber,
                  
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
    {page==="profile"?(
      <View >
      <View style={{alignContent:"center",alignItems:"center"}}>
      <View style={styles.profilecontainer}> 
      {userData.image?(<Image source={{uri:userData.image}} style={{width:100,height:100,borderRadius:50,overflow:'hidden',marginTop:20,marginLeft:"35%"}}/>):<Image source={{uri:userData.image}} style={{width:100,height:100,borderRadius:70,overflow:'hidden',marginLeft:150}}/>}
      <EvilIcons style={styles.icon }  name="check" size={40} color="green"/>
      <View style={styles.infocontainer}>
      <TouchableOpacity style={{marginTop:"-10%",marginLeft:"80%"}} onPress={()=>setPage("updateprofile")}><FontAwesome name='pencil' size={20} /></TouchableOpacity>
      <Text style={{fontWeight:"bold",color:'black',fontSize:15,marginTop:20}}>your name:{userData.fullName}
      </Text>  
      <Text style={{fontWeight:"bold",color:'black',fontSize:15,marginTop:20}}>your email: {userData.email}</Text>
      <Text style={{fontWeight :"bold",color:'black',fontSize:15,marginTop:20}}>your phone number :{userData.phoneNumber} </Text>
      <View style={styles.buttonscontainer}>
 
      <TouchableOpacity style={styles.submitbutton}  onPress={()=>{setPage("complains")}}><Text style={{color:"white"}}>your complains</Text></TouchableOpacity>
      <TouchableOpacity style={styles.logoutbuton} onPress={async()=>{try {await firebase.auth().signOut() 
    
        console.log("logged out")
      setPage("Login")
      }
      catch(e){
        console.log(e)
      }
       }}>
      <Text style={{color:"white"}}>log out</Text> 
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      
      </View>):page=="updateprofile"?(<View style={{alignContent:"center",alignItems:"center"}}>
        <View style={styles.formcontainer} >
      <TextInput style={styles.emailinput} placeholder='email ' value={email} onChangeText={(text)=>setemail(text)}/>
      <TextInput placeholder='name' style={styles.nameinput} value={name} onChangeText={(text)=>setname(text)}/>
      {image&&<Image source={{uri:image  }} style={{width:200,height:200}}/>}
      <View style={{flexDirection:"row"}}>
      
      <TouchableOpacity style={styles.imageinput} onPress={chooseImg}><Text>pick an image</Text></TouchableOpacity>
      <TouchableOpacity style={styles.submitbutton} onPress={()=>handleupdate(userData.id)}><Text>submit</Text></TouchableOpacity>
      <TouchableOpacity style={styles.backbutton} onPress={()=>{setPage("profile")}}><Text style={{color:"white"}} >back</Text></TouchableOpacity>
      </View>
      </View>
      
      </View>):page=="complains"?<View> 
      <TouchableOpacity style={styles.backbutton} onPress={()=>{setPage("profile")}}><Text>back</Text></TouchableOpacity>
<View>
      <FlatList  data={complains.filter(item=>item.iduser==userData.id)}  renderItem={({item})=>(
       <View style={styles.container}>
       <View style={{flexDirection:"row",alignSelf:"flex-start"}}>
       <View style={{flexDirection:"row"}}>
       <Image  source={{uri:item.userimage}} style={{width: 50,height: 50,borderRadius: 50/2}} />
        <Text style={{fontWeight:"bold",fontSize:15,color:"black",marginTop:9,marginLeft:5}}>{item.username}</Text>
        </View>
        <View style={{marginTop:10,flexDirection:"row",alignSelf:"flex-end",marginLeft:"55%"}}>
        <TouchableOpacity style={styles.updatebutton} onPress={()=>setshowpopup(true)}><FontAwesome name='pencil' size={20}/></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handledelete(item.id)} style={styles.deletebutton}><AntDesign name='delete' size={15}/></TouchableOpacity>
        </View>
       
       </View>
      

       {item.image.uri?(<Image source={{uri:item.image.uri} } style={{height: 300,
        borderRadius: 10,
        marginVertical: 10}}/>):<Image source={{uri:item.image} } style={{width:"70%",borderRadius:40,height:300}}/>}
       <Text style={{fontSize:15,marginTop:10,alignSelf:"flex-start"}}>{item.description}</Text>
       <Text style={{fontSize:16,fontWeight:"600",alignSelf:"flex-end"}}>{item.type}</Text>
       {showpopup==true?(<View style={{marginBottom:-30}}>
        <TouchableOpacity onPress={()=>setshowpopup(false)}><FontAwesome name='close' size={20}/></TouchableOpacity>
        <TextInput style={styles.popupinput} placeholder='enter your description here' value={popupinput} onChangeText={(text)=>setpopupinput(text)}/>
        <TouchableOpacity onPress={chooseImg}><Text>change picture</Text></TouchableOpacity>
       <TouchableOpacity style={styles.submitpopup} onPress={()=>handlecomplaintupdate(item.id)}><Text>submit</Text></TouchableOpacity>
       
       </View>):null}
       </View>
       
       
      
        
       
        
        
      
        
    )} /> 
    </View>
      
      </View>:null}

  
   
   
   
    </ScrollView>
  )
}




