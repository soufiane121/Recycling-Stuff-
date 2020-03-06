import React from "react";
import { ScrollView, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import CategoriesList from '../Components/CategoriesList'
import URL from '../Auth/Url'
import Url from "../Auth/Url";

let {Windowheight, width} = Dimensions.get('window')

class ScrollImage extends React.Component {

 render(){

    return (
        <View style={{height:Windowheight, width:Windowheight }}>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.box}> 
        <Image style={styles.image} source={{uri: CategoriesList[0].image, width: 110, height: 110 }}/>
        <Text style={styles.txt}>{CategoriesList[0].name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={{uri: CategoriesList[1].image, width: 110, height: 110 }}/>
        <Text style={styles.txt}>{CategoriesList[1].name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={{uri: CategoriesList[2].image, width: 110, height: 110 }}/>
        <Text style={styles.txt}>{CategoriesList[2].name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={{uri: CategoriesList[3].image, width: 110, height: 110 }}/>
        <Text style={styles.txt}>{CategoriesList[3].name}</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>
    )
}
}

const styles=StyleSheet.create({
    image: {
        borderRadius:20,
        margin: 10
    },
    box:{
        borderColor: 'red',
        // borderWidth: 0.172,
        shadowOpacity: 0.2,
        
    },
    txt:{
        alignSelf: 'center',
        fontSize: 14,
    }
})


export default ScrollImage