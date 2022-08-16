import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Linking  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import { 
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    Colors,
    StyledButton,
    Buttontext,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from "../../../components/styles.js";


const DATA =[
    {
        user_name: "France24",
        user_image: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/24/Logos_FRANCE24_RVB_2013.svg/langfr-150px-Logos_FRANCE24_RVB_2013.svg.png",
        feed_image: "https://s.france24.com/media/display/a25e16f2-0d6d-11ed-8ba6-005056bf30b7/w:1280/p:1x1/2022-07-26T220049Z_1798490233_RC2XJV98L8B2_RTRMADP_3_TUNISIA-POLITICS-REFERENDUM-RESULTS-1.JPG",
        description: "Tunisians have approved a new constitution granting unchecked powers to the office of President Kais Saied in a referendum marked by low voter turnout. The move has sparked warnings of a dangerous democratic regression in a country facing political and economic crises.",
        url: "https://www.france24.com/fr/tag/tunisie/",
    },
    {
        user_name: "BBC News",
        user_image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/365px-BBC_News.svg.png?20210511002936",
        feed_image: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/7/29/46c97332-35bd-4974-8ae8-48fc6196e533.jpg",
        description: "Les États-Unis ont déclaré qu'ils partageaient les craintes que la nouvelle constitution tunisienne n'affaiblisse la démocratie et n'érode le respect des droits de l'homme et des libertés fondamentales, après l'approbation d'une nouvelle constitution tunisienne qui donne des pouvoirs étendus au président lors d'un référendum organisé le 25 juillet et marqué par une faible participation des électeurs.",
        url: "https://www.bbc.com/news/topics/cwlw3xz0lmvt/tunisia",

    },
    {
        user_name: "FM Tunis",
        user_image: "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/277660052_1103423870500566_1292150545505681508_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Jj6n7M9tcykAX-bQjgD&_nc_ht=scontent.ftun4-2.fna&oh=00_AT_R5Us_3uc7AnYH4g-k3elkh_5ez8BcAjnuHcAn2bhvsw&oe=62F3DDAF",
        feed_image: "https://content.mosaiquefm.net/uploads/content/thumbnails/ons_jabeur_1659739342.jpg",
        description: "La joueuse de tennis tunisienne Ons Jabeur a été battue, ce vendredi 8 août 2022, par la russe Veronika Kudermetova, lors des quarts de finale du tournoi de San José en Californie.",
        url: "https://www.tunisie-radio.com/ifm",

    },
    {
        user_name: "MosaiqueFM",
        user_image: "https://www.mosaiquefm.net/images/front2020/logofr.png",
        feed_image: "https://content.mosaiquefm.net/uploads/content/thumbnails/fridhi_1659612248.jpg",
        description: "Mohamed Fridhi, secrétaire général de l’Association nationale des diplômés du supérieur, a déclaré, ce jeudi 4 août 2022, que les forces de l'ordre ont exercé de la pression sur les membres de l'association avant leur arrivée au palais de Carthage, où ils comptaient organiser une manifestation pour revendiquer leur droit au recrutement.",
        url: "https://www.tunisie-radio.com/mosaique-fm",

    },
    {
        user_name: "Shems-FM",
        user_image: "https://cdn-radiotime-logos.tunein.com/s129025g.png",
        feed_image: "https://media.shemsfm.net/uploads/content/big/1659804600_content.jpg",
        description: "Dans le cadre de la poursuite de la surveillance de la préservation de la propreté des plages, la police de l'environnement a lancé, selon un communiqué publié aujourd'hui, samedi, par la municipalité de Sousse, des campagnes visant à faire face aux manifestations qui perturbent l'ensemble de la ville, telles que la concentration des cabanes et l'introduction des chiens dans l'eau de mer et la prévention de la possession excessive des plages.",   
        url: "https://www.shemsfm.net/ar/",
    },
    {
        user_name: "Tunis-News",
        user_image: "https://img.onesignal.com/permanent/94bc9829-4aa9-4782-8146-c3f2271b0d0e.png",
        feed_image: "https://www.tunisienumerique.com/wp-content/uploads/2021/09/daily-brief.jpg",
        description: "Daily brief du 16 août 2022: Baisse du taux de chômage selon l’INS, Un nouveau tournant dans l’affaire des magistrats",
        url: "https://www.tunisienumerique.com/",

    },
    {
        user_name: "Business News",
        user_image: "https://thumbs.dreamstime.com/z/business-news-abstract-flat-background-design-illustration-isolated-129628024.jpg",
        feed_image: "https://radioexpressfm.com/wp-content/uploads/2021/10/Imed-Hammami.jpg",
        description: "L'ancien ministre et ancien dirigeant nahdhaoui, Imed Hammami, a exprimé sa satisfaction quant à l'avancement de la situation politique en Tunisie. Il a considéré que le processus entamé par le chef de l'Etat, Kaïs Saïed, avait cumulé les succès et les preuves de patriotisme. Il a expliqué que l'entrée en vigueur de la nouvelle constitution à la date du 25 août 2022 allait faciliter la situation et mettre fin à l'état d'exception.",
        url: "https://www.businessnews.com.tn/",

    },
    {
        user_name: "Webdo TN",
        user_image: "https://www.webdo.tn/wp-content/uploads/2020/04/webdo-logo.jpg",
        feed_image: "https://www.webdo.tn/wp-content/uploads/2022/08/federation-generale-de-lenseignement-secondaire.jpg",
        description: "Le secrétaire général adjoint de la fédération générale de l’enseignement secondaire, Fakhri Semiti, a révélé que la fédération convoquera une commission administrative avant la rentrée scolaire pour répondre au ministère de l’Éducation concernant un certain nombre de décisions, notamment les concours exceptionnels.",
        url: "https://www.webdo.tn/",

    },
    {
        user_name: "Babnet",
        user_image: "https://www.babnet.net/assets/images/logos/logo.png",
        feed_image: "https://www.babnet.net/cache/cacheimages//77da5ed4b6667530228e9d8fe2e49eb2_w775.jpg",
        description: "Le Tribunal Administratif apprend que l'assemblée plénière judiciaire d'aujourd'hui, mardi 16 août 2022, selon sa compétence d'appel pour connaître de la contestation des résultats préliminaires du référendum du 25 juillet 2022, s'est prononcée dans le seul recours qui lui a été soumis par le représentant légal du parti « Afak Tounes », qui déclare : rejeter le recours en la forme.",
        url: "https://badnet.org/Src/",
    },
]


function Item({ user_name, user_image, feed_image, description, url }) {
    return (
        <View 
        style={styles.card}
        >
        <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
        <TouchableOpacity
        onPress={() => Linking.openURL("https://www.france24.com/fr/tag/tunisie/")}
        >  
        <Image 
        style={styles.userImage}
        source={{
            uri: user_image,
        }}
        />
        </TouchableOpacity>
        <Text style={styles.userName}>{user_name}</Text>
        </View>
        <View style={styles.headerRight}>
        </View>
    </View>
    <Image 
        style={styles.feedImage}
        source={{
            uri:feed_image,
        }}
        />
        <Text style={styles.description}>{description}</Text>
<View style={styles.cardFooter}>
<View style={styles.footerLeft}> 
</View>
</View>
    </View>
    )
}

export default function News({navigation}) {

    return (
        <View>

            <FlatList 
               data={DATA}
               renderItem={({ item })=> <Item user_name={item.user_name} 
               user_image={item.user_image}
               feed_image={item.feed_image}
               description={item.description}
               url={item.url}
               />}
               keyExtractor={item => item.id}
            />
            </View>              
    );
}

const styles = StyleSheet.create({
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
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15
    },
    moreIcon : {
        fontSize: 20,
        color: "#ddd",
        marginTop: 15
    },
    feedImage: {
        height: 300,
        borderRadius: 10,
        marginVertical: 10
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    footerLeft: {
        flexDirection: 'row',
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
});