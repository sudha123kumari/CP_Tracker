import * as React from 'react';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View,SafeAreaView,Image,ImageBackground,FlatList } from 'react-native';
import Styles from '../../assets/cs/Styles';

import HomePageScreen from '../screens/HomePageScreen';
import Owner from '../screens/OwnerScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faLocationArrow,faHeart,faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { color } from 'react-native-reanimated';

const DATA = [
  {
    id: '1',
    name: 'codeforces',
    title: 'CodeForces',
    imageAddress:'cc.png',
  },
  {
    id: '2',
    name: 'codeforces_gym',
    title: 'CodeForces Gym',
    imageAddress:'codeforce.jpg',

  },
  {
    id: '3',
    name: 'top_coder',
    title: 'Top Coder',
    imageAddress:'topcoder.jpg',
  },
  {
    id: '4',
    name: 'at_coder',
    title: 'At Coder',
    imageAddress:'atcoder.png',
  },
  {
    id: '5',
    name: 'code_chef',
    title: 'CodeChef',
    imageAddress:'cc.png',
  },
  {
    id: '6',
    name: 'cs_academy',
    title: 'cs Academy',
    imageAddress:'csAcademy1.png',
  },
  {
    id: '7',
    name: 'hacker_rank',
    title: 'HackerRank',
    imageAddress:'hackerrank.png',
  },
  {
    id: '8',
    name: 'hacker_earth',
    title: 'HackerEarth',
    imageAddress:'HackerEarth.png',
  },
  {
    id: '9',
    name: 'kick_start',
    title: 'Kick Start',
    imageAddress:'kickstart.jpg',
  },
  {
    id: '10',
    name: 'leet_code',
    title: 'Leet Code',
    imageAddress:'leetcode.png',
  }
];

function CustomDrawerContent(props) {
  const Item = ({ item }) => (
        <DrawerItem
               label={item.title}
               labelStyle={{color:"#10414f"}}
               icon = {({focused}) => (
                    <FontAwesomeIcon icon={ faDotCircle } size={20} style={{color:focused ? "blue" : "purple"}}  />                  
                 )}
                 onPress={() => navigate('Platform', { data: item})}
           /> 
  );
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  
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
             <FlatList
              data={DATA}
               renderItem={renderItem}
               keyExtractor={item => item.id}
                horizontal={false}
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
