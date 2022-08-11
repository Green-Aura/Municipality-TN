import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
 export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'50%',
        alignSelf:"center"
    },
    inputcontainer:{
        width:370,
        marginBottom:40,
        backgroundColor:"white",
        height:500
        

    },
    input:{
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems:'center',
        marginTop:80,
        borderBottomColor:"rgba(0,0,0,.42)",
        borderBottomWidth:2,
        textAlignVertical:"top",
        width:300,
        color:"rgba(0,0,0,.87)",
    },
    button:{
        flexDirection:"row",
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#14b8a6',
        justifyContent: 'center',
        alignItems: 'center',
        width:"5%",
        marginLeft:10
        
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
    flexDirection:"row",
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#14b8a6',
    justifyContent: 'center',
    alignItems: 'center',
    width:"20%",

    
    
    
},
pdfbut:{
    flexDirection:"row",
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#14b8a6',
    justifyContent: 'center',
    alignItems: 'center',
    width:"5%",
    marginLeft:10
   

    

},
suggestions:{
    backgroundColor:"#ecfeff",
    height:800
}
       
})
