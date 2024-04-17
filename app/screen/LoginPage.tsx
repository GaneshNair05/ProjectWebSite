import { View, Text ,StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Pressable} from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import List from './List';

import { NavigationProp } from '@react-navigation/native';
interface RouterProps{
    navigation:NavigationProp<any,any>

}
const LoginPage = ({navigation }:RouterProps) => {
    const [email,SetEmail] = useState('');
    const [password,Setpassword] = useState('')
    const [loading,setLoading] = useState(false)
    const auth =  FIREBASE_AUTH;
    const signIn = async () =>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email,password)
            console.log(response)
           async() => navigation.navigate('Details') 
            alert("Login successful")
        }catch(error:any){
            console.log(error)
            alert('signin method' + error.message)
        }finally{
            setLoading(false)
        }
    }
    const SignUp = async () =>{
        setLoading(true)
        try{
            const response = await createUserWithEmailAndPassword(auth,email,password)
            console.log(response)
            alert("Creation successfull")
        }catch(error:any){
             console.log(error)
             alert('Sign up Failed' + error.message)
        }finally{
            setLoading(false)
        }
    }
  return (
    <View style = {styles.container}>
        <KeyboardAvoidingView behavior='padding'>
      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text)=>SetEmail(text)}/>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text)=>Setpassword(text)}/>
        {
            loading? <ActivityIndicator size='large' color="#0000ff"/>
            :<>
            <Pressable onPress={signIn} style = {styles.button}><Text>Login</Text></Pressable>
            <Pressable onPress={SignUp} style = {styles.button}><Text>Create Account</Text></Pressable>
            
            </>}
        </KeyboardAvoidingView>
    </View>
  );
}

export default LoginPage
const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'center',
        backgroundColor:'#2c332e',    
    },
    input:{
        marginVertical:3,
        marginBottom:30,
        marginHorizontal:25,
        height:50,
        borderColor:'#428fed',
        borderWidth:2,
        borderRadius:15,
        padding:10,
        backgroundColor:'#fff',
         
    },
    button:{
        marginBottom:30,
        marginHorizontal:25,
        alignItems:'center',
        padding:10,
        backgroundColor:'#428fed',
        borderColor:'#004ca8',
        borderRadius:20,
        borderWidth:2
    }
})