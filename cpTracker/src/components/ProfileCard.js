import 'react-native-gesture-handler';
import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Styles from '../../assets/cs/Styles';
export default class Card extends Component {
  state={
 
  }
  render() {
    const { navigate } = this.props.navigation;
    
    return (  
         <View style={[Styles.card,Styles.flexColumn,{paddingVertical:30}]}>
             <Text style={[Styles.textName]}>
                         {this.props.data.title}
            </Text>
            <Text style={[Styles.textName]}>
                        Start Time: {this.props.data.title}
            </Text>
            <View style={{display:'flex',flexDirection:'row', padding:10,paddingTop:20}}>
            <TouchableOpacity style={[Styles.btn1,{marginHorizontal:10}]}
                           onPress={() => navigate('Platform', { data: this.props.data })}
                        >
                          <Text style={[Styles.btnText,{paddingHorizontal:35}]}>VISIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.btn1,{marginHorizontal:10,backgroundColor:"#CE1C1C"}]}
                           onPress={() => navigate('Platform', { data: this.props.data })}
                        >
                          <Text style={[Styles.btnText,{paddingHorizontal:35}]}>REMOVE</Text>
                        </TouchableOpacity>
            </View>
                      
              
        </View>
          
             );
  }
}

