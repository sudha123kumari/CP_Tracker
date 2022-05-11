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
  Linking,
  Alert,
} from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import moment from 'moment';
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import Styles from '../../assets/cs/Styles';
const device = Dimensions.get("window");
export default class DetailCard extends Component {
    state={
      name:this.props.data.name,
      url:this.props.data.url,
      startDate:moment.utc(moment.utc(moment.utc().format(this.props.data.start_time)).toDate()).format("MMM Do YY"),
      endDate:moment.utc(moment.utc(moment.utc().format(this.props.data.end_time)).toDate()).format("MMM Do YY"),
      startTime:moment.utc(moment.utc(moment.utc().format(this.props.data.start_time)).toDate()).format("LT"),
      endTime:moment.utc(moment.utc(moment.utc().format(this.props.data.end_time)).toDate()).format("LT"),
      duration:parseInt(this.props.data.duration)/3600,
      countDown:'',
      withinAday:this.props.data.in_24_hours,
    }
  
  
    handlePress = (async () => {
      const supported = await Linking.canOpenURL(this.state.url);
      if (supported) {
        await Linking.openURL(this.state.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${this.state.url}`);
      }
    });  
  render() {
    const { navigate } = this.props.navigation;

    return ( 
      <View style={[Styles.card,Styles.flexColumn,Styles.DetailCardContainer,{backgroundColor:this.props.color}]}>
           <Text style={Styles.contentHeader}>{this.state.name}</Text>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>Start Date:</Text>
               <Text style={[Styles.contentText]}>{this.state.startDate}</Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>Start Time:</Text>
               <Text style={[Styles.contentText]}>{this.state.startTime}</Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>End Date:</Text>
               <Text style={[Styles.contentText]}>{this.state.endDate}</Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>End Time:</Text>
               <Text style={[Styles.contentText]}>{this.state.endTime}</Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>Starts:</Text>
               <Text style={[Styles.contentText]}>{this.state.startTime} </Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>Duration:</Text>
               <Text style={[Styles.contentText]}>{this.state.duration} hour </Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>CountDown</Text>
               <Text style={[Styles.contentText]}>{this.state.countDown}</Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>Status</Text>
               <Text style={[Styles.contentText]}>{this.props.status}</Text>
           </View>
 
           <TouchableOpacity  style={Styles.btn2} onPress={()=>{this.handlePress()}}>
              <Text style={[Styles.btn2Text]}>VISIT</Text>
           </TouchableOpacity>
          
        </View>
           
          
             );
  }
}

