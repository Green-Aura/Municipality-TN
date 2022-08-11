import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
 export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ecfeff"
    },
    inputcontainer:{
        width:"80%",
        marginBottom:40,
        
        
        

    },
    input:{
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems:'center',
        marginTop:40,
        borderBottomColor:"black",
       borderBottomWidth:2,
        textAlignVertical:"top",
        
        width:"80%"

    },
    button:{
        backgroundColor:'#14b8a6',
        padding:15,
        width:"40%",
        padding:15,
        borderRadius:500,
        marginTop:10,
        lineHeight:1,
        fontWeight:700,
        height:48,
    },
    but:{
        textAlign:"center",
        alignItems:"center",
        

    }
,
buttontext:{
    color:"white",
    fontSize:16,
    fontWeight:'700'
},
buttoncontainer:{
    width:"100%",
    display:"flex",
    alignContent:"center",
    alignItems:"center",
    marginLeft:10,
    margin:10,
    
},
camerabutton:{
    marginTop:20,
   
    width:50,
    height:50,
    textAlign:"center",
    backgroundColor:"#14b8a6",
    flex:1,
    borderRadius:10
},
pdfbut:{
    marginTop:20,
    
    width:50,
    height:50,
    textAlign:"center",
    backgroundColor:"#14b8a6",
    flex:1,
    borderRadius:10
   
    

},
localisation:{
    marginTop:20,
   borderRadius:10,
    
    width:50,
    height:50,
    textAlign:"center",
    backgroundColor:"#14b8a6",
    flex:1,
    marginLeft:10,
    margin:10,
}      
})
