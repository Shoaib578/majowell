import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/splash';
import Home from '../screens/home';
import Login from "../screens/auth/login";
import ResetPassword from "../screens/auth/reset_password";
import AdminDashboard from "../screens/admin/dashboard";
import Profile from "../screens/admin/profile";
import Notifications from "../screens/admin/notification";


const Stack = createStackNavigator();

export default class Navigation extends React.Component{
    render(){
        return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
           
            <Stack.Screen name="reset_password" component={ResetPassword} options={{headerTransparent:true,headerTitle:""}}/>

            <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>


            <Stack.Screen name="admin_dashboard" component={AdminDashboard} options={{headerShown:false}}/>
            <Stack.Screen name="profile" component={Profile} options={{headerTransparent:true,headerTitle:""}}/>
            <Stack.Screen name="notifications" component={Notifications} options={{headerTransparent:true,headerTitle:""}}/>

        </Stack.Navigator>
    </NavigationContainer>
    }
}