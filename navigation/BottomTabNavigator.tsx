import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/Home';
import TabTwoScreen from '../screens/Library';
import TabThreeScreen from '../screens/Others';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import Icon from 'react-native-vector-icons/Entypo';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      tabBarOptions={{ activeTintColor: '#1e90ff',
      inactiveTintColor: '#a9a9a9', labelStyle: {
        fontSize: 11.5,
      },}}
      >
      <BottomTab.Screen
        name="home"
        component={TabOneNavigator}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={29} />,
        }}
      />
      <BottomTab.Screen
        name="library"
        component={TabTwoNavigator}
        options={{
          tabBarLabel: 'ライブラリ',
          tabBarIcon: ({ color }) => <Icon name="folder-music" color={color} size={29}/>,
        }}
      />

      <BottomTab.Screen
        name="others"
        component={TabThreeNavigator}
        options={{
          tabBarLabel: 'その他',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="menu" color={color} size={29}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        color='blue'
        component={TabOneScreen}
        options={{ headerTitle: ({ color }) => <Icon name="book" color={'#fff'} size={29} />,headerStyle: {
          backgroundColor: '#1e90ff',
        },}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'ライブラリ',headerTintColor: '#fff', headerStyle: {
          backgroundColor: '#1e90ff',
        }}}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'その他',headerTintColor: '#fff', headerStyle: {
          backgroundColor: '#1e90ff' }}}
      />
    </TabTwoStack.Navigator>
  );
}

