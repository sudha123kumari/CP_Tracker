import * as React from 'react';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View,SafeAreaView,Image,ImageBackground } from 'react-native';
import Styles from '../../assets/cs/Styles';

import HomePageScreen from '../screens/HomePageScreen';
import Owner from '../screens/OwnerScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faLocationArrow,faHeart } from '@fortawesome/free-solid-svg-icons';



function CustomDrawerContent(props) {
  const { navigate } = props.navigation;
  return (
    <DrawerContentScrollView {...props}>
       <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                height: 150,
                alignItems: "center",
                justifyContent: "center",
                marginBottom:80,
              }}
            >
              <ImageBackground
            blurRadius={0.5}
            style={Styles.imageBackground}
            resizeMode="contain"
            source={require("../../assets/images/logo1.jpeg")}
          ></ImageBackground>
            </View>
            <DrawerItemList {...props} />
            <View style = {Styles.lineStyle} />
            <DrawerItem
               label="Codeforces"
               labelStyle={{color:"#10414f"}}
               icon = {({focused, size}) => (
                    <FontAwesomeIcon icon={ faLocationArrow } size={30}  color={focused ? 'blue' : 'purple'} />                  
                 )}
                 onPress={() => navigate('Platform', { name: 'CodeForces' })}
           />
            <View style = {Styles.lineStyle} />
            <DrawerItem
               label="About"
               labelStyle={{color:"#10414f"}}
               icon = {({focused, size}) => (
                <FontAwesomeIcon icon={ faHeart} size={30}  color={focused ? 'pink' : 'red'} />             
                 )}
                 onPress={() => navigate('Owner')}
        v  />
          </SafeAreaView>
      
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
          opacity:1,
        },
        // drawerInactiveBackgroundColor:"blue",
        // drawerActiveTintColor:"#ecea9f",
        // drawerInactiveTintColor:"#10414f",
        drawerType:'front',
       
      }}
    >
      <Drawer.Screen name="Home" component={HomePageScreen}  options={{ headerShown: true,
      title:"CP Tracker", 
      headerTintColor:'white',
      headerStyle:{
        backgroundColor:"#273238",
      },
      drawerIcon: ({focused, size}) => (
        <FontAwesomeIcon icon={ faLocationArrow } size={30}  color={focused ? 'blue' : 'purple'} />             
     ),
      
    }}
       />  
    </Drawer.Navigator>
  );
}

export default function DrawerNavigationHandler() {
  return (
    <MyDrawer /> 
  );
}


// export default function HomePageScreen(){
//     return (<Text>hello</Text>);
// }
