import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Plus...

//Screens :
import HomeScreen from '../HomeScreen/HomeScreen';
import Complain from '../ComplainScreen/ComplainScreen';
import Suggestion from '../SuggestionScreen/SuggestionScreen'
import SuggestionList from '../SuggestionList/SuggestionList'
import OptionScreen from '../OptionScreen/OptionScreen';

// Font Awesome Icons...
import { FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons'
import { useRef } from 'react';
const Tab = createBottomTabNavigator();

// Hiding Tab Names...


export default function Tabe({focused, icon}) {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    
<NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        },
      }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen
        name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 15,
            }}>
              <FontAwesome5
                name="home"
                size={25}
                color={focused ? 'turquoise' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"SuggestionList"} component={SuggestionList} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 15
            }}>
              <AntDesign
                name="addfolder"
                size={25}
                color={focused ? 'turquoise' : 'gray'}
              ></AntDesign>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={"Suggestion"} component={Suggestion} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'turquoise',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
               <FontAwesome5
                name="truck"
                size={25}
                color={focused ? 'turquoise' : 'gray'}
              ></FontAwesome5>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Option"} component={OptionScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 15
            }}>
              <AntDesign
                name="pluscircle"
                size={25}
                color={focused ? 'turquoise' : 'gray'}
              ></AntDesign>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Complain"} component={Complain} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 15
            }}>
              <FontAwesome
                name="user"
                size={25}
                color={focused ? 'turquoise' : 'gray'}
              ></FontAwesome>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 25,
        height: 2,
        backgroundColor: 'turquoise',
        position: 'absolute',
        bottom: 48,
        // Horizontal Padding = 20...
        right: 30,
        left: 17,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
  </NavigationContainer>
      
  );

}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 10

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});