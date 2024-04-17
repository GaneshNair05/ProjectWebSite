import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const terms = () => {
  return (
    <View>
      <Text style= {styles.press}>terms</Text>
    </View>
  )
}

export default terms

const styles = StyleSheet.create({
    press:{
        flex:1
    }
})