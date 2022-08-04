/* import React from "react"
const {View ,Text}= require("react-native")
import MapboxGL from "@rnmapbox/maps"
const tokenmapbox="pk.eyJ1IjoiYXppemhzc2luIiwiYSI6ImNsNmYxdm45bzAycnIzYnA4OGZ2aDk4bWkifQ.RqCIz1l7MRatKijbbcVUYA"
MapboxGL.setAccessToken(tokenmapbox)
const MapBox=()=>{
    const coordinateexample =[]
    return(
        <MapboxGL.MapView style={{flex:1}}>
            <MapBox.Camera zoomLevel={6}
            centerCoordinate={coordinateexample}/>
            <MapboxGL.PointAnnotation id='point' coordinate={coordinateexample}/>
        </MapboxGL.MapView>
    )
}
export default MapBox; */