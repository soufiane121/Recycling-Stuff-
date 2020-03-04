import React, { useEffect } from 'react'
import {View, Text, StyleSheet, AsyncStorage, Button} from 'react-native'
// import { Video } from 'expo-av';
import {connect} from 'react-redux'
import Login from './Login';
import SignUp from './SignUp';
import URL from './Url'


const LogSignParent =(props)=>{
  
const handleSignUp=()=>{
 fetch(`${URL}/users`, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        first_name: props.first_name,
        last_name: props.last_name,
        user_name: props.user_name,
        password_digest: props.password
    })
 })
  .then(resp=> resp.json())
  .then(data=> {
        props.handleCurrentUser(data)
        props.handleCurrentUserId(data.user.id)
        saveDataToPhone(data.user.id)
        props.navigation.replace("Home")
    })
    .catch(function(error) {
        alert("Something went wrong");
        console.log(error);
      })
}


const handlLogIn=()=>{
    fetch(`${URL}/login`,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        user_name: props.user_name,
        password_digest: props.password
    })
    })
  .then(resp=> resp.json())
  .then(data=> {
      console.log("data after log in", data.hasOwnProperty("errors"));
      if (!data.hasOwnProperty("errors")) {
        props.handleCurrentUser(data)
        props.handleCurrentUserId(data.user.id)
        saveDataToPhone(data.user.id)
        props.navigation.replace("Home")

      }else {
          alert(data.errors)
      }
       
    })
    .catch(function(error) {
        alert("Something went wrong");
        console.log(error);
      })
}

useEffect(()=>{
  fetchAutoLogin()
  props.navigation.replace("Home")

},[props.handleCurrentUserId])

const fetchAutoLogin = async () => {
  try {
     value = await AsyncStorage.getItem('user_id');
     console.log('value of localstorage', value);
     
    if (value !== null) {
      fetch(`${URL}/autologin`,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': value
        }
      })
      .then(resp=> resp.json())
      .then(data=> {
        props.handleCurrentUser(data)
        props.handleCurrentUserId(data.user.id)
      })
    }
  } catch (error) {
    alert("dont know yet")
    console.log(error);
  }
}

const saveDataToPhone=(id)=>{
    let num  = id
    let str  = num.toString()
    AsyncStorage.setItem("user_id", str)
}

showData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_id');
      if (value !== null) {
        alert(value)
      } else {
          alert("nothing")
      }
    } catch (error) {
      alert('nothing in storage')
    }
  };

    return(
      
        <View style={styles.container}>
            { props.loginDisplay !== true 
            ?
            <Login handlLogIn={handlLogIn}/>
            :
            <SignUp handleSubmit={handleSignUp}/>
            }
        </View>
        
    )
}

const styles= StyleSheet.create({
    vid:{
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

const mstp=(state)=>{
  return {
    first_name: state.first_name,
    last_name: state.last_name,
    user_name: state.user_name,
    password: state.password,
    loginDisplay: state.loginDisplay,
    currentUser: state.currentUser,
    currentUserId: state.currentUserId
       }
}
const mdtp=(dispatch)=>{
 return{
     handleCurrentUser:(e)=>{
         dispatch({
             type: 'new',
             payload: {currentUser: e}
         })
        },
    handleCurrentUserId: (e)=>{
      dispatch({
        type: 'currentUserId',
        payload: {currentUserId: e}
    })
    }
 }
}
export default connect(mstp, mdtp)(LogSignParent);