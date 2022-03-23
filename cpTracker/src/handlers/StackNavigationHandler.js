import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageScreen from '../screens/HomePageScreen';
import DrawerNavigationHandler from "./DrawerNavigationHandler";
import PlatformPageScreen from "../screens/PlatformPageScreen";
import Card from '../components/Card';
import Owner from "../screens/OwnerScreen";

const Stack = createStackNavigator();
export default function StackNavigationHandler() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigationHandler}
          options={{
            headerShown: false,
          
          }}
        />

         <Stack.Screen
          name="Platform"
          component={PlatformPageScreen}
          options={ ({ route }) => ({ title: route.params.name,
            headerShown: true,
            headerTintColor:'white',
            headerStyle:{
            backgroundColor:"#273238",
            }
           })
          }
        />
        <Stack.Screen
          name="Owner"
          component={Owner}
          options={ ({ route }) => ({ title: 'CP Tracker',
            headerShown: true,
            headerTintColor:'white',
            headerStyle:{
            backgroundColor:"#273238",
            }
           })
          }
        /> 

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


