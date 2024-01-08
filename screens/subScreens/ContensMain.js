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

import { styles } from '../styles'; // 新しく作成したstyles.jsファイルをインポート


{/*
import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

const isAndroid = Platform.OS == 'android';
//console.log(isAndroid, Platform.OS)

const adUnitId = isAndroid
 ? TestIds.APP_OPEN
 : 'ca-app-pub-3179323992080572/9648166408';

const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  keywords: ['健康', '食品', 'ファッション', 'ビール'],
});

const API_URL = 'https://holidays-jp.github.io/api/v1/date.json';
const Headline_URL = 'https://raw.githubusercontent.com/Kichiset/SakuraPJ/main/headlineMessage.json';
const main_url = 'https://www.amazon.co.jp/dp/B0CH51LQMG';
const sub_url = 'https://onjunpenguin.com/';

// バナー広告用のリンク
const bannerUrls = [
  sub_url,
  'https://sakurajimatsubaki.com/',
  'http://www.sakurajima.gr.jp/svc/topics/post-340.html',
];

// バナー広告用の画像リンク
const bannerImages = [
  require('../assets/GENTOO_PENGUIN_SAKURAJIMA_WORKSHOP.png'),
  require('../assets/SAKURAJIMA_TSUBAKI.png'),
];

// Admobバナー
import { AdmobFullBanner } from "../Admob";
*/}

const App = (props) => { // propsを引数として受け取る  // 状態変数の定義
  return (
  <SafeAreaView style={styles.safeArea}>
    <StatusBar style="auto" />
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.currentTime}>VolQue</Text>
      
    </ScrollView>
  </SafeAreaView>
  );
};

export default App;

