import React from "react";
import {View,Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
export default class ListCoaches extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../../../assets/list_of_coaches.png")} style={{ width:200,height:200,alignSelf:"center",marginTop:20 }}/>

                 <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
                

                <Text style={{color:"gray",fontSize:20}}>List of coaches</Text>
                    <View style={{flexDirection:"row"}}>
                        


                        <TouchableOpacity onPress={()=>this.props.navigation.push("login")}>
                            <Image source={require("../../../assets/logout.png")} style={{ width:30,height:30 }}/>
                        </TouchableOpacity>
                    </View>

                    
                </View>

                <View style={styles.text_input}>

                        <TextInput placeholder="Search for coaches" />
                        </View>
                <ScrollView>
                    <View style={styles.notification_container}>
                        
                        <Image style={{width:50,height:50}} source={require("../../../assets/coach.png")}/>

                        <View >
                        <Text style={{color:"skyblue",top:17,right:50,}}>Shoaib</Text>
                        <Text style={{color:"skyblue",marginTop:10,right:50,}}>theexample@gmail.com</Text>

                        </View>
                        <View>
                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>Edit</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>Delete</Text>
                        </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.notification_container}>
                        
                        <Image style={{width:50,height:50}} source={require("../../../assets/coach.png")}/>

                        <View >
                        <Text style={{color:"skyblue",top:17,right:50,}}>Shoaib</Text>
                        <Text style={{color:"skyblue",marginTop:10,right:50,}}>theexample@gmail.com</Text>

                        </View>
                        <View>
                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>Edit</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>Delete</Text>
                        </TouchableOpacity>

                        </View>
                    </View>



                    <View style={styles.notification_container}>
                        
                        <Image style={{width:50,height:50}} source={require("../../../assets/coach.png")}/>

                        <View >
                        <Text style={{color:"skyblue",top:17,right:50,}}>Shoaib</Text>
                        <Text style={{color:"skyblue",marginTop:10,right:50,}}>theexample@gmail.com</Text>

                        </View>
                        <View>
                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>Edit</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.view_more_btn}>
                            <Text style={{color:"white"}}>Delete</Text>
                        </TouchableOpacity>
                        </View>
                    </View>



                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("add_new_coach")} style={[styles.button,{width:"95%",marginTop:20,marginBottom:20}]}>
                                <Text style={{color:"white"}}>Add New Coach</Text>
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
        marginTop:10,
        width:Dimensions.get("window").width*2/2.1,
        alignSelf:"center"
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
        marginTop:5,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
       
    }
})