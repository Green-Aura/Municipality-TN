import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
 export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputcontainer:{
        width:"80%",
        marginBottom:40
        

    },
    input:{
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems:'center',
        marginTop:40,
        borderBottomColor:"black",
        borderWidth:2,
        textAlignVertical:"top"
    },
    button:{
        backgroundColor:'#45dabe',
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
    
},
camerabutton:{
        width:"30%",
        padding:17,
        backgroundColor:"#00d301",
        textAlign:"center"
},
pdfbut:{
    marginTop:20,
    padding:17,
    backgroundColor:"#1de9b6",
    lineHeight:"30",
    width:"30%",
    textAlign:"center",

}
       
})
