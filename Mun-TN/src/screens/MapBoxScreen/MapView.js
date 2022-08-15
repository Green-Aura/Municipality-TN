import  React,{ useEffect, useState } from 'react';
import MapView, {Marker, MarkerAnimated} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image,SafeAreaView } from 'react-native';
import { Button ,FAB} from 'react-native-paper';
import * as Loaction from "expo-location"
const window=Dimensions.get('window')
export default function MapViewComponent (){
 const [ marginBottom,setmarginBottom]=useState(1)
 const [location,setLocation]=useState({ latitude:36.891696,
  longitude:10.1815426,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04})
 const [errormsg,seterrormsg]=useState(null)
  
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
},{
  coords:{
    latitude: 36.7857,
    longitude:  10.1123,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
  }
},
{
  coords:{
    latitude: 36.09,
    longitude:   9.57,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
  }
},{
  coords:{
    latitude: 36.8075,
    longitude: 10.1549,
    latitudeDelta: 0.09,
  longitudeDelta: 0.04
  }
},{
  coords:{
    latitude:36.802620,    
    longitude: 10.110680,
    latitudeDelta: 0.09,   
  longitudeDelta: 0.04
  }
},{
  coords:{
    latitude:36.80471950015218,     
    longitude: 10.10968443042429,  
    latitudeDelta: 0.09,   
  longitudeDelta: 0.04
  }
},{
  coords:{
    latitude:36.80264004295348,     
    longitude: 10.107246448042577,   
    latitudeDelta: 0.09,   
  longitudeDelta: 0.04
  }
},{
  coords:{
    latitude: 36.8009448334434,     
    longitude:  10.106684073921214,  
    latitudeDelta: 0.09,   
  longitudeDelta: 0.04
  }
}
]
var getlocation=async ()=>{
  let {status}=await Loaction.requestForegroundPermissionsAsync()
  if(status=="granted"){
    seterrormsg("permission denied")
  }
  let location= await  Loaction.getCurrentPositionAsync({})

  setLocation(location.coords)
  
}
var addlocation=()=>{
  console.log(location)
  
}
  return (
  <View style={{flex:1}}>
<MapView provider="google" style={{flex:1,marginBottom:marginBottom,position:"absolute",width:"100%",height:"100%"}} ref={mapref}


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
      apikey=''
    
    />

{truckdata.map(truck=>(
<View>
<Marker coordinate={truck.coords} draggable={true} onDragStart={(e)=>{
  console.log("drag start" +e.nativeEvent.coordinate)
}}
onDragEnd={(e)=>{
  console.log("drag ended",e.nativeEvent.coordinate)
}}
>
<Image source={require("./garbage-truck.png")} style={{height:20,width:20}}/>

</Marker>
<Circle center={{latitude:truck.coords.latitude,longitude:truck.coords.longitude}} radius={1000}/>
</View>

))}

</MapView> 
<FAB icon="plus" style={{marginTop:400,width:50,marginLeft:"90%"}} onPress={()=>{

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex:1,
  },
});


/* import * as React from 'react';
import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration(config);
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,Image} from 'react-native';
const latitudeDelta=0.025
const longitudeDelta=0.025
export default class MapViewComponent extends React.Component {
  state={
    region:{
      latitudeDelta,
      longitudeDelta,
      latitude:33.7444613,
      longitude:-118.3870173
    }
  }
  componentDidMount(){
    this.handleUserLocation();
  }
  handleUserLocation=()=>{
    Geolocation.getCurrentPosition(pos=>{
      alert(JSON.stringify(pos))
    })
  }
onChangeValue = region=>{
   alert(JSON.stringify(region)) 
  this.setState({region})
}
  render() {
    return(
    <View style={{flex:1}}>
      <MapView 
      style={{flex:1}}
      initialRegion = {this.state.region}
      onRegionChangeComplete={this.onChangeValue}
      ref= {ref=>this.map=ref}
      />
     
    </View>
  );
}
}

 */