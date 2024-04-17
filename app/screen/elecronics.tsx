import axios from "axios";
import { useEffect, useState } from "react";
import { View, TouchableOpacity, SafeAreaView, ActivityIndicator, FlatList,Text,StyleSheet,Image, Pressable } from "react-native";

import { NavigationProp } from '@react-navigation/native';
interface RouterProps{
    navigation:NavigationProp<any,any>

}
const Categories = ({navigation }:RouterProps) => {
     
    const [category,Setcategory] = useState({})
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true);
      axios.get("https://fakestoreapi.com/products/category/electronics").then( res=>{
        Setcategory(res.data);
      }).catch(e => console.log(e))
       .finally(()=> setLoading(false))
    }, [])
    const render = ({item}) =>(
      
    <View style = {styles.wrapper}>
    
    <View>
      <Image source = {{uri:item.image}} style={styles.image} resizeMode='contain'/>
    </View>
    <View >
    
    <Text style={styles.Text}>
      {item.title}
    </Text>
    <Text style={styles.Text1}>
      {'$'+item.price}
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate('hello')} style={styles.pressable}><Text>Buy Now</Text></TouchableOpacity>
    </View>
    
    </View>
   
  
    )
    return (
      <SafeAreaView >
        
        {loading ?(
          <View >
            <ActivityIndicator size={'large'} color={'#000000'}/>
          </View>
        ):(null )}
        <FlatList data = {category}keyExtractor={element => element} renderItem={render}/>
        
      </SafeAreaView>
    )
  }
  
  export default Categories
  
  
  const styles = StyleSheet.create({
     wrapper:{
        flexDirection:'row',
        borderWidth:2,
        borderRadius:20,
        
     },
     image:{
        flex:1,
        width:200,
        height:200,
        objectFit:'contain',  
     },
     Text:{
        marginTop:10,
        objectFit:'contain',
        top:30,
     },
     Text1:{
        marginTop:10,
        top:50,
     },
     pressable:{
        padding:10,
        borderRadius:20,
        top:80,
        backgroundColor:'#428fed',
        alignContent:'center'
     }
   
    })
   