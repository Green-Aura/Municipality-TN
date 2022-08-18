import React, { useState, useEffect } from "react";
import SelectList from "react-native-dropdown-select-list";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../../firebase/config";
import * as ImagePicker from "expo-image-picker";
import PhoneInput from "react-native-phone-number-input";
import { FontAwesome } from "@expo/vector-icons";
// import RNPickerSelect from 'react-native-picker-select';

//Icons:

import { Ionicons, Octicons, AntDesign, Feather } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLablel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  Buttontext,
  MsgBox,
  Line,
  StyledSelectList,
} from "../../../components/styles.js";

const { brand, darkLight, green } = Colors;
const cities = [
  "Tunis",
  "Ariana",
  "BenArous",
  "Nabeul",
  "Zaghouane",
  "Bizerte",
  "Sfax",
  "Sousse",
  "Siliana ",
  "Monastir",
  "Gafsa",
  "Gabes",
  "Jandouba",
  "Mednine",
  "Beja",
  "Kairouan",
  "Sidibouzid",
  "Manouba",
  "Kasserine",
  "Gbelli",
  "Tataouine",
  "El mahdia",
  "el Kef",
  "Tozeur",
  "Kébili",
];
const Kébili = [
  "Douz Nord",
  "Douz Sud",
  "Faouar",
  "Kébili Nord",
  "Kébili Sud",
  "Souk Lahad",
]
const Ariana = [
  "Ariana Ville",
  "Ettadhamen",
  "Kalâat el-Andalous",
  "La Soukra",
  "Mnihla",
  "Raoued",
  "Sidi Thabet",
];
const Tozeur =[
  "Degache",
  "Hazoua",
  "Nefta",
  "Tameghza",
  "Tozeur",

]
const Jandouba =[
  "Aïn Draham",
  "Balta-Bou Aouane",
  "Bou Salem",
  "Fernana",
  "Ghardimaou",
  "Jendouba Sud",
  "Jendouba Nord",
  "Oued Meliz",
  "Tabarka",
  
]
const Manouba = [
  "Borj El Amri",
  "Djedeida",
  "Douar Hicher",
  "El Batan",
  "La Manouba",
  "Mornaguia",
  "Oued Ellil",
  "Tebourba",
  


];
const Nabeul = [
  "Béni Khalled",
  "Béni Khiar",
  "Bou Argoub",
  "Dar Chaâbane El Fehri	",
  "El Haouaria",
  "El Mida",
  "Grombalia",
  "Hammamet",
  "Kélibia",
  "Korba",
  "Menzel Bouzelfa",
  "Menzel Temime",
  "Soliman",
  "Takelsa",
  
];
const BenArous = [
  "Ben Arous",
  "Bou Mhel el-Bassatine",
  "El Mourouj",
  "Ezzahra",
  "Fouchana",
  "Hammam Chott",
  "Hammam Lif",
  "Mohamedia",
  "Medina Jedida",
  "Mégrine",
  "Mornage",
  "Radès",
  
];
const Mehdia = [
  "Bou Merdes",
  "Chebba",
  "Chorbane",
  "El Jem",
  "Essouassi",
  "Hebira",
  "Ksour Essef",
  "Mahdia",
  "Melloulèche",
  "Ouled Chamekh	",
  "Sidi Alouane",
  "Rejiche",
  "El Bradâa",

  
];
const Sousse = [
  "Akouda",
  "Bouficha",
  "Enfida",
  "Hammam Sousse",
  "Kalâa Kebira",
  "Kalâa Seghira",
  "Kondar",
  "M'saken",
  "Sidi Bou Ali",
  "Sidi El Hani",
  "Sousse Jawhara",
  "Sousse Médina",
  "Sousse Riadh",
  "Sousse Sidi Abdelhamid",

 

];
const ElKef = [
  "Dahmani",
  "Jérissa",
  "El Ksour",
  "Sers",
  "Kalâat Khasba",
  "Kalaat Senan",
  "Kef Est",
  "Kef Ouest",
  "Nebeur",
  "Sakiet Sidi Youssef	",
  "Tajerouine",
];
const Kasserine= [
  "El Ayoun",
  "Ezzouhour",
  "Fériana",
  "Foussana",
  "Haïdra",
  "Hassi El Ferid",
  "Jedelienne",
  "Kasserine Nord",
  "Kasserine Sud",
  "Majel Bel Abbès",
  "Sbeïtla",
  "Sbiba",
  "Thala",
  
];
const sidibouzide = [
  "Bir El Hafey",
  "Cebbala Ouled Asker",
  "Jilma",
  "Meknassy",
  "Menzel Bouzaiane",
  "Mezzouna",
  "Ouled Haffouz",
  "Regueb",
  "Sidi Ali Ben Aoun",
  "Sidi Bouzid Est",
  "Sidi Bouzid Ouest",
  "Souk Jedid",
  
];
const Sfax = [
  "Agareb",
  "Bir Ali Ben Khalifa",
  "El Amra",
  "El Hencha",
  "Graïba",
  "Mahrès",
  "Kerkennah",
  "Menzel Chaker",
  "Sakiet Eddaïer",
  "Sakiet Ezzit",
  "Sfax Ouest",
  "Sfax Sud",
  "Sfax Ville",
  "Skhira",
  "Thyna",
  




];
const Mednine = [
  "Ben Gardane",
  "Beni Khedache",
  "Djerba - Ajim",
  "Djerba - Houmt Souk",
  "Djerba - Midoun",
  "Médenine Nord",
  "Médenine Sud",
  "Sidi Makhlouf",
  "Zarzis",
];
const Zaghouane = [
  "Bir Mcherga",
  "El Fahs",
  "Nadhour",
  "Saouaf",
  "Zaghouan",
  "Zriba",
  
];
const Bizerte = [
  "Bizerte Nord",
  "Bizerte Sud",
  "El Alia",
  "Ghar El Melh",
  "Ghezala",
  "Joumine",
  "Mateur",
  "Menzel Bourguiba	",
  "Menzel Jemil",
  "Ras Jebel",
  "Sejnane",
  "Tinja",
  "Utique",
  "Zarzouna",
  

];
const Kairouan = [
  "Bou Hajla",
  "Chebika",
  "Echrarda",
  "El Alâa",
  "Haffouz",
  "Hajeb El Ayoun	",
  "Kairouan Nord",
  "Kairouan Sud",
  "Nasrallah",
  "Oueslatia",
  "Sbikha",
  
 
];
const Gabes = [
  "Gabès Médina",
  "Gabès Ouest",
  "Gabès Sud",
  "Ghannouch",
  "El Hamma",
  "Matmata",
  "Mareth",
  "Menzel El Habib",
  "Métouia",
  "Nouvelle Matmata	",

 
];
const Tunis = [
  "Bab El Bhar",
  "Bab Souika",
  "Carthage",
  "Cité El Khadra",
  "Djebel Jelloud",
  "El Kabaria",
  "El Menzah",
  "El Omrane",
  "El Omrane supérieur",
  "El Ouardia",
  "Ettahrir",
  "Ezzouhour",
  "Hraïria",
  "La Goulette",
  "La Marsa",
  "Le Bardo",
  "Le Kram",
  "Médina",
  "Séjoumi",
  "Sidi El Béchir",
  "Sidi Hassine",
 
];
const Gafsa = [
  "Belkhir",
  "El Guettar",
  "El Ksar",
  "Gafsa Nord",
  "Gafsa Sud",
  "Mdhilla",
  "Métlaoui",
  "Moularès",
  "Redeyef",
  "Sened",
  "Sidi Aïch",
 
];

