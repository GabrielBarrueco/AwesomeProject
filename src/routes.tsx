import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from "./screens/home/home"
import { PokemonDetail } from './screens/pokemonDetail/pokemonDetail';
import { Button } from 'react-native';

const AppStack = createNativeStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <AppStack.Screen 
          name="PokemonDetail" 
          component={PokemonDetail} 
          options={{
            headerShown: true,
            title: ""
            
          }} 
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}