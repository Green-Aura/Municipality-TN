import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Updateprofile = ({navigation}) => {
  return (
    <View>
      <TextInput placeholder='enter an email' />
 <TouchableOpacity><Text>back</Text></TouchableOpacity>
    </View>
  )
}

export default Updateprofile

const styles = StyleSheet.create({})