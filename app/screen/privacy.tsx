import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const privacy = () => {
  return (
    <View>
      <Text style= {styles.press}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis nulla veniam ad et at ratione, eos fugiat dignissimos deserunt provident suscipit aliquid inventore magnam rem perspiciatis id magni rerum.</Text>
    </View>
  )
}

export default privacy

const styles = StyleSheet.create({
    press:{
        flex:1
    }
})