import React from 'react'
import {View, Text, StyleSheet, TextInput} from "react-native"
import {connect} from 'react-redux'


const Login =(props)=>{

return(
    <View>
        <Text>{props.currentUser}</Text>
    </View>
)
}

const mapStateToProps=(state)=>{
return{
    currentUser: state.currentUser
}
}

export default connect(mapStateToProps)(Login);