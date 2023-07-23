import { StatusBar } from 'expo-status-bar';
import { React, createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import AddRecipe from './screens/AddRecipe';
import idContext from './contexts/idContext';
import RecipeStack from './navigation/RecipeStack';


export default function App() {

  const [id, setID] = useState(0);
  const botNav = createBottomTabNavigator();

  return (
    <idContext.Provider value={[id, setID]}>
      <NavigationContainer>
        <botNav.Navigator>
          <botNav.Screen name="Recipe List" component={RecipeStack} options={{headerShown: false}}/>
          <botNav.Screen name="Add Recipe" component={AddRecipe}/>
        </botNav.Navigator>
      </NavigationContainer>
    </idContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
