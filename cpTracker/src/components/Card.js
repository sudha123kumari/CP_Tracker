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
    
    return (   <View style={[Styles.card,Styles.flexRow]}>
                 <View style={[Styles.cardColumn,Styles.flexColumn,Styles.cardColumnLeft]}>
                     <View style={{color:'blue',}}>
                       <ImageBackground
                        blurRadius={0.5}
                        style={Styles.cardImageBackground}
                        borderRadius={50}
                        resizeMode="contain"
                        
                        source={this.props.data.imageAddress}
                        ></ImageBackground>
                     </View>
                 </View>
                 <View style={[Styles.cardColumn,Styles.flexColumn,Styles.cardColumnRight]}>
                     <View style={[Styles.cardColumn]}>
                       <Text style={[Styles.textName]}>
                         {this.props.data.title}
                       </Text>
                     </View>
                     <View style={[Styles.cardColumn]}>
                         <TouchableOpacity style={[Styles.btn1]}
                           onPress={() => navigate('Platform', { data: this.props.data })}
                        >
                          <Text style={[Styles.btnText,{paddingHorizontal:35}]}>VISIT</Text>
                        </TouchableOpacity>
                      </View>
                 </View>
               </View>
          
             );
  }
}

