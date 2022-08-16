import { StyleSheet } from 'react-native';
export default StyleSheet.create({

    container: {
        width: "80%",
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
        borderRadius: 5,
        marginTop: 20,
    },
    card: {
       backgroundColor: "#fff",
       padding: 5,
       margin: 20,
       borderRadius: 15
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerLeft: {
        flexDirection: 'row',
    },
    userImage: {
        width: 50,
        height: 100,
        borderRadius: 50/2 
        
    },
    userName: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15,
        fontSize:30
    },
    moreIcon : {
        fontSize: 30,
        color: "#ddd",
        marginTop: 15
    },
    feedImage: {
        height: 200,
        borderRadius: 5,
        width: "100%",

    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    footerLeft: {
        flexDirection: 'row',
    },
    profilecontainer:{
      
        width:"100%",
        height:800,
        
        alignSelf:"center",
        backgroundColor:"#ecfeff",
        shadowRadius: 10,
        elevation: 13,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 0,
        },
    },
    minicontainer:{
        backgroundColor:"turquoise",
        width:"100%",
        height:"28%",
      alignContent:"center",
        
    },
    title:{
        fontSize: 20,
        fontWeight: "600",
        padding: 15,
        marginBottom: -25,

    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginBottom: -5,
        padding: 15,
        marginTop: -20,
    },


    
})