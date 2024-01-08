import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main';
import HowToUse from './screens/subScreens/HowToUse';
import ContensMain from './screens/subScreens/ContensMain';
import ContentsSelectVolcano from './screens/subScreens/ContentsSelectVolcano';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="トップ画面" component={Main} />
        <Stack.Screen name="遊び方" component={HowToUse} />
        <Stack.Screen name="活火山レベル" component={ContensMain} />
        <Stack.Screen name="活火山レベルを更新" component={ContentsSelectVolcano} />
      </Stack.Navigator>
    </NavigationContainer>
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
