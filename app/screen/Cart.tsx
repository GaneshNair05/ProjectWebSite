import { View, Text, Button, ActivityIndicator, FlatList,Image, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';
import axios from 'axios'
import List from './List';
import  {render} from './List';
import { SafeAreaView } from 'react-native-safe-area-context';
import details from './details';
import { usefavoriteContext } from './Context/CartContext';



const Cart = () => {
  const {favourites} =usefavoriteContext();
  alert(favourites.length)
    return(
      <SafeAreaView style= {styles.root}>
        {favourites.length >0?(
            <FlatList data = {favourites}keyExtractor={element => element.id} renderItem={render}/>
        ):(
            <View>
                <Text>hello</Text>
            </View>
        )}
          
      </SafeAreaView>
    );
  }
  
  export default Cart
  const styles = StyleSheet.create({
     root:{
       flex:1,
       padding:5,
       backgroundColor:'#000'
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
      marginVertical:5
     },
     pressable:{
       alignSelf:'center',
       right:155,
       top:80,
       padding:10,
       borderRadius:20,
       backgroundColor:'#428fed'
     }
     
  })
  