import React from 'react'
import {AsyncStorage, Button} from 'react-native';
import {Text} from 'react-native'

 const LogOut= (props)=> {
     
    const SignOut = async () => {
        try {
             await AsyncStorage.removeItem('user_id');
             props.navigation.replace('Athu')
           } catch (error) {
             alert('nothing in storage')
          }
    }
     return (
         <Button title="Sign Out" onPress={()=>{SignOut()}} />
     )
 }

 export default LogOut;
