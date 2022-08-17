import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
 export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    
    },
    inputcontainer:{
        width:"100%",
        marginBottom:40
        

    },
    input:{
        backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

    textAlignVertical: "top",

    width: "100%",

    height:200,
    padding: 12,
    borderRadius: 5,
    },
    button:{
       
        backgroundColor:'#14b8a6',
        padding:15,
        paddingLeft:55,
        paddingRight:55,
        fontSize:16,
        height:50,
        borderRadius:10,
        marginVertical:3,
        marginBottom:10,
        marginTop:15,
       marginLeft:1,
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
       
})
