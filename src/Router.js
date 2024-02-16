import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Categories" 
        component={Categories}
        options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
        }} />
        
        <Stack.Screen 
        name="Meals" 
        component={Meals}
        options={{
          title: 'Meals',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
          headerBackTitleVisible: false,
          headerBackTitle:"Categories",
        }} />
        
        <Stack.Screen 
        name="Detail" 
        component={Detail}
        options={{
          title: 'Detail',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;