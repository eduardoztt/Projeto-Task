import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskList from "./screens/TaskList";
import Auth from "./screens/Auth";
import { Screen } from "react-native-screens";

const MainRoutes = {
    Auth:{
        name: 'Auth',
        screen: Auth
    },
    Home:{
        name: 'Home',
        screen: TaskList
    }
}

const MainNavigator = createNativeStackNavigator(MainRoutes)