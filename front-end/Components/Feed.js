import  React, {useEffect }from 'react'
import {connect} from 'react-redux'
import {Text, TextInput, View, TouchableOpacity, StyleSheet} from 'react-native'
import DismissKeyboardView from './DismissKeyboardView'
import { Ionicons } from '@expo/vector-icons';
import URL from '../Auth/Url'
import ScrollImage from './ScrollImages'

const Feed=(props)=>{

 useEffect(()=> {
    fetch(`${URL}/items`)
    .then(resp=> resp.json())
    .then(data=> console.log(data)
    )
 })
    return(
    <View > 
    <DismissKeyboardView  >
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} >
        <Ionicons name="md-search" size={28} color="grey" />
        </TouchableOpacity>
        <TextInput underlineColorAndroid="transparent" autoCapitalize = 'none' placeholder="Search" value={props.searchInput} onChange={props.handleSearchInput}/>
      </View >
      </DismissKeyboardView>
      <View >
         {/* {CategoriesList.map(ele=> <ScrollImage argument={ele} key={CategoriesList.length - Math.random()}/>)} */}
         <ScrollImage />
      </View>

    </View>
    )
}

const styles= StyleSheet.create({
header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
},
// inpt: {
//  flex:1
// },
icon: {
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    marginLeft: 1,
    alignItems: 'center'
}
})

const mapStateToProps=(state)=>{
    return{
        searchInput: state.searchInput,
    }
    }

const mapDispatchToProps=(dispatch)=>{     
    return {
        handleSearchInput:(e)=>{
            dispatch({
                type: "searchInput",
                payload: {searchInput: e.nativeEvent.text}
            })
            }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Feed)
