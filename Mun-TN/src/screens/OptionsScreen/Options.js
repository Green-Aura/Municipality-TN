 import * as React from 'react'
 import {View,Text} from 'react-native'
 const window=Dimensions.get('window')
 export default class Options extends React.Componenet{
    render(){
        this.props.navigation.setOptions({
            headerBackTitle:"",
            HeaderShown:false
        })
        return (
            <View style ={{flex:1,alignItems:'center',justifyContent :'center',backgroundColor:'#FFF'}}>
                <View style={{position:'absolute', top:0,height:100,backgroundColor:'#FFF',width:'100%',alignItems:'center'}}>
                    <Text style={{textAlign:'center', fontsize:20,marginTop:60}}>
                        Choose an option
                    </Text>
                </View>


                <View style={{marginTop:100,alignItems:'center',justifyContent:'center'}}>
                    <Image style={{borderBottoLeftRadius:50,
                    borderBottomRightRadius:50,
                    width:window.width,
                    height:window.height/2.5}}
                   source={{url:'https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2020/12/21171716/Best-way-to-handle-customer-complaints.jpg'}}
                   /> 
                    <View style={{
                        position:'absolute',
                        top:0,
                        left:0,
                        height:window.height/2.5,
                         width:window.width,
                         borderBottomRightRadius:50,   
                         borderBottomLeftRadius:50,
                         backgroundColor:'#00000050',
                         alignItems:'center',
                         justifyContent:'center'   

                    }}>
                        <Text style={{fontsize:18,color:'#FFF'}}>Choose suggestion </Text>
                        <Text style={{fontsize:21,color:'#FFF'}}>Choose Complain </Text>
                    </View>

                </View>
            </View>
        )
    }
 }