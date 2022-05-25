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
  FlatList,
} from "react-native";
import Styles from '../../assets/cs/Styles';
import { Input,Button } from 'react-native-elements';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class SignInScreen extends Component {
 state={
     email:'',
     loading:false,
     errorMailMessage:""
 }
//  onSubmit = async () => {
//     try {
//       const response = await axios({
//         method: 'POST',
//         // url: `http://${BASE_IP}:3001/loginUser`,
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         data: JSON.stringify({
//           email: this.state.email,
//         }),
//       })
//       if (response.data) {
//         if (response.data.successStatus) {
//           console.log(response.data)
//           AsyncStorage.setItem('email', response.data.email)
//           this.props.navigation.navigate('Home')
//         } else {
//           alert(response.data.message)
//         }
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }
onSubmit = async () => {
    try {
         await AsyncStorage.setItem('email', this.state.email)
         this.setState({email:""});
          this.props.navigation.navigate('Drawer')  
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#141420",paddingTop:40 }}>  
      <View><Text style={[Styles.Headers]}>CP Tracker</Text></View>  
           <View style={[Styles.Card2]}>
           <View><Text style={[Styles.Headers2]}>LOGIN</Text></View> 
               <View style={{margin:15,marginTop:25,alignContent:"flex-start",}}>
              
               <Input
                  placeholder='enter your email'
                  placeholderTextColor={'white'}
                  value= {this.state.email}
                  label='Email'
                  inputContainerStyle= {Styles.inputContainerStyle}
                  errorStyle={{ color: 'red',fontSize:5 }}
                  errorMessage={this.state.errorMailMessage}
                  leftIcon={{ type: 'font-awesome', name: 'envelope',size:20, color:'white' }}
                  style={Styles.input}
                  onChangeText={value => this.setState({ email: value })}
               />

               </View>
               <Button
                       title="Sign In"
                       loading={this.state.loading}
                       titleStyle={{ fontWeight: '700' }}
                       buttonStyle={{
                        backgroundColor: '#9CD66E',
                        borderRadius: 5,
                        margin:40
                      }}
                      onPress={()=>{this.props.navigation.navigate('Drawer')}}
               />
                
               <View>
                   <View style={Styles.flexRow}>
                     <Text >Don't have an account?  </Text>
                     <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}}>
                        <Text style={{fontWeight:'bold',color:'#3f4584'}}>Register</Text>
                     </TouchableOpacity>
                    </View>
                  
               </View>
           </View>
      </SafeAreaView>
    );
  }
}

