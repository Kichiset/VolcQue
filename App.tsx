import React, { useEffect, useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import Main from './screens/Main';
import HowToUse from './screens/subScreens/HowToUse';
import ContensMain from './screens/subScreens/ContensMain';
import ContentsSelectVolcano from './screens/subScreens/ContentsSelectVolcano';
import VolcPage from './screens/subScreens/VolcPage'

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    requestPermissionsAsync();
  })

  // トラッキング可否を保持する。これをContextなどに持たせて他の画面でも利用する
  // ※ trueでトラッキングしない。falseでトラッキングする
  const [nonPersonalizedOnly, setNonPersonalizedOnly] = useState(true);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="トップ画面" component={Main} />
        <Stack.Screen name="遊び方" component={HowToUse} />
        <Stack.Screen name="活火山レベル" component={ContensMain} />
        <Stack.Screen name="活火山レベルを更新" component={ContentsSelectVolcano} />
        <Stack.Screen name="個別火山ページ" component={VolcPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//通知の許可をリクエスト
const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync();
  //if (granted) { return }

  await Notifications.requestPermissionsAsync();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
