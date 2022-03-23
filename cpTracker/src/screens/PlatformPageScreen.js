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
import DetailCard from '../components/DetailsCard';
const device = Dimensions.get("window");

export default class PlatformPageScreen extends Component {
  state={
      color:'white',
  }
  helper=(hexColor)=>{
      this.setState({
          color:hexColor
      })
  }
  render() {
    return (    <SafeAreaView style={{ flex: 1, backgroundColor: "#141420", }}>
                   <KeyboardAvoidingScrollView>
                      <View style={Styles.flexRow}>
                          <TouchableOpacity style={[Styles.flexRow,Styles.timeHeader,Styles.futureHeader]}
                           onPress={()=>{ this.helper('#BAE08A');}}
                          >
                              <Text style={Styles.textName}>FUTURE</Text>
                          </TouchableOpacity>
                          <TouchableOpacity  style={[Styles.flexRow,Styles.timeHeader,Styles.pastHeader]}
                           onPress={()=>{ this.helper('#EC8686');}}
                            >
                              <Text style={Styles.textName}>PAST</Text>
                          </TouchableOpacity >
                          <TouchableOpacity  style={[Styles.flexRow,Styles.timeHeader,Styles.presentHeader]}
                           onPress={()=>{ this.helper('#53AFD6');}}
                          >
                              <Text style={Styles.textName}>LIVE</Text>
                          </TouchableOpacity >
                      </View>
                      <DetailCard navigation={this.props.navigation} color={this.state.color}/>
                    </KeyboardAvoidingScrollView>
                </SafeAreaView>
          
             );
  }
}

