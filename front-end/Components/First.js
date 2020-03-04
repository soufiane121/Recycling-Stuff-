import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text, View, StyleSheet, Button} from 'react-native';
import Profile from './Profile'
import Setting from './Profile'


const First=({navigation})=>{

  const CustomDrawerContent=(props)=>{
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </DrawerContentScrollView>
    );
  }


  const Drawer = createDrawerNavigator();
return(
    <View style={styles.cont}>
    <Drawer.Navigator >
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
    </View>
)
}

const styles =StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})
export default First;