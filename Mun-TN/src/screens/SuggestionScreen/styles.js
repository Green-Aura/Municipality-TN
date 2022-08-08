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
        textAlignVertical:"top",
        width:"100%"
    },
    button:{
        elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
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
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
},
pdfbut:{
    elevation: 20,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 18,
    top:15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",

}
       
})
