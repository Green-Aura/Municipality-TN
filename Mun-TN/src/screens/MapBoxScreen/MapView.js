import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import { Button } from 'react-native-paper';
const window=Dimensions.get('window')
export default class MapViewComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={
      marginBottom:1
    }
  }

componentDidMount(){
  setTimeout(()=>this.setState({marginBottom:0}),100)
}
  render(){
    return (
    <View style={{flex:1}}>
   
      
      <MapView style={{flex:1,marginBottom:this.state.marginBottom}} 
      showsMyLocationButton={true}
      showsUserLocation={true}
      ref= {ref=>this.map=ref}
        />
    

    <View style={{left:'86%',marginTop:window.height/1.3,marginBottom:5,position:'absolute'}}>
      <Image style={{height:45 , width:45,}}
                     source={require('../../../assets/google-maps.png')}  />
      
    </View>
    </View>
    
  
  )
}
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