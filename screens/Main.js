import React, { useEffect, useState, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Linking,
  Platform,
  Animated,
  Share,
  AppState
} from 'react-native';

import { styles } from './styles'; // 新しく作成したstyles.jsファイルをインポート

const App = (props) => { // propsを引数として受け取る  // 状態変数の定義
  return (
  <SafeAreaView style={[styles.safeArea,styles.container]}>
    <StatusBar style="default" />
      <Image
        source={require('../assets/常時観測火山分布図.png')} // 画像ファイルのパスを指定
        style={styles.TopMapImage}
      />
            
      {/* メイン画面からレベル一覧に遷移するフレーム */}
      <TouchableOpacity
        
        onPress={() => {
          props.navigation.navigate('活火山レベル'); // 遷移先の画面名を指定
        }}
      >
      <View style={styles.startFrame}>
        <Text style={[styles.subTitle, styles.bottomColumn]}>始める</Text>
      </View>
      </TouchableOpacity>

      {/* メイン画面から遊び方に遷移するフレーム */}
      <TouchableOpacity
      
        onPress={() => {
          props.navigation.navigate('遊び方'); // 遷移先の画面名を指定
        }
        }
      >
      <View style={styles.howToUseFrame}>
        <Text style={[styles.subTitle, styles.bottomColumn]}>遊び方</Text>
      </View>
      </TouchableOpacity>
  </SafeAreaView>
  );
};

export default App;