const Monastir = [
  "Bekalta",
  "Bembla",
  "Beni Hassen",
  "Jemmal",
  "Ksar Hellal",
  "Ksibet el-Médiouni",
  "Moknine",
  "Monastir",
  "Ouerdanine",
  "Sahline",
  "Sayada-Lamta-Bou Hajar",
  "Téboulba",
  
 

];
const Siliana = [
  "Bargou",
  "Bou Arada",
  "El Aroussa",
  "El Krib",
  "Gaâfour",
  "Kesra",
  "Makthar",
  "Rouhia",
  "Sidi Bou Rouis",
  "Siliana Nord",
  "Siliana Sud",
 
];
const Beja = [
  "Amdoun",
  "Béja Nord",
  "Béja Sud",
  "Goubellat",
  "Medjez el-Bab",
  "Nefza",
  "Téboursouk",
  "Testour",
  "Thibar",
];
const Tataouine = [
  "Bir Lahmar",
  "Dehiba",
  "Ghomrassen",
  "Remada",
  "Smâr",
  "Tataouine Nord",
  "Tataouine Sud",
  
  

];

export default function RegistrationScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [city, setcity] = useState("");
  const [Municipality, setMunicipality] = useState("");
  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
          image,
          adress,
          city,
          Municipality,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Tabe", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const chooseImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const UploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);
    try {
      await ref;
    } catch (e) {
      console.log(e);
    }
    setUploading(false);
    Alert.alert("photo uploaded");
    setImage(null);
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "90%" }}
        keyboardShouldPersistTaps="always"
      >
        <InnerContainer>
          {/* <Image source={require("../RegistrationScreen/v1.png")}
            style ={{width:280}}
          
          /> */}
          {/* <PageTitle>Municipality</PageTitle> */}
        </InnerContainer>

        <MyTextInput
          icon="user"
          placeholder="Nom et prénom"
          placeholderTextColor={darkLight}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <SelectList 
          setSelected={setcity}
          data={cities}
          placeholder="choisissez votre ville "
          onSelect={() => console.log(city)}
          search={false}
        />
        <SelectList
          setSelected={setMunicipality}
          placeholder="choisissez votre municipalitée"
          data={
            city == "Ariana"
              ? Ariana
              : city == "Manouba"
              ? Manouba
              : city == "Nabeul"
              ? Nabeul
              : city == "BenArous"
              ? BenArous
              : city == "El mahdia"
              ? Mehdia
              : city == "el Kef"
              ? ElKef
              : city == "Kasserine"
              ? Kasserine
              : city == "Sfax"
              ? Sfax
              : city == "Sousse"
              ? Sousse
              : city == "Monastir"
              ? Monastir
              : city == "Gabes"
              ? Gabes
              : city == "Tataouine"
              ? Tataouine
              : city == "Gafsa"
              ? Gafsa
              : city == "Siliana "
              ? Siliana 
              : city == "Bizerte"
              ? Bizerte
              : city == "Tunis"
              ? Tunis
              : city == "Sidibouzid"
              ? sidibouzide
              : city == "Mednine"
              ? Mednine
              : city == "Beja"
              ? Beja
              : city == "Zaghouane"
              ? Zaghouane
              : city == "Kairouan"
              ? Kairouan
             
              : city == "Kébili "
              ? Kébili 
              : city == "Tozeur"
              ? Tozeur
              : city == "Jandouba"
              ? Jandouba
             
              : ["veuilez choisir une ville "]
          }
          onSelect={() => console.log(Municipality)}
          search={false}
        />

        <MyTextInput
          icon="home"
          placeholder="adresse"
          placeholderTextColor={darkLight}
          onChangeText={(text) => setAdress(text)}
          value={adress}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <MyTextInput
          icon="mail"
          placeholder="E-mail"
          placeholderTextColor={darkLight}
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <MyTextInput
          icon="lock"
          placeholderTextColor={darkLight}
          placeholder="Mot de passe"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          secureTextEntry={hidePassword}
          isPassword={true}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />
        <MyTextInput
          icon="lock"
          placeholderTextColor={darkLight}
          placeholder="Confirmer le mot de passe"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          secureTextEntry={hidePassword}
          isPassword={true}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />

        {/* <TouchableOpacity onPress={chooseImg}><Text> <Feather name="camera" size={30} color={brand} />  Choisissez une image </Text></TouchableOpacity> */}

        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200 }}
          ></Image>
        )}
        <StyledButton onPress={() => onRegisterPress()}>
          <Buttontext>Créer un compte</Buttontext>
        </StyledButton>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Vous avez déjà un compte ?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Connectez-vous
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,

  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        {/* <Octicons name={icon} size={30} color={brand} /> */}
        <AntDesign name={icon} size={30} color={brand} />
      </LeftIcon>

      <StyledInputLablel>{label}</StyledInputLablel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
      {/* <Feather name="camera" size={24} color="black" /> */}
    </View>
  );
};
