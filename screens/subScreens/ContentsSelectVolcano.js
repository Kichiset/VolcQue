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
  AppState,
} from 'react-native';

import { styles } from '../styles'; // 新しく作成したstyles.jsファイルをインポート
import VolcDB from './IndexVolcDB.json';
let locationData = VolcDB;

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



// シェアのファンクション
async function onShare() {
  try {
    const result = await Share.share({
      title: 'Share',
      message: '活火山レベルが出ました。今までこれだけ活火山に行ってきました。#VolQue #ボルクエ \n http://hogehoge',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
}

const App = (props) => { // propsを引数として受け取る  // 状態変数の定義
  <StatusBar style="default" />
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.selectionContainer, styles.buttonContainer]}>

        <TouchableOpacity
          style={[styles.box, styles.box1, styles.backButton]}
          onPress={() => {
            props.navigation.goBack(locationData);
          }}>
          <Text style={styles.buttonText}>戻る</Text>
        </TouchableOpacity>

        <View style={[styles.box, styles.box2]}>
          <Text style={[styles.subTitle, { color: 'black' }, { fontSize: 18 }]}>活火山レベル{'\n'}更新</Text>
        </View>

        <TouchableOpacity
          style={[styles.box, styles.box3, styles.shareButton]}
          onPress={onShare}>
          <Text style={styles.shareButtonText}>シェア</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={[styles.container, {marginTop: 10}]}>

        <View>
          <Text style={[styles.subTitle, { color: 'black' }, { fontSize: 18 }]}>北海道エリア</Text>
        </View>
        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[0].Color}]}
            onPress={() => {
              index = 0;
              props.navigation.navigate('個別火山ページ', index); // 遷移先の画面名を指定
            }}>
            <Text style={[styles.buttonTextWhite, { fontSize: 14 }]}>{locationData[0].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[1].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[1].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[2].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[2].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[3].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[3].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[4].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[4].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[5].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[5].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[6].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[6].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[7].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={[styles.buttonTextWhite, { fontSize: 14 }]}>{locationData[7].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[8].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[8].Name}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[styles.subTitle, { color: 'black' }, { fontSize: 18 }]}>東北エリア</Text>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[9].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[9].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[10].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[10].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[11].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[11].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[12].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[12].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[13].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[13].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[14].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[14].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[15].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[15].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[16].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[16].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[17].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[17].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[18].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[18].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[19].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[19].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[20].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[20].Name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.subTitle, { color: 'black' }, { fontSize: 18 }]}>関東・甲信越エリア</Text>
        </View>
        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[21].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[21].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[22].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[22].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[23].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[23].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[24].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[24].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[25].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[25].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[26].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[26].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[27].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[27].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[28].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[28].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[29].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[29].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[30].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[30].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[31].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[31].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[32].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[32].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.backButton, {backgroundColor: locationData[33].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[33].Name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.subTitle, { color: 'black' }, { fontSize: 18 }]}>伊豆・小笠原諸島</Text>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[34].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[34].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[35].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[35].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[36].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[36].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[37].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[37].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[38].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[38].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[39].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[39].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.backButton, {backgroundColor: locationData[40].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[40].Name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.subTitle, { color: 'black' }, { fontSize: 18 }]}>九州エリア</Text>
        </View>



        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[41].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={[styles.buttonTextWhite, { fontSize: 12 }]}>{locationData[41].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[42].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[42].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[43].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[43].Name}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.selectionContainer, styles.selectButtonContainer]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[44].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[44].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[45].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[45].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[0].Color}]}
            onPress={() => {
              index = 46;
              props.navigation.navigate('個別火山ページ', index); // 遷移先の画面名を指定
            }}>
            <Text style={[styles.buttonTextWhite, { fontSize: 14 }]}>{locationData[46].Name}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[styles.subTitle, { color: 'black' }, { fontSize: 18 }]}>九州離島エリア</Text>
        </View>



        <View style={[styles.selectionContainer, styles.selectButtonContainer, {marginBottom: 100}]}>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[47].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[47].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[48].Color}]}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.buttonTextWhite}>{locationData[48].Name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, styles.selectBox, styles.backButton, {backgroundColor: locationData[49].Color}]}
            onPress={onShare}>
            <Text style={styles.buttonTextWhite}>{locationData[49].Name}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

