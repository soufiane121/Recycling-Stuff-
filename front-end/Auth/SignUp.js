import React from 'react'
import {connect} from 'react-redux'
import {KeyboardAvoidingView, Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native'
import DismissKeyboardView from '../Components/DismissKeyboardView'


const SignUp =(props)=>{
    
    const handledismis=()=>{
        Keyboard.dismiss()
    }
    
return(
    <DismissKeyboardView>
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset="3" style={styles.cont} >
        <Text style={styles.titre}>Register</Text>
        <TextInput style={styles.inpt} autoCapitalize = 'none' placeholder="First Name" value={props.first_name} onChange={props.handleFirstName}/>
        <TextInput style={styles.inpt} autoCapitalize = 'none' placeholder="Last Name" value={props.last_name} onChange={props.handleLastName}/>
        <TextInput style={styles.inpt}  autoCapitalize = 'none'placeholder="User Name" value={props.user_name} onChange={props.handleUserName}/>
        <TextInput style={styles.inpt} autoCapitalize = 'none' secureTextEntry placeholder="password" value={props.password} onChange={props.handlePass}/>
        <TouchableOpacity style={styles.btn} onPress={props.handleSubmit}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <Text >You Do have an Account ?</Text>
            <TouchableOpacity onPress={props.handleDisplay}>
                <Text style={styles.logn}>Log in</Text>
            </TouchableOpacity>
    </KeyboardAvoidingView>
    </DismissKeyboardView>
)
}
const styles= StyleSheet.create({
    cont:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inpt:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 23,
        margin: 20,
        width: 300,
    },
    btn: {
        marginLeft: 20,
        width:300,
        backgroundColor: 'skyblue',
        borderRadius: 10

    },
    text:{
        padding: 4,
        alignSelf: 'center'
    },
    texting:{
        flexDirection: 'row',
        // flex: 1
    },
    titre: {
        fontSize: 30,
        fontWeight: '600'
    },
    logn:{
        color: '#0c7b93'
    }
})

const mps=(state)=>{
return {
 first_name: state.first_name,
 last_name: state.last_name,
 user_name: state.user_name,
 password: state.password,
 loginDisplay: state.loginDisplay
}
}

const mpss=(dispatch)=>{
return {
    handleFirstName: (e)=>{
        dispatch({
            type: "first_name",
            payload: {first_name: e.nativeEvent.text}
        })
    },
    handleLastName:(e)=>{
        dispatch({
            type: "last_name",
            payload: {last_name: e.nativeEvent.text}
        })
    },
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
export default connect(mps,mpss)(SignUp);