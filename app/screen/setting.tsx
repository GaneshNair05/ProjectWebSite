import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
interface RouterProps{
  navigation:NavigationProp<any,any>

}
const setting = ({navigation}):RouterProp => {
  return (
    <SafeAreaView style= {styles.root}>
    <TouchableOpacity onPress={()=>navigation.navigate('terms')} style= {styles.pressable}><Text style={styles.text}>Terms and Conditions</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('privacy')} style= {styles.pressable}><Text style={styles.text}>Privacy Policy</Text></TouchableOpacity>
    
    
  </SafeAreaView>
  )
}

export default setting



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
 