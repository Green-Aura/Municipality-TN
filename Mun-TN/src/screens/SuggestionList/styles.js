import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor: "#ddd",
    },
    card: {
       backgroundColor: "#fff",
       padding: 10,
       margin: 10,
       borderRadius: 10
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
        height: 50,
        borderRadius: 50/2 
        
    },
    userName: {
        fontWeight: 'bolder',
        marginLeft: 10,
        marginTop: 15,
        fontSize:30
    },
    moreIcon : {
        fontSize: 20,
        color: "#ddd",
        marginTop: 15
    },
    feedImage: {
        height: 300,
        borderRadius: 10,
        marginVertical: 10,
        borderColor:"black",
        borderWidth:5
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    footerLeft: {
        flexDirection: 'row',
    },
    


    
})