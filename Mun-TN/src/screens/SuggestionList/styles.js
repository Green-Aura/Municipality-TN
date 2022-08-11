import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor: "#ecfeff",
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