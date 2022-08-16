import React, { useState, useEffect } from "react";
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
import {FontAwesome} from "@expo/vector-icons"
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
} from "../../../components/styles.js";

const { brand, darkLight, green } = Colors;

export default function RegistrationScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [image, setImage] = useState(null);

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
          phoneNumber,
          adress
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
  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert(
  //           "Sorry, Camera roll permissions are required to make this work!"
  //         );
  //       }
  //     }
  //   })();
  // }, []);

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
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "90%" }}
        keyboardShouldPersistTaps="always"
      >
        <InnerContainer>
          <Image source={require("../RegistrationScreen/v1.png")}
            style ={{width:280}}
          
          />
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
    
  <MyTextInput
      
      icon="phone"
   
          placeholder="+216 xx xxx xxx"
          placeholderTextColor={darkLight}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          
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
        
         <TouchableOpacity onPress={chooseImg}><Text> <Feather name="camera" size={30} color={brand} />  Choisissez une image </Text></TouchableOpacity>

        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }}>
             
          </Image> 
          
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
        <AntDesign name={icon}size={30} color={brand}/>
       
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



