import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
interface RouterProps{
    navigation:NavigationProp<any,any>

}
const Categories = ({navigation }:RouterProps) => {
     
  return (
    <SafeAreaView style= {styles.root}>
      <TouchableOpacity onPress={()=>navigation.navigate('goto3')} style= {styles.pressable}><Text style={styles.text}>Men's Clothes</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('goto2')} style= {styles.pressable}><Text style={styles.text}>Electronic</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('goto')} style= {styles.pressable}><Text style={styles.text}>Jewelry</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('goto4')} style= {styles.pressable}><Text style={styles.text}>Women's Clothes</Text></TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default Categories


const styles = StyleSheet.create({
    root:{
      flex:1,
      padding:5,
     
   },
   
   pressable:{
       alignSelf:'center',
       padding:30,
       width:330,
       borderRadius:40,
       margin:40,
       backgroundColor:'#428fed'
   },
   container:{
     flex:1,
     bottom:30,
     left:20,
     alignItems:'center',
     justifyContent:'center'
   },
    image:{
       marginVertical:20,
       width:150,
       height:200,
       backgroundColor:'#fff'
    },
    title:{
      flex:1 
    },
    price:{
      flex:1,
      
    },
    wrapper:{
     flexDirection:'row',
     borderColor:'#fff',
     borderWidth:2,
     borderRadius:20,
     marginVertical:10,
     backgroundColor:'#fff'
    },
    press:{
      alignSelf:'center',
      right:75,
      top:50,
      padding:10,
      borderRadius:20,
      backgroundColor:'#428fed'
    },
    text:{
     textAlign:'center',
     fontSize:25,

    },
 
    
 })
 