import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Plus...

//Screens :
import Home from '../HomeScreen/HomeScreen';
import Complain from '../ComplainScreen/ComplainScreen';
import Suggestion from '../SuggestionScreen/Suggestion'
import SuggestionList from '../SuggestionList/SuggestionList'
import Options from '../OptionsScreen/Options'
// Font Awesome Icons...
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import { useRef } from 'react';
const Tab = createBottomTabNavigator();

// Hiding Tab Names...


export default function Tabe() {
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
        name={"Home"} component={Home} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20,
            }}>
              <FontAwesome5
                name="home"
                size={20}
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
              top: 20
            }}>
              <AntDesign
                name="addfolder"
                size={20}
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

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
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
                <Image  style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Options"} component={Options} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <AntDesign
                name="pluscircle"
                size={24}
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
              top: 20
            }}>
              <AntDesign
                name="setting"
                size={24}
                color={focused ? 'turquoise' : 'gray'}
              ></AntDesign>
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
        height: 3,
        backgroundColor: 'turquoise',
        position: 'absolute',
        bottom: 98,
        // Horizontal Padding = 20...
        left: 50,
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
  width = width - 80

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>

    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
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