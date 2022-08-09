import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {firebase} from './firebase/config';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import ComplainScreen from './src/screens/ComplainScreen/ComplainScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import SuggesstionScreen from './src/screens/SuggestionScreen/Suggestion';
import SuggestionList from './src/screens/SuggestionList/SuggestionList';
import Tabe from './src/screens/Tabe/Tabe';

import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen'
import OptionScreen from './src/screens/OptionScreen/OptionScreen';



import { View,Text,StyleSheet,Image,Appearance,useColorScheme } from 'react-native';
import {decode, encode} from 'base-64'

import MapViewComponent from './src/screens/MapBoxScreen/MapView';

import styles from './src/screens/LoginScreen/styles';


import News from './src/screens/HomeScreen/News'
import Profile from './src/screens/ProfileScreen/Profile';
import Events from './src/screens/HomeScreen/Events'


if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();
const MyTheme = {
  ... DefaultTheme,
  colors:{
    ... DefaultTheme.colors,
    primary:'dodgerblue',
    background:'#ecfeff',
    text:'green',
  },
}
export default function App() {
  const scheme = useColorScheme()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }
  
  return (
    
    // <View style={theme == 'light '?styles.mainView:darkMode.mainView}>
    <NavigationContainer theme={scheme === 'dark'? DarkTheme : MyTheme}>
  
      <Stack.Navigator
      
        screenOptions={{
          headerShown: false,
        }}> 
      { user ? (
        <Stack.Screen name="Tabe"  >
        {props => <Tabe {...props} extraData={user} />}
        </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
          )}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Suggesstion" component={SuggesstionScreen} />
          <Stack.Screen name="Complain" component={ComplainScreen} />
          <Stack.Screen name="SuggestionList" component={SuggestionList} />
          <Stack.Screen name="Option" component={OptionScreen} />
          <Stack.Screen name="MapView" component={MapViewComponent} />
          <Stack.Screen name="Profileview" component={Profile}/>
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Events" component={Events} />
         
      </Stack.Navigator>
   
     
    </NavigationContainer>
    // </View>
  );
        }