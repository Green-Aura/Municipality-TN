import * as React from 'react';
import Geolocation from '@react-native-community/geolocation';
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
  /* alert(JSON.stringify(region)) */
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

