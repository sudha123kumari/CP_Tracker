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
  ActivityIndicator,
  FlatList,
  Linking,
  Alert
} from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import moment from 'moment';
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import Styles from '../../assets/cs/Styles';
import DetailCard from '../components/DetailsCard';
const device = Dimensions.get("window");
import axios from 'axios';
const baseUrl = 'https://kontests.net/api/v1';

export default class PlatformPageScreen extends Component {
  state={
      color:'white',
      loading:true,
      contests:[],
      type:'all',
  }
  helper=(hexColor,status)=>{
      this.setState({
          color:hexColor,
          type:status,
      })
  }
  componentDidMount = async()=>{
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/${this.props.route.params.data.name}`,
    }).then((response) => {
      // console.log(response.data);
      this.setState({
        contests:response.data
      })
      this.setState({loading:false});
    });
  }
  renderItem = ({ item }) => {
    var now = moment().format();
    var stime = moment.utc().format(item.start_time);
    var etime = moment.utc().format(item.end_time);
    // console.log(stime);
    // console.log(etime);
    // console.log(now); 
    var status="";
     if(now< stime){
     status="UPCOMING";
    }
    else if(now>= etime && now>stime)  {
      status="EXPIRED";
    }
    else {
     status="RUNNING";
    }
    // console.log(this.state.type)
    // console.log(status);
    // console.log(this.state.type===status);
    
    return (
      (this.state.type==='all' ||
      this.state.type === status) && <DetailCard navigation={this.props.navigation} type={this.state.type} status={status} color={this.state.color} data={item}/>    
    );
    
       
        
        
       
        };
  render() {
    return (    <SafeAreaView style={{ flex: 1, backgroundColor: "#141420", }}>
                  { this.state.loading ? 
                  <View style={Styles.center}>
                    <ActivityIndicator size='large' color="white" /> 
                  </View>
                  :
                    <KeyboardAvoidingScrollView>
                    <View style={Styles.flexRow}>
                        <TouchableOpacity style={[Styles.flexRow,Styles.timeHeader,Styles.futureHeader]}
                         onPress={()=>{ this.helper('#BAE08A','UPCOMING');}}
                        >
                            <Text style={Styles.textName}>FUTURE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={[Styles.flexRow,Styles.timeHeader,Styles.pastHeader]}
                         onPress={()=>{ this.helper('#EC8686','EXPIRED');}}
                          >
                            <Text style={Styles.textName}>PAST</Text>
                        </TouchableOpacity >
                        <TouchableOpacity  style={[Styles.flexRow,Styles.timeHeader,Styles.presentHeader]}
                         onPress={()=>{ this.helper('#53AFD6','RUNNING');}}
                        >
                            <Text style={Styles.textName}>LIVE</Text>
                        </TouchableOpacity >
                    </View>
                    <FlatList
                       data={this.state.contests}
                       renderItem={this.renderItem}
                       keyExtractor={item => item.title}
                       horizontal={false}
             />
           
                  </KeyboardAvoidingScrollView>
                   
                  }
                  
                 
                </SafeAreaView>
          
             );
  }
}

