import React from "react";
import {View,Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
export default class ResetPassword extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <Image source={require("../../../assets/reset_password_logo.png")} style={{ width:200,height:200,position:"absolute",top:20 }}/>
                <ScrollView>
                    <View style={styles.innerContainer}>
                        <View style={styles.text_input}>

                        <TextInput placeholder="Email" />
                        </View>

                        <View style={styles.text_input}>

                        <TextInput placeholder="Phone"  />
                        </View>



                     


                        <TouchableOpacity style={[styles.button,{width:"100%",marginTop:20}]}>
                                <Text style={{color:"white"}}>Send Code</Text>
                            </TouchableOpacity>
                            <View style={styles.text_input}>

                            <TextInput placeholder="Verification Code" />
                            </View>

                            <View style={styles.text_input}>

                            <TextInput placeholder="New Password"  />
                            </View>

                            <TouchableOpacity style={[styles.button,{width:"100%",marginTop:20}]}>
                                <Text style={{color:"white"}}>Reset Password</Text>
                            </TouchableOpacity>
                    </View>
                </ScrollView>
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#ededed"
    },
    innerContainer:{
      width:Dimensions.get("window").width*2/2.1,
      padding:10, 
      borderWidth:1,
      borderColor:"white",
      borderRadius:20,
      backgroundColor:"white",
      marginTop:"66%",
      
    },
    text_input:{
        borderWidth:1,
        borderColor:"gray",
        borderRadius:15,
        paddingLeft:10,
        marginTop:10
    },
    button:{
        borderWidth:1,
        borderColor:"#3498DB",
        backgroundColor:"#3498DB",
        borderRadius:15,
        padding:10,
        width:'45%',
        justifyContent:"center",
        alignItems:"center"
    }
})