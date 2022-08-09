import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';


const DATA =[
    {
        source: "ALJAZEERA",
        title: "Bad news",
        image: "https://arabcenterdc.org/wp-content/uploads/2020/09/Kais-Saied-Supreme-Court-768x384.jpg",
        description: "A new Tunisian constitution giving far more power to President Kais Saied passed in a referendum with a 30.5% turnout, the electoral commission said on Tuesday, tightening his grip in what critics fear is a march to a new era of autocracy.",
        
    },
    {
        source: "ALJAZEERA",
        title: "Bad news",
        image: "https://arabcenterdc.org/wp-content/uploads/2020/09/Kais-Saied-Supreme-Court-768x384.jpg",
        description: "A new Tunisian constitution giving far more power to President Kais Saied passed in a referendum with a 30.5% turnout, the electoral commission said on Tuesday, tightening his grip in what critics fear is a march to a new era of autocracy.",
        
    },
    {
        source: "ALJAZEERA",
        title: "Bad news",
        image: "https://arabcenterdc.org/wp-content/uploads/2020/09/Kais-Saied-Supreme-Court-768x384.jpg",
        description: "A new Tunisian constitution giving far more power to President Kais Saied passed in a referendum with a 30.5% turnout, the electoral commission said on Tuesday, tightening his grip in what critics fear is a march to a new era of autocracy.",
        
    },
    {
        source: "ALJAZEERA",
        title: "Bad news",
        image: "https://arabcenterdc.org/wp-content/uploads/2020/09/Kais-Saied-Supreme-Court-768x384.jpg",
        description: "A new Tunisian constitution giving far more power to President Kais Saied passed in a referendum with a 30.5% turnout, the electoral commission said on Tuesday, tightening his grip in what critics fear is a march to a new era of autocracy.",
        
    },
    {
        source: "ALJAZEERA",
        title: "Bad news",
        image: "https://arabcenterdc.org/wp-content/uploads/2020/09/Kais-Saied-Supreme-Court-768x384.jpg",
        description: "A new Tunisian constitution giving far more power to President Kais Saied passed in a referendum with a 30.5% turnout, the electoral commission said on Tuesday, tightening his grip in what critics fear is a march to a new era of autocracy.",
        
    }
]


function Item({ image, title, description, source }) {
    return (
        <TouchableOpacity style={styles.container}>
                    {/* image */}
                    <Image source={{
                        uri: image,
                    }} 
                    style={styles.image}
                    />
        
                    <View style={{padding: 20}}>
        
                    {/* title */}
                    <Text style={styles.title}>{title}</Text>
        
        
                    {/* description */}
                    <Text Style={styles.description}>{description}</Text>
        
                    <View style={styles.data}>
                        <Text style={styles.heading}>by: <Text style={styles.author}>Brijen Makwana</Text></Text>
                        <Text style={styles.data}>Aug 9th 22</Text>
                    </View>
        
                    {/* source */}
                    <View style={{marginTop: 10}}>
                    <Text>source: <Text style={styles.source}>{source}</Text></Text>
                    </View>
                    </View>
</TouchableOpacity>
    )
}


const Articles = () => {
    return (
        <View>
            <FlatList 
            data={DATA}
            renderItem={({ item })=> <Item 
            image={item.image}
            title={item.title}
            description={item.description}
            source={item.source}
            />}
            keyExtractor={item => item.id}
            /> 
</View>   
 )
}

export default Articles;

const styles = StyleSheet.create({
    container:{
        
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
        marginTop: 20,
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
    }
})