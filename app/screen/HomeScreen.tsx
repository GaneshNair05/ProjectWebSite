import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginPage from './LoginPage'
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
    navigation : NavigationProp<any,any>;

}
const HomeScreen = ({navigation }:RouterProps) => {
   
  return (
    <View >
      <Image style={styles.Image} source={require('./../../assets/images/e-commerce.png')}/>
      <Text style={styles.text}>Shopping Site</Text>
      <Text style={styles.text1}>A Full Stack Site for E-commerce where you can buy items of your choice</Text>
      
      <Pressable onPress={() => navigation.navigate('Login')} style = {styles.button}><Text>Get Started</Text></Pressable>
      
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        flex:1,
        justifyContent:'center',
        
    },
    text:{
        
        fontSize:30,
        padding:10,
        marginTop:30,
        textAlign:'center',
        color:'#3f3737'
    },
    text1:{
       fontSize:20,
       padding:8,
       marginTop:10,
       textAlign:'center',
       color:"#909d9f"
    },
    Image:{
        height:420,
        width:360,
    },
    button:{
        
        marginBottom:30,
        alignItems:'center',
        padding:10,
        marginTop:30,
        backgroundColor:'#428fed',
        borderColor:'#004ca8',
        borderRadius:20,
        borderWidth:1,
        width:250,
        left:50,
        
    }
})