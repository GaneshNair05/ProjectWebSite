import { View, Text, Button, ActivityIndicator, FlatList,Image, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';




interface RouterProps{
    navigation:NavigationProp<any,any>

}
const List = ({navigation }:RouterProps) => {
   
  const [products,Setproducts] = useState({})
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then( res=>{
      Setproducts(res.data);
    }).catch(e => console.log(e))
     .finally(()=> setLoading(false))
  }, [])
  const render = ({item}) =>(
    
    <View style = {styles.wrapper}>
       
      <View>
        <Image source = {{uri:item.image}} style={styles.image} resizeMode='contain'/>
      </View>
      <View style= {styles.container}>
      <Text style={styles.text}>
        {item.title}
      </Text>
      <Text style={styles.text}>
        {'$'+item.price}
      </Text>
      
      </View>
      <View style = {styles.press}>
      <TouchableOpacity onPress={() => navigation.navigate('hello')}><Text>Buy Now</Text></TouchableOpacity>
      
      </View>
     
    </View>
  )
  return(
    <SafeAreaView style= {styles.root}>
      <TouchableOpacity style={styles.press} onPress={() => FIREBASE_AUTH.signOut()}><Text>LogOut</Text></TouchableOpacity>
      <TouchableOpacity style={styles.press1} onPress={() => navigation.navigate('setting')}><Text>Setting</Text></TouchableOpacity>
      <TouchableOpacity style={styles.pressable} onPress={() => navigation.navigate('category')}><Text>Categories</Text></TouchableOpacity>
      {loading ?(
        <View style = {styles.container}>
          <ActivityIndicator size={'large'} color={'#000000'}/>
        </View>
      ):(null )}
      <FlatList data = {products}keyExtractor={element => element.id} renderItem={render}/>
      
    </SafeAreaView>
   
  );
}

export default List
const styles = StyleSheet.create({
   root:{
     flex:1,
     padding:5,
     backgroundColor:'#000'
  },
  pressable:{
      alignSelf:'center',
      padding:10,
      left:110,
      borderRadius:20,
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
     right:95,
     top:80,
     padding:10,
     borderRadius:20,
     backgroundColor:'#428fed'
   },
   press1:{
    alignSelf:'center',
    left:0,
    top:40,
    padding:10,
    borderRadius:20,
    backgroundColor:'#428fed'
  },
   text:{
    marginVertical:5
   },

   
})
