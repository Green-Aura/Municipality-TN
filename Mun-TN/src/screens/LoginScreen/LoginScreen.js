import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebase} from '../../../firebase/config.js'


//Icons: 

import { Ionicons, Octicons } from '@expo/vector-icons';



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
    Line
} from "../../../components/styles.js";

const {brand, darkLight, green} = Colors;

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(true)
   
   
   
    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user: user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '90%' }}
                keyboardShouldPersistTaps="always">
                <InnerContainer>
                <PageLogo source={require('../../../assets/baladia.png')} />
                <PageTitle>Municipality</PageTitle>
                <SubTitle>Account Login</SubTitle>
                </InnerContainer>
                <StyledFormArea>
                <MyTextInput
                    icon="mail"
                    placeholder='E-mail'
                    placeholderTextColor={darkLight}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
                <MyTextInput
                    icon="lock"
                    placeholderTextColor={darkLight}
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />
                <StyledButton
                    onPress={() => onLoginPress()}>
                    <Buttontext>Log in</Buttontext>
                </StyledButton>
                <Line />
                </StyledFormArea>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
                
            </KeyboardAwareScrollView>
            </View>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) =>{
     return (
        <View>
              <LeftIcon>
                    <Octicons name={icon} size={30} color={brand} />
              </LeftIcon>
              <StyledInputLablel>{label}</StyledInputLablel>
              <StyledTextInput {...props} />
              {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size= {30} color={darkLight} />
                </RightIcon>
              )} 
        </View>
     )
}