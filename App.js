import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Contact from './screens/Contact';
import BoardOfTrustees from './screens/BoardOfTrustees';
import TheCommittee from './screens/TheCommittee';
import TheExecutives from './screens/TheExecutives';
import TheSquad from './screens/TheSquad';
import AboutKffi from './screens/AboutKffi';



function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{
          statusBarColor:'#0d0447',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#0d0447'
            },
          
            

          }}
      >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="About KFFI" component={AboutKffi} />
        <Stack.Screen name="Contact & Accounts" component={Contact} />
        <Stack.Screen name="Board of Trustees" component={BoardOfTrustees} />
        <Stack.Screen name="The Executives" component={TheExecutives} />
        <Stack.Screen name="The Committees" component={TheCommittee} />
        <Stack.Screen name="The Squad" component={TheSquad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;