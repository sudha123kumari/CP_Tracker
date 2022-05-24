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
import moment from 'moment';
import Styles from '../../assets/cs/Styles';
export default class DetailCard extends Component {
    state={
      name:this.props.data.name,
      url:this.props.data.url,
      startDate:moment.utc(moment.utc(moment.utc().format(this.props.data.start_time)).toDate()).format("MMM Do YY"),
      endDate:moment.utc(moment.utc(moment.utc().format(this.props.data.end_time)).toDate()).format("MMM Do YY"),
      startTime:moment.utc(moment.utc(moment.utc().format(this.props.data.start_time)).toDate()).format("LT"),
      endTime:moment.utc(moment.utc(moment.utc().format(this.props.data.end_time)).toDate()).format("LT"),
      duration:Math.floor(parseInt(this.props.data.duration)/3600),
      withinAday:this.props.data.in_24_hours,
      countDownTime: moment.utc(moment.utc().format(this.props.data.start_time)).toDate().getTime(),
      countDownDisplay:'',
      showRemind:false,
    }
  
    componentDidMount=()=>{
      var eventTime= this.state.countDownTime; 
      var currentTime =  moment.utc().toDate().getTime(); 
      var diffTime = eventTime - currentTime;
     if(diffTime>0){
       this.setState({showRemind:true});
     }
      var duration = moment.duration(diffTime);
      const interval = setInterval(()=>{
        duration = moment.duration(duration -1000, 'milliseconds');
        var year= duration.years();
        var months = duration.months();
        var days = duration.days();
        var hours = duration.hours();
        var minutes = duration.minutes();
        var seconds = duration.seconds();
        if(year>0){
         this.setState({
           countDownDisplay: `${ duration.years()}Y : ${duration.months()}M : ${ duration.days()}D : ${duration.hours() }H : ${duration.minutes()}Min : ${ duration.seconds()}S`
          })
        }
        else if(months>0){
         this.setState({
           countDownDisplay: `${duration.months()}M : ${ duration.days()}D : ${duration.hours() }H : ${duration.minutes()}Min : ${ duration.seconds()}S`
          })
        }
        else if(days>0){
         this.setState({
           countDownDisplay: `${ duration.days()}D : ${duration.hours() }H : ${duration.minutes()}Min : ${ duration.seconds()}S`
          })
        }
        else if(hours>0){
         this.setState({
           countDownDisplay: `${duration.hours() }H : ${duration.minutes()}Min : ${ duration.seconds()}S`
          })
        }
        else if(minutes>0){
         this.setState({
           countDownDisplay: `${duration.minutes()}Min : ${ duration.seconds()}S`
          })
        }
        else if(seconds>0){
         this.setState({
           countDownDisplay: `${ duration.seconds()}S`
          })
        }
        else{
         this.setState({
           countDownDisplay: 'In Progess'
          })
        }
      
      },1000);
     return () => clearInterval(interval);
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
               <Text style={[Styles.contentText]}>{this.state.countDownDisplay}</Text>
           </View>
           <View style={[Styles.contentView]}>
               <Text style={[Styles.contentText,Styles.contentBoldText]}>Status</Text>
               <Text style={[Styles.contentText]}>{this.props.status}</Text>
           </View>
           {this.state.showRemind &&    <TouchableOpacity  style={[Styles.btn2,{backgroundColor:'#336bff',marginTop:20}]} onPress={()=>{this.addReminder()}}>
              <Text style={[Styles.btn2Text]}>REMIND ME</Text>
           </TouchableOpacity> }
        
           <TouchableOpacity  style={Styles.btn2} onPress={()=>{this.handlePress()}}>
              <Text style={[Styles.btn2Text]}>VISIT</Text>
           </TouchableOpacity>
        </View>
             );
  }
}

