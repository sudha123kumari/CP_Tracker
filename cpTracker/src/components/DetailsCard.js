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
const device = Dimensions.get("window");
export default class DetailCard extends Component {
  state={
  }
  render() {
    const { navigate } = this.props.navigation;

    return (   <View style={[Styles.card,Styles.flexColumn,Styles.DetailCardContainer,{backgroundColor:this.props.color}]}>
                  <Text style={Styles.contentHeader}>Codeforces Round #600(Div. 2)</Text>
                  <View style={[Styles.contentView]}>
                      <Text style={[Styles.contentText,Styles.contentBoldText]}>Start Date:</Text>
                      <Text style={[Styles.contentText]}>Tues dec </Text>
                  </View>
                  <View style={[Styles.contentView]}>
                      <Text style={[Styles.contentText,Styles.contentBoldText]}>End Date:</Text>
                      <Text style={[Styles.contentText]}>Tues dec </Text>
                  </View>
                  <View style={[Styles.contentView]}>
                      <Text style={[Styles.contentText,Styles.contentBoldText]}>Starts:</Text>
                      <Text style={[Styles.contentText]}>Tues dec </Text>
                  </View>
                  <View style={[Styles.contentView]}>
                      <Text style={[Styles.contentText,Styles.contentBoldText]}>Duration:</Text>
                      <Text style={[Styles.contentText]}>Tues dec </Text>
                  </View>
                  <View style={[Styles.contentView]}>
                      <Text style={[Styles.contentText,Styles.contentBoldText]}>CountDown</Text>
                      <Text style={[Styles.contentText]}>Tues dec </Text>
                  </View>
                  <View style={[Styles.contentView]}>
                      <Text style={[Styles.contentText,Styles.contentBoldText]}>Status</Text>
                      <Text style={[Styles.contentText]}>Tues dec </Text>
                  </View>

                  <TouchableOpacity  style={Styles.btn2}>
                     <Text style={[Styles.btn2Text]}>VISIT</Text>
                  </TouchableOpacity>
                 
               </View>
          
             );
  }
}

