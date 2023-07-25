import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import  Account  from './screens/account/Account';
import  AccountSettings  from './screens/account/AccountSettings';
import  HomeScreen from './screens/homescreen/Home';
import Classes from './screens/classes/Classes';
import ClassDescriptions from './screens/classes/ClassDescriptions';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const NestedNavigator = () => {
  return <BottomTabs.Navigator 
  screenOptions={{
    headerStyle: {backgroundColor: 'white'},
    headerTintColor: 'black',
    headerTitleStyle: {fontWeight: 'bold'},
    tabBarStyle: {backgroundColor: 'white'},
    tabBarActiveTintColor: 'grey',
    tabBarInactiveTintColor: 'black',
  }}>
  <BottomTabs.Screen name="Home Screen" component={HomeScreen} 
    options= {{
      title: 'Home Screen',
      tabBarLabel: 'Home Screen',
      tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size}/>
    }}/>
    <BottomTabs.Screen name="AccountStack" component={AccountStackNavigator} 
    options= {{
      headerShown: false,
      tabBarLabel: 'Account Stack',
      tabBarIcon: ({ color, size }) => <MaterialIcons name="account-circle" color={color} size={size}/>
    }}/>
    <BottomTabs.Screen name="ClassesStack" component={ClassesStackNavigator} 
    options= {{
      headerShown: false,
      tabBarLabel: 'Classes Stack',
      tabBarIcon: ({ color, size }) => <MaterialIcons name="fitness-center" color={color} size={size}/>
    }}/>
  </BottomTabs.Navigator>
}

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Account" 
        component={Account} 
        options={{ title: 'Account' }}
      />
      <Stack.Screen 
        name="Settings" 
        component={AccountSettings} 
        options={{ title: 'Account Settings' }}
      />
    </Stack.Navigator>
  )
}

const ClassesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Classes" 
        component={Classes} 
        options={{ title: 'Classes' }}
      />
      <Stack.Screen 
        name="ClassDescriptions" 
        component={ClassDescriptions} 
        options={{ title: 'Class Descriptions' }}
      />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <NestedNavigator />
      </NavigationContainer>
    </>
  );
}
