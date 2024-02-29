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
<StatusBar style="default" />

  return (
  <SafeAreaView style={styles.safeArea}>
   
    <View style={[styles.subContainer,styles.buttonContainer]}>
    
        <TouchableOpacity
          style={[styles.box, styles.box1, styles.backButton]}
          onPress={() => {
            props.navigation.navigate('トップ画面'); // 遷移先の画面名を指定
          }}
        >
          <Text style={styles.buttonText}>戻る</Text>
        </TouchableOpacity>

        <View style={[styles.box, styles.box2]}>
          <Text style={styles.mainTitle}>遊び方</Text>
        </View>

        <View style={[styles.box, styles.box1]}>
        </View>
      
    </View>
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={[styles.textContainer,styles.textSectionContainer]}>
        <Text style={styles.buttonText}>{'\n'}  ボルクエ</Text>
        <Text style={styles.explainText}>このアプリ（ボルクエ）は、日本に111座ある活火山の中で、皆さんの訪問履歴を数値化して「活火山レベル」を測定するためのコレクションアプリです。
        {"\n"}これまでの火山についての訪問履歴を振り返り、これからも訪問履歴を記録として追加していくことができます。
        {"\n"}今までとこれからの記録を登録して、活火山レベルを測定・レベルアップをしていきましょう。{"\n"}</Text>

        <Text style={styles.linkButtonText}> ボルクエの楽しみ方</Text>
        <Text style={styles.explainText}>皆さんは活火山への訪問履歴を登録・更新して活火山レベルを数値化することができ、新たな楽しみが広がります。{"\n"}</Text>
        
        <Text style={styles.linkButtonText}> 活火山レベルの測定</Text>
        <Text style={styles.explainText}>活火山レベルは以下のような「活火山経県値(exp.)」をもとに計算されます。</Text>

          <Text>🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋</Text>
      
          <Text style={styles.descriptionText}>{"\n"}exp.5): 完全制覇（登頂したなど）</Text>
          <Text style={styles.descriptionText}>exp.4): 麓で楽しんだ、堪能した</Text>
          <Text style={styles.descriptionText}>exp.3): 麓で見た、通った、堪能した</Text>
          <Text style={styles.descriptionText}>exp.2): 遠くから楽しんだ、堪能した</Text>
          <Text style={styles.descriptionText}>exp.1): 遠くから見た</Text>
          <Text style={styles.descriptionText}>exp.0): 見たことがない{"\n"}</Text>
          
          <Text>🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋🌋</Text>
        <Text style={styles.explainText}>対象が活火山なので、そもそも立ち入りが禁じられていて登頂なんて不可能な火山もあります。
        {"\n"}楽しみも人それぞれあるので、exp.は主観で決まります。上に書いた表はあくまで例です。exp.はみなさんが自己判断で記録してください。</Text>

        <Text style={styles.explainText}>exp.が「5」たまるごとに活火山レベルが「1」上がります。
        日本には111座の活火山があるので、現在の最大レベルは「111」です。
        {"\n"}どんな猛者がいるのでしょうか？
        {"\n"}</Text>
        
        <Text style={styles.linkButtonText}> コミュニティの拡がり</Text>
        <Text style={styles.explainText}>ボルクエ内にはシェア機能が搭載されており、個人の楽しみ方も大切にしながら、SNSを通じて新しい仲間たちと繋がりましょう。
        {'\n'}SNS上で思い出を共有し、同じ趣味を持つ仲間たちと交流できます。彼らはどれほどの火山レベルお持ちでしょうか？{"\n"}</Text>
        
        <Text style={styles.linkButtonText}> 広告のサポート</Text>
        <Text style={styles.explainText}>皆さんの思い出を維持するため、操作情報はユーザーエクスペリエンス向上や広告の最適化に活用されます。これにより、皆さんがスムーズに思い出を紡ぐことができ、ボルクエがより安定して運営されます。{"\n"}</Text>
        
        <Text style={styles.linkButtonText}> プライバシーの安全性</Text>
        <Text style={styles.explainText}>個人情報は厳重に守られ、Google Admobが審査した信頼性のあるサードパーティーだけが、匿名でかつ非個人的な情報のみを利用します。ユーザーのプライバシーは確保され、安心してアプリを利用できます。{"\n"}</Text>
      </View>
      
    </ScrollView>
  </SafeAreaView>
  );
};

export default App;

