import React from 'react'
import store from './Redux/store'
import {Provider} from 'react-redux'

import { StyleSheet, Button, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import LogSignParent from './Auth/LogSignParent'
import First from './Components/First'
import Profile from './Components/Profile';
import Setting from './Components/Setting';
import LogOut from './Auth/LogOut';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

 const App= () => {

  const Main=()=>{
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="main" children={FullStack}/>
      </Stack.Navigator>
    )
  }

const FullStack=({navigation})=> {
  return (
  <Stack.Navigator>
      <Stack.Screen  screenOptions={{
        headerShown: false
      }} name="Athu" component={LogSignParent} 
      options={{ title: 'Registration' }}
      />
      <Stack.Screen name="Home" children={DrawerComp} 
          options={({ navigation }) => ({ 
            headerLeft: () => (
                  <Button
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    title="Info"
                    color="red"
                  />
                ),
          })}
      />  
  </Stack.Navigator>
  )
}

const DrawerComp=(props)=>{
  return(
  <Drawer.Navigator>
    <Drawer.Screen name='profile' component={Profile}/>
    <Drawer.Screen name='setting' component={Setting}/>
    <Drawer.Screen name="logout" component={LogOut}
    options={
      <Button onPress={() => console.log(props)   }   />
    }
    />
  </Drawer.Navigator>
  )
}

  return (
    <Provider store={store}>
      <NavigationContainer  >
      {Main()}
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
//       />
//     </DrawerContentScrollView>
//   );
// }