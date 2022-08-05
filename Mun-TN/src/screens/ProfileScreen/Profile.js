import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext,useState,useEffect, createContext } from 'react'
import {firebase} from '../../../firebase/config'
import auth from "@react-native-firebase/auth"
import { AuthContext } from '../../../firebase/Authprovider'
export default Profile = ({navigation}) => {
  const {user,logout}=createContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [userData, setUser] = useState(null)
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
                setUser(document.data())
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
     useEffect (() => {
    getUser()
      } , []);

  return (
    
    <View>
    <Text>Profile</Text>
    {loading?<View></View>:<View>
    <Text>
    {userData.fullName}
    </Text>
    <Text>
   {userData.email} 
    </Text>
   
    </View>}

    <TouchableOpacity onPress={async()=>{try {await firebase.auth().signOut() 
      navigation.navigate("Home")
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




