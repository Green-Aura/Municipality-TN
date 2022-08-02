import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import {firebase} from './firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import ComplainScreen from './src/screens/ComplainScreen/ComplainScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen'
import Suggestion from './src/screens/SuggestionScreen/Suggestion.js'
import SuggestionList from './src/screens/SuggestionList/SuggestionList'

import Options from './src/screens/OptionsScreen/Options'

import Tabe from './src/screens/Tabe/Tabe'



import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}> 
      { user ? (
        <Stack.Screen name="Tabe"  >
        {props => <Tabe {...props} extraData={user} />}
        </Stack.Screen>
        ) : (
          <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
          )}
          <Stack.Screen name="Home" component={HomeScreen} />
          
          <Stack.Screen name="Complain" component={ComplainScreen} />
          <Stack.Screen name="SuggestionList" component={SuggestionList} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Suggestion" component={Suggestion} />
      </Stack.Navigator>
   
     
    </NavigationContainer>
  );
}