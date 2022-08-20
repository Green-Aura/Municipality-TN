import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    profilecontainer:{
      
        width:"100%",
        height:800,
        
        alignSelf:"center",
        backgroundColor:"#F5F5F5",
        shadowRadius: 10,
        elevation: 13,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 0,
        },
    },
    image:{
        borderRadius:70,
        width:"30%",
        overflow:'hidden',
        marginLeft:150,
    },
    infocontainer:{
        marginTop:150,
        borderRadius:20,
        borderColor:"black",
        borderWidth:0,
        
        
    },
    logoutbuton:{
        backgroundColor:"#00B2FF",
        borderRadius:7,
        width:"30%",
        textAlign:"center",
        alignItems:"center",
       marginBottom:30,
        marginTop:10,
        height:30
    },
    emailinput:{
        backgroundColor: "transparent",
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 10,
        fontSize: 16,
        height: 60,
        marginVertical: 3,
        marginBottom: 5,
        borderBottomColor :"black",
        borderBottomWidth :1,
        
    },
    formcontainer:{
        alignContent:"center",
        alignItems:'center',
        width:"100%",
        marginTop:"40%",
        
        

    },
    nameinput:{
   backgroundColor: "transparent",
   padding: 15,
   paddingLeft: 55,
   paddingRight: 55,
   borderRadius: 10,
   fontSize: 16,
   height: 60,
   marginVertical: 3,
   marginBottom: 5,
   borderBottomColor :"black",
   borderBottomWidth :1,
   
    },
    imageinput:{
        backgroundColor:"#14b8a6",
        width:"17%",
        marginRight:5,
        marginTop:20,
        height:30,
        textAlign:"center",
        alignItems:"center",
        alignContent:"center",
        marginLeft:10,
        borderRadius:60
    
    },
    icon:{
        marginLeft:300,
        marginTop:-15,
        
    },
    submitbutton:{
        backgroundColor:"#00B2FF",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 10,
        fontSize: 16,
        height: 60,
        marginVertical: 3,
        marginBottom: 10,
        marginTop: 15,
        marginLeft:30,
        
    },
    backbutton:{
        backgroundColor:"#00B2FF",
        width:"30%",
        marginTop:20,
        borderRadius:5,
        alignItems:"center",
        height:30,
        marginLeft:10
        

        
    },
    card:{
        alignContent:"center",
        alignItems:'center',
        backgroundColor:"#fff",
        alignSelf:"center",
        width:"90%",
        marginTop:20,
        shadowOffset:{
            height:10,
            width:10
        },
        shadowColor:"black",
        shadowOpacity:1,
        borderRadius:40,
        padding:20,
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        
    },
    complainsbut:{
        backgroundColor:"green",
        width:'20%',
        height:"30",
        borderRadius:70,
        
    },
    complaincard:{
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 10
    }
    ,
    cards:{
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    buttonscontainer:{
        alignItems:"center",
        marginTop:"50%"
    },
    updatebutton:{
        padding:5,
        lineHeight:20,
        borderRadius:6,
        borderColor:"black",
        borderWidth:2,
        alignSelf:"flex-start"
    },
    deletebutton:{
        borderRadius:6,
        borderColor:"black",
        borderWidth:2,
        padding:8,
        marginLeft:10,
        alignSelf:"flex-start"

    },
    popupinput:{
        backgroundColor:"#dee1e2",
        borderColor:"#dee1e2",
        borderRadius:2,
        height:50,
        padding:5
    },
    submitpopup:{
        borderRadius:6,
        backgroundColor:"#008060",
        padding:8,
        marginLeft:10,
        height:70
    },
    container:{ 
        width: "90%",
        alignSelf: "center",
        shadowRadius: 10,
        elevation: 13,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 0,
        },
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius:7
    },
        card: {
       backgroundColor: "#fff",
       padding: 10,
       margin: 10,
       borderRadius: 70
    },
    image:{
        height: 200,
        width: "100%",
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading:{

    },
    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    },
    minicontainer:{
        
        backgroundColor:"#00B2FF",
        width:"100%",
        height:"28%",
      alignContent:"center",
        
    },
    namecontainer:{
        backgroundColor:"white",
       
       position:"absolute",
       width:"90%",
       alignSelf:"center",
       alignItems:"center",
       borderRadius:7,
       marginTop:70,
       elevation: 13,
       shadowOpacity: 0.5,
       shadowColor: "#000",
       shadowOffset: {
           height: 5,
           width: 0,
       },
       shadowRadius:5
    },
    yourcomplainsbutton:{
       alignItems:"center",
       justifyContent:"center",
       padding:15,
       paddingLeft:55,
       paddingRight:55,
       borderRadius:10,
       fontSize:16,
       height:60,
       marginVertical:3,
       marginBottom:10,
       marginTop:-130,
       backgroundColor:"#14b8a6"
    },
    nothanks:{
        backgroundColor:"#14b8a6",
        width:"30%",
        marginTop:20,
        borderRadius:5,
        alignItems:"center",
        height:30,
        marginLeft:60
        
    },
    button: {
        backgroundColor: "#00B2FF",
        padding: 15,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        height: 48,
        borderRadius: 5,
        marginVertical: 3,
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 110,
        marginRight: 100
      },
    but: {
        textAlign: "center",
        alignItems: "center",
      },
    addcomplain:{
        backgroundColor:"#00B2FF",
        width:"80%",
        marginTop:10,
        borderRadius:5,
        alignItems:"center",
        height:45,
        marginLeft:140
    },
    images : {
        width: 30,
        height: 30,
        marginTop: 15,
        marginLeft: 8
      },
      buttontext: {
        color: "white",
        fontSize: 15,
        fontWeight: "700",
      },
})