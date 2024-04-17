import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './app/screen/LoginPage';
import List from './app/screen/List';
import Categories from './app/screen/Categories'
import PaymentScreen from './app/screen/PaymentScreen';
import React, { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import HomeScreen from './app/screen/HomeScreen';
import Cart from './app/screen/Cart';
import StripeApp from "./app/screen/PaymentScreen";
import { StripeProvider } from "@stripe/stripe-react-native";
import jewelry from './app/screen/jewelry';
import electronics from './app/screen/elecronics'
import MenClothes from './app/screen/MenClothes'
import WomenClothes from './app/screen/WomenClothes'
import setting from './app/screen/setting';
import privacy from './app/screen/privacy';
import terms from './app/screen/terms';
 function Pay() {
  return (
    <StripeProvider publishableKey="pk_test_51P5COmSG9M21Fk2RfYHBu6wTUwzbOVY0PbBT5t29cyKGSaGqGYsOOczVyAFMOWRiyohjviYBH8Ng7fDdLcBwmn6n00kcUOiGfg">
      <StripeApp />
    </StripeProvider>
  );
}


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator()
function InsideLayout (){
  return(
    <InsideStack.Navigator>
       <InsideStack.Screen name ="List" component={List} options={{headerShown:false}}/>
       <InsideStack.Screen name ="hello" component={PaymentScreen} options={{headerShown:false}}/>
       <InsideStack.Screen name ="cart" component={Cart} options={{headerShown:false}}/>
       <InsideStack.Screen name ="category" component={Categories} options={{headerShown:false}}/>
       <InsideStack.Screen name ="goto" component={jewelry} options={{headerShown:false}}/>
       <InsideStack.Screen name ="goto2" component={electronics} options={{headerShown:false}}/>
       <InsideStack.Screen name ="goto3" component={MenClothes} options={{headerShown:false}}/>
       <InsideStack.Screen name ="goto4" component={WomenClothes} options={{headerShown:false}}/>
       <InsideStack.Screen name ="setting" component={setting} options={{headerShown:false}}/>
       <InsideStack.Screen name ="terms" component={terms} options={{headerShown:false}}/>
       <InsideStack.Screen name ="privacy" component={privacy} options={{headerShown:false}}/>
    </InsideStack.Navigator>
  )

}

export default function App() {
  const [user,setUser] = useState<User | null>(null);
  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user)=>{
      console.log('user',user)
      setUser(user)
    });
  },[]);
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home'>  
           {user? (
            <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
             
           ):(
            <><Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            </>
           )}
      </Stack.Navigator>
    </NavigationContainer>
  
    
  );
}




