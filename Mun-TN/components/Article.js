import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';


const DATA =[
    {
        source: "ALJAZEERA",
        title: "LE COSTUME TRADITIONNEL TUNISIEN",
        image: "https://chwaya.b-cdn.net/img/ybc_blog/post/3-slide-costume-femmes.jpg",
        description: "Le mode d'habillement constitue l'un des traits distinctifs de la personnalité de l'homme. Il fait également partie intégrante des spécificités inhérentes à son identité et à la civilisation dont il se prévaut. Autant par sa diversité, que par son raffinement, le costume traditionnel tunisien témoigne de la richesse et de la valeur inestimable du patrimoine culturel et civilisationnel de ce pays à l’histoire plusieurs fois millénaire, qu'est la Tunisie.",
        
    },
    {
        source: "الوطنية الاولى",
        title: "عيد المرأة",
        image: "https://tuniscope.com/uploads/images/content/femme-130821.jpg",
        description: "بمناسبة عيد المرأة تعتزم بلدية الدندان الاحتفال بهذا اليوم الوطني والعالمي من خلال تظاهرات وأنشطة ثقافية وذلك خلال يوم الاحد .",
        
    },
    {
        source: "ALJAZEERA",
        title: "Bad news",
        image: "https://modo3.com/thumbs/fit630x300/168421/1524978830/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE_%D8%B9%D9%8A%D8%AF_%D8%BA%D8%B1%D8%B3_%D8%A7%D9%84%D8%A3%D8%B4%D8%AC%D8%A7%D8%B1.jpg",
        description: "بمناسبة عيد الشجرة تعتزم بلدية الدندان بالاشتراك مع المجتمع المدني في تنظيم يوم توعوي للتحسيس بمخاطر التلوث تتخلله العديد من التظاهرات والفعاليات.",
        
    },

    {
        source: "ALJAZEERA",
        title: "Bad news",
        image: "https://arabcenterdc.org/wp-content/uploads/2020/09/Kais-Saied-Supreme-Court-768x384.jpg",
        description: "A new Tunisian constitution giving far more power to President Kais Saied passed in a referendum with a 30.5% turnout, the electoral commission said on Tuesday, tightening his grip in what critics fear is a march to a new era of autocracy.",
        
    },
  

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
        
                    <View style={{padding: 10}}>
        
                    {/* title */}
                    <Text style={styles.title}>{title}</Text>
        
        
                    {/* description */}
                    <Text Style={styles.description}>{description}</Text>
        
                    <View style={styles.data}>
                        {/* <Text style={styles.heading}>by: <Text style={styles.author}>Brijen Makwana</Text></Text> */}
                        <Text style={styles.data}>Aug 9th 22</Text>
                    </View>
        
                    {/* source */}
                    <View style={{marginTop: 10}}>
                    {/* <Text>source: <Text style={styles.source}>{source}</Text></Text> */}
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