import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../firebase/config'

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


export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(true)

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
    
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '90%' }}
                keyboardShouldPersistTaps="always">
               <InnerContainer>
                <PageLogo source={require('../../../assets/baladia.png')} />
                <PageTitle>Municipality</PageTitle>
                <SubTitle>Account Signup</SubTitle>
                </InnerContainer>
                <MyTextInput
                    icon="person"
                    placeholder='Full Name'
                    placeholderTextColor={darkLight}
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
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
                <MyTextInput
                    icon="lock"
                    placeholderTextColor={darkLight}
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />
                <StyledButton
                    onPress={() => onRegisterPress()}>
                    <Buttontext>Create account</Buttontext>
                </StyledButton>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
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