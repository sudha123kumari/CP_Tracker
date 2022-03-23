import { StyleSheet } from "react-native"
import {
    Dimensions,
  } from "react-native";
const device = Dimensions.get("window");
export default StyleSheet.create({
  imageBackground:{
    width: device.width,
    height: device.height + 35,
  },
  cardImageBackground:{
    width: 100,
    height: 100,
  },
   rowCenter:{
        flexDirection: "row",
        justifyContent: "center",
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
},
layout:{
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 30,
  },
  container:{
    flex: 1,
    width: "90%",
    borderRadius: 30,
    borderWidth: 0.3,
    borderColor: "black",
    backgroundColor: "#00000090",
    padding: 10,
  },
  card:{
      flex:1,
      backgroundColor:"white",
      margin:15,
      borderRadius:5,
      paddingVertical:10,
  },
  flexColumn:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
  },
  flexRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },
  cardColumn:{
      margin:10,
  },
  cardColumnLeft:{
      flex:1.5,
  },
  cardColumnRight:{
      flex:2,
  },
  timeHeader:{
      flex:1,
      padding:8,
      paddingVertical:15,
      borderRadius:5,
      margin:6
  },
  futureHeader:{
    backgroundColor:'#BAE08A',
  },
  pastHeader:{
    backgroundColor:'#EC8686', 
  },
  presentHeader:{
    backgroundColor:'#53AFD6',
  },
  textName:{
      margin:1,
      fontWeight:'bold',
      fontSize:15,
  },
  btn1:{
      backgroundColor:"#716363",
      borderRadius:2,
      paddingHorizontal:10,
  },
  btn2:{
    backgroundColor:"#E067B0",
    borderRadius:2,
    paddingHorizontal:10,
    marginVertical:10,
    marginTop:25,
    paddingHorizontal:25,
    paddingVertical:8
  },
  btnText:{
    fontSize:14,
    margin:3,
    color:'white'
  },
  btn2Text:{
    fontSize:14,
    color:'white',
    letterSpacing:1,
  },
  btn3:{
      marginTop:20,
      marginVertical:25,
      backgroundColor:'#FF5757',
      borderRadius:10,
  },
  btn3Text:{
    fontSize:14,
    color:'white',
  },
  contentHeader:{
    fontSize:16,
    marginVertical:5,
    fontWeight:"bold",
  },
  contentView:{
      display:'flex',
      flexDirection:'row',
      paddingVertical:0,
  },
  contentText:{
    fontSize:12,
    letterSpacing:-0.3,
    paddingHorizontal:5,
  },
  contentBoldText:{
   fontWeight:"bold",
  },
  ownerHeader:{
    fontSize:20,
    marginTop:5,
    fontWeight:"bold",
  },
  ownerSubHeader:{
    fontSize:12,
    marginTop:-5,
    fontWeight:"bold",
  },
  ownerView:{
      marginVertical:30
  },
  text10:{
     fontWeight:'bold',
     fontSize:10,
  },
})