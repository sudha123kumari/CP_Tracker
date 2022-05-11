import 'react-native-gesture-handler';
import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import Styles from '../../assets/cs/Styles';
import Card from '../components/Card';
const device = Dimensions.get("window");

export default class LandingScreen extends Component {
  state={
    DATA :[
       {
    id: '1',
    name: 'codeforces',
    title: 'CodeForces',
    imageAddress:require('../../assets/images/platformLogos/codeforce.jpg'),
  },
  {
    id: '2',
    name: 'codeforces_gym',
    title: 'CodeForces Gym',
    imageAddress:require('../../assets/images/platformLogos/codeforce.jpg'),

  },
  {
    id: '3',
    name: 'top_coder',
    title: 'Top Coder',
    imageAddress:require('../../assets/images/platformLogos/topcoder.jpg'),
  },
  {
    id: '4',
    name: 'at_coder',
    title: 'At Coder',
    imageAddress:require('../../assets/images/platformLogos/atcoder.png'),
  },
  {
    id: '5',
    name: 'code_chef',
    title: 'CodeChef',
    imageAddress:require('../../assets/images/platformLogos/cc.png'),
  },
  {
    id: '6',
    name: 'cs_academy',
    title: 'cs Academy',
    imageAddress:require('../../assets/images/platformLogos/csAcademy1.png'),
  },
  {
    id: '7',
    name: 'hacker_rank',
    title: 'HackerRank',
    imageAddress:require('../../assets/images/platformLogos/hackerrank.png'),
  },
  {
    id: '8',
    name: 'hacker_earth',
    title: 'HackerEarth',
    imageAddress:require('../../assets/images/platformLogos/HackerEarth.png'),
  },
  {
    id: '9',
    name: 'kick_start',
    title: 'Kick Start',
    imageAddress:require('../../assets/images/platformLogos/kickstart.jpg'),
  },
  {
    id: '10',
    name: 'leet_code',
    title: 'Leet Code',
    imageAddress:require('../../assets/images/platformLogos/leetcode.png'),
  }
],
  }
  renderItem = ({ item }) => (
    // <DrawerItem
    //        label={item.title}
    //        labelStyle={{color:"#10414f"}}
    //        icon = {({focused}) => (
    //             <FontAwesomeIcon icon={ faLocationArrow } size={30} style={{color:focused ? "blue" : "purple"}}  />                  
    //          )}
    //          onPress={() => navigate('Platform', { data: item})}
    //    /> 
       <Card data={item} navigation={this.props.navigation} />
);
// renderItem = ({ item }) => (
// <Item item={item} />
// );


  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#141420" }}>
        <KeyboardAvoidingScrollView>
             {/* <View style={Styles.layout}> */}
              
             <FlatList
              data={this.state.DATA}
               renderItem={this.renderItem}
               keyExtractor={item => item.id}
                horizontal={false}
             />
             {/* </View> */}
        </KeyboardAvoidingScrollView>
      </SafeAreaView>
    );
  }
}
