import React from "react";
import {View,Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
export default class Notifications extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../../../assets/manage_attendence.png")} style={{ width:200,height:200,alignSelf:"center",marginTop:20 }}/>

                 <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
                

                <Text style={{color:"gray",fontSize:20}}>Notifications</Text>
                    <View style={{flexDirection:"row"}}>
                        


                        <TouchableOpacity onPress={()=>this.props.navigation.push("login")}>
                            <Image source={require("../../../assets/logout.png")} style={{ width:30,height:30 }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.notification_container}>
                        
                        <Image style={{width:50,height:50}} source={require("../../../assets/inbox.png")}/>

                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{color:"skyblue",top:17,right:50,}}>This is the notifications</Text>

                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>View more</Text>
                        </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.notification_container}>
                        
                        <Image style={{width:50,height:50}} source={require("../../../assets/inbox.png")}/>

                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{color:"skyblue",top:17,right:50,}}>This is the notifications</Text>

                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>View more</Text>
                        </TouchableOpacity>
                        </View>
                    </View>



                    <View style={styles.notification_container}>
                        
                        <Image style={{width:50,height:50}} source={require("../../../assets/inbox.png")}/>

                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{color:"skyblue",top:17,right:50,}}>This is the notifications</Text>

                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>View more</Text>
                        </TouchableOpacity>
                        </View>
                    </View>



                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("admin_dashboard")} style={[styles.button,{width:"95%",marginTop:20,}]}>
                                <Text style={{color:"white"}}>Go to dashboard</Text>
                            </TouchableOpacity>
                </ScrollView>
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:"#ededed"
    },
    notification_container:{
      width:Dimensions.get("window").width*2/2.1,
      padding:10, 
      borderWidth:1,
      borderColor:"white",
      borderRadius:20,
      backgroundColor:"white",
      marginTop:20,
      alignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-between"
    
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
        alignItems:"center",
        alignSelf:"center",
        marginTop:20
    },
    view_more_btn:{
        borderWidth:1,
        borderColor:"purple",
        backgroundColor:"purple",
        borderRadius:15,
        padding:7,
       
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
       
    }
})