import React from 'react'
import {View, Text, StyleSheet, AsyncStorage, Button} from 'react-native'
import { Video } from 'expo-av';
import {connect} from 'react-redux'
import Login from './Login';
import SignUp from './SignUp';


const URL = 'http://0fe3d680.ngrok.io'
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
        saveDataToPhone(data.user.id)
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
        saveDataToPhone(data.user.id)
      }else {
          alert(data.errors)
      }
       
    })
    .catch(function(error) {
        alert("Something went wrong");
        console.log(error);
      })
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
        <View>
            { props.loginDisplay !== true 
            ?
            <Login handlLogIn={handlLogIn}/>
            :
            <SignUp handleSubmit={handleSignUp}/>
            }
        </View>
        // <SignUp />
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
    }
})

const mstp=(state)=>{
  return {
    first_name: state.first_name,
    last_name: state.last_name,
    user_name: state.user_name,
    password: state.password,
    loginDisplay: state.loginDisplay
       }
}
const mdtp=(dispatch)=>{
 return{
     handleCurrentUser:(e)=>{
         console.log(e);
         
        //  dispatch({
        //      type: 'new',
        //      payload: {currentUser: e}
        //  })
        },
 
 }
}
export default connect(mstp, mdtp)(LogSignParent);