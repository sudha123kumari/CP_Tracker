import 'react-native-gesture-handler';
import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Alert
} from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Styles from '../../assets/cs/Styles';
export default class Owner extends Component {
  url ='https://github.com/sudha123kumari/CP_Tracker';
  handlePress = (async () => {
      const supported = await Linking.canOpenURL(this.url);
      if (supported) {
        await Linking.openURL(this.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${this.url}`);
      }
    });  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#141420" }}>
        <KeyboardAvoidingScrollView>
           <View style={[Styles.card,Styles.flexColumn,{marginTop:50}]}>
              <Text style={Styles.ownerHeader}>APP Version 1.0.0</Text>
              <Text style={Styles.ownerSubHeader}>Built By</Text>
              <View style={[Styles.ownerView,Styles.flexColumn]}>
                 <Text style={Styles.text10}>Tushar Singh</Text>
                 <Text style={Styles.text10}>Sudha Kumari</Text>
              </View>
              <TouchableOpacity style={[Styles.btn2,Styles.btn3]} onPress={()=>{this.handlePress();}}>
                  <Text style={[Styles.btn3Text]}>View Source Code</Text>
              </TouchableOpacity>  
           </View>
        </KeyboardAvoidingScrollView>
      </SafeAreaView>
    );
  }
}