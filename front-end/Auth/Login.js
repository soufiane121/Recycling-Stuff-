import React from 'react'
import {View, KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {connect} from 'react-redux'


const Login =(props)=>{

return(
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset="8" style={styles.all}>
        <TextInput style={styles.inpt} autoCapitalize = 'none' placeholder="User name" value={props.user_name} onChange={props.handleUserName}/>
        <TextInput style={styles.inpt} autoCapitalize = 'none' secureTextEntry placeholder="Password" value={props.password} onChange={props.handlePass}/>
        <TouchableOpacity style={styles.btn} onPress={props.handlLogIn}>
            <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <Text>You Don't have an account</Text>
        <TouchableOpacity onPress={props.handleDisplay}>
            <Text>Sign up</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
        
)
}
 const styles = StyleSheet.create({
     all:{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
             },
    inpt:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 23,
        margin: 20,
        width: 300,
    },
    btn:{
        backgroundColor: 'skyblue',
        width: 300,
        height: 30,
        borderRadius: 10
    },
    text:{
        alignSelf: 'center',
        marginTop: 4,
    }
 })

const mapStateToProps=(state)=>{
return{
    currentUser: state.currentUser,
    loginInput: state.loginInput,
    loginInputS: state.loginInputS
}
}


const mapDispatchToProps=(dispatch)=>{
    
return {
    handleUserName:(e)=>{
        dispatch({
            type: "user_name",
            payload: {user_name: e.nativeEvent.text}
        })
    },
    handlePass:(e)=>{
        dispatch({
            type: "password",
            payload: {password: e.nativeEvent.text}
        })
    },
    handleDisplay:()=>{
        dispatch({type: 'loginDisplay'})
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);