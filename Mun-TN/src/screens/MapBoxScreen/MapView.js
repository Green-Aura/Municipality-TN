import  React,{ useEffect, useRef, useState } from 'react';
import MapView, {Circle, Marker, MarkerAnimated, Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image,SafeAreaView, NativeEventEmitter, Alert, TouchableOpacity } from 'react-native';
import {firebase} from '../../../firebase/config';
import { Entypo } from "react-native-vector-icons"
import { Button ,FAB} from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import * as Loaction from "expo-location"
import MapDirections from "react-native-maps-directions"
import { setGoogleApiKey } from 'expo-location';
import { mapDarkStyle,mapStandardStyle } from './DarkStyle';
import messaging from "@react-native-firebase/messaging"
import AsyncStorage from "@react-native-async-storage/async-storage"

const window=Dimensions.get('window')
export default function MapViewComponent (){
  const mapref=useRef()
 const [ marginBottom,setmarginBottom]=useState(1)
 const [truckdata,settruckdata]=useState([])
 const theme=useTheme()
 const[isdark,setdark]=useState(false)

 const [position,setposition]=useState({
   latitude:0,
  longitude:0,
 })
 const [location,setLocation]=useState({ latitude:36.891696,
  longitude:10.1815426,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04})
 const [errormsg,seterrormsg]=useState(null)
  var gettrucks=async()=>{
    firebase.firestore().collection("trucks").onSnapshot(document=>{
      const list=[]
      document.forEach(doc=>{
        list.push({
          id:doc.id,
          coords:doc.data().coords
        })
      })
      settruckdata(list)
    })
  }
  useEffect(()=>{
    gettrucks()
  },[])
var trucks=[
  {
    coords:{
      latitude:36.891696,
  longitude:10.1815426,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04
    }

},{
  coords:{
    latitude:37.050020,
    longitude:11.014420,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
    
  }
},
{
  coords:{
    latitude:36.8022,
    longitude:10.1106,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
  }
},{
  coords:{
    latitude: 36.8132,
    longitude: 10.1339,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
  }
}
]
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

  var getlocation=async ()=>{
    let {status}=await Loaction.requestForegroundPermissionsAsync()
    if(status!=="granted"){
      alert("permission denied")
    }
    let location= await  Loaction.getCurrentPositionAsync({})
  
    setLocation(location.coords)
    
  }
  {/*function getnotification(){
    PushNotification.configure({
      onNotification:function(notification){
         console.log(notification)
      }

    })
  }
*/}
  var getfctoken=()=>{
    let fcmtoken=AsyncStorage.getItem("fcmtoken")
    if(!fcmtoken){
      try{
        let fcmtoken=messaging().getToken()
        if(fcmtoken){
          AsyncStorage.setItem("fcmtoken",fcmtoken)

        }
      }catch(e){
        console.log(e)
      }
    }
  }
  const notificationlistner=()=>{
    messaging().onNotificationOpenedApp(remoteMessage=>{
      console.log("Notification ",remoteMessage.notification)
     
      
    })
    messaging().getInitialNotification().then(remoteMessage=>{
      if(remoteMessage){
        console.log(remoteMessage.notification)
      }
    
    })
    messaging().onMessage(remoteMessage=>{
      console.log("Notification ",remoteMessage.notification)})
  }
  useEffect(()=>{
getlocation()
  },[])
    return (
    <View style={{flex:1}}>
<MapView provider="google" style={{ position: 'absolute',
top: 0,
left: 0,
right: 0,
bottom: 0}} ref={mapref}
      showsCompass={true}
      showsTraffic={true}
      showsBuilding={true}
      showsMyLocationButton={true}
      showsUserLocation={true} >
      <MapDirections origin={{latitude:37.050020,
        longitude:11.014420,
        latitudeDelta: 0.09,
      longitudeDelta: 0.04}}
      
      destination={{ latitude:36.891696,
        longitude:10.1815426,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04}}
        strokeWidth={2}
        strokeColor='red'
        apikey='AIzaSyDcTgDGFU0IT79oG9GHDUzJ7uAkA5Vldq8'
      />

{truckdata.map(truck=>(
  <View>
  <Marker  tappable={true} title="trashtruck"  coordinate={truck.coords} draggable={true} onDragStart={(e)=>{
    console.log("drag start" +e.nativeEvent.coordinate)
  }}
  onDragEnd={(e)=>{
    console.log("drag ended",e.nativeEvent.coordinate)
  }}
  >
  <Image source={require("../MapBoxScreen/garbage-truck.png")} style={{height:20,width:20}}/>
  </Marker>
  <Circle center={{latitude:truck.coords.latitude,longitude:truck.coords.longitude}} radius={1000}/>
  <Polyline coordinates={[truck.coords
  ,{latitude: 36.803361467599,
    longitude:10.112652667605,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04}]}/>
  </View>
  
))}

</MapView> 
<FAB icon="plus" style={{marginTop:18,width:50,marginLeft:"42%", height: 50, backgroundColor: "blue"}} onPress={()=>{
  console.log(location)
  
  getlocation()}}/>

   </View>
    
  
  )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex:1,
  },

});



