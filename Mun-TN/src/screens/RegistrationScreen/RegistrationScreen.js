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
import RNPickerSelect from 'react-native-picker-select';

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
          phoneNumber
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
          <PageLogo source={require("../../../assets/MUN.jpg")} />
          {/* <PageTitle>Municipality</PageTitle> */}
         
        </InnerContainer>
        <MyTextInput
          icon="user"
          placeholder="Full Name"
          placeholderTextColor={darkLight}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        {/* <PhoneInput 
        
        placeholder="Enter phone number"
        value={phoneNumber}
        defaultValue={216}
        onChangeText={(text)=>{setPhoneNumber(text)
        console.log(text)}}
      />  */}
          {/* <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
               
                 items={[
                     { label: "rue nour", value: "rue nour" },
                     { label: "rue 20 mars", value: "rue 20 mars" },
                     { label: "rue abou kacem", value: "rue abou kacem" },
                     { label: "rue hannibal", value: "rue hannibal" },
                     { label: "rue ghazela", value: "rue ghazela" },
                     { label: "rue bardo", value: "rue bardo" },
                 ]}
                
             /> */}
      <MyTextInput
      
      icon="phone"
   
          placeholder="+216 xx xxx xxx"
          placeholderTextColor={darkLight}
          onChangeText={(text) => setPhoneNumber(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          
        />
         <MyTextInput
          icon="home"
          placeholder="adress"
          placeholderTextColor={darkLight}
          onChangeText={(text) => setAdress(text)}
          value={email}
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
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          secureTextEntry={hidePassword}
          isPassword={true}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />
        {/* <MyTextInput
          icon="lock"
          placeholderTextColor={darkLight}
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          secureTextEntry={hidePassword}
          isPassword={true}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}

        />
         <TouchableOpacity onPress={chooseImg}><FontAwesome name="camera"/></TouchableOpacity>

        /> */}
         <TouchableOpacity onPress={chooseImg}><Text> <Feather name="camera" size={30} color={brand} />  Choose image from camera roll</Text></TouchableOpacity>

        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }}>
             
          </Image> 
          
        )} 
        <StyledButton onPress={() => onRegisterPress()}>
          <Buttontext>Create account</Buttontext>
        </StyledButton>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Log in
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



