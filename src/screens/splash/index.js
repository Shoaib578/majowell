import React from "react";
import {View,Text, StyleSheet,Image} from 'react-native'
export default class Splash extends React.Component{
    constructor(props){
        super(props)

        setTimeout(()=>{
            this.props.navigation.push("login")
        },800)
    }
    render(){
        return <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={{ width:250,height:250 }}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})