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
} from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import Styles from '../../assets/cs/Styles';
import Card from '../components/Card';
const device = Dimensions.get("window");
export default class LandingScreen extends Component {
  state={
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#141420" }}>
        <KeyboardAvoidingScrollView>
             {/* <View style={Styles.layout}> */}
               <Card name='CODEFORCES' navigation={this.props.navigation} imgSrc='../../assets/images/logo1.jpeg' />
               <Card name='CODEFORCES' navigation={this.props.navigation} imgSrc='../../assets/images/logo1.jpeg' />
               <Card name='CODEFORCES' navigation={this.props.navigation} imgSrc='../../assets/images/logo1.jpeg' />
               <Card name='CODEFORCES' navigation={this.props.navigation} imgSrc='../../assets/images/logo1.jpeg' />
               <Card name='CODEFORCES' navigation={this.props.navigation} imgSrc='../../assets/images/logo1.jpeg' />
            
             {/* </View> */}
        </KeyboardAvoidingScrollView>
      </SafeAreaView>
    );
  }
}

