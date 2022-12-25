import React from 'react'
import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import ViewStatistics from "../../../assets/view_statistics.png"

import ManageCoaches from "../../../assets/manage_coaches.png"

import ManageAttendence from "../../../assets/manage_attendence.png"
import SessionPurification from "../../../assets/session_planification.png"


const items = [
    {
        image:ViewStatistics,
        title:"View Statistics"
    },
    {
        image:ManageCoaches,
        title:"Manage Coaches"
    },
    {
        image:ManageAttendence,
        title:"Manage Attendence"
    },
    {
        image:SessionPurification,
        title:"Manage Planification"
    },
    {
        image:SessionPurification,
        title:"View Comments"
    },
    {
        image:SessionPurification,
        title:"View Comments"
    },
    {
        image:SessionPurification,
        title:"Session Requests"
    },
    {
        image:SessionPurification,
        title:"My Account"
    }
]
export default class AdminDashboard extends React.Component{

    navigate=(item)=>{
        if(item == "Manage Coaches"){
            this.props.navigation.navigate("list_of_coaches")
        }

        if(item == "My Account"){
            this.props.navigation.navigate("profile")

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
                <Image source={require("../../../assets/admin_dashboard_logo.png")} style={{ width:150,height:150 }}/>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("profile")}>
                <Text style={{color:"#3498DB",top:50,fontSize:15}}>Welcome Mr. Adam</Text>

                </TouchableOpacity>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
                    <Text style={{color:"#3498DB",fontSize:18}}>My Dashboard</Text>

                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("notifications")}>
                            <Image source={require("../../../assets/notification.png")} style={{ width:30,height:30,right:20 }}/>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={()=>this.props.navigation.push("login")}>
                            <Image source={require("../../../assets/logout.png")} style={{ width:30,height:30 }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>

                <View style={{flexDirection:"row",flexWrap:"wrap",padding:20,justifyContent:"space-between"}}>

                    {items.map((data,index)=>{
                        return  <TouchableOpacity onPress={()=>this.navigate(data.title)} key={index} style={styles.item}>
                        <Image source={data.image} style={{ width:80,height:80 }}/>
                        <Text style={{color:"black"}}>{data.title}</Text>
                    </TouchableOpacity>
                    })}
               
                </View>

                <TouchableOpacity style={[styles.item,{width:'95%',alignSelf:"center",marginBottom:20}]}>
                        <Image source={ViewStatistics} style={{ width:80,height:80 }}/>
                        <Text style={{color:"black"}}>Manage Backup Videos</Text>
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
    item:{
        width:"45%",
        padding:10,
        borderWidth:1,
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:35,
        alignItems:"center",
        marginTop:10
    },
    
})