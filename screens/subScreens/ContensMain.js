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
  Dimensions
} from 'react-native';
import MapView, { UrlTile, Marker, Geojson } from 'react-native-maps';

import { styles } from '../styles'; // 新しく作成したstyles.jsファイルをインポート
import VolcDB from './IndexVolcDB.json';
  // 火山データベースの初期値を取得
  let locationData = VolcDB;

// Admobバナー
//import { AdmobFullBanner } from "../Admob";

async function onShare() {
  try {
    const result = await Share.share({
      title: 'Share',
      message: '活火山レベルが出ました。今までこれだけ活火山に行ってきました。#VolQue #ボルクエ \n http://hogehoge',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shagray with activity type of result.activityType
      } else {
        // shagray
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
}

const App = (props) => { // propsを引数として受け取る  // 状態変数の定義
// 初期値を取得

  // 初期位置は富士山
  const [mapLong, setMapLong] = useState(locationData[31].longitude);
  const [mapLat, setMapLat] = useState(locationData[31].latitude);

  return (
  <SafeAreaView style={styles.safeArea}>
    <View style={[styles.subContainer,styles.buttonContainer]}>
    
    <TouchableOpacity
      style={[styles.box, styles.box1, styles.backButton]}
      onPress={() => {
        props.navigation.navigate('トップ画面'); // 遷移先の画面名を指定
      }}>
      <Text style={styles.buttonText}>戻る</Text>
    </TouchableOpacity>

    <View style={[styles.box, styles.box2]}>
      <Text style={styles.currentTime}>活火山レベル</Text>
    </View>

    <TouchableOpacity
      style={[styles.box, styles.box3, styles.shareButton]}
      onPress = {onShare}
      >
      <Text style={styles.shareButtonText}>シェア</Text>
    </TouchableOpacity>
  </View>
  
  <View style={styles.levelContainer}>
    <View style={styles.levelFrame}>
      <Text style={[styles.mainTitle]}>活火山レベル： Lv. <Text style={[{color: 'red'}]}>111</Text></Text>
    </View>
  </View>

   <View style={[styles.mapContainer]}>
   <View style={[styles.mapFrame]}>
      <MapView
        style={styles.map}
        rotateEnabled={false}
        initialRegion={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 25,
          longitudeDelta: 25,
        }}
      >
      {locationData.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={locationData[index].Name}
            pinColor={data.Color}
          />
        ))}
      </MapView>
      </View>

      {/* メイン画面からレベル一覧に遷移するフレーム */}
      <TouchableOpacity        
        onPress={() => {
          locationData = locationData;
          props.navigation.navigate('活火山レベルを更新'); // 遷移先の画面名を指定
        }}
      >
        <View style={styles.volReloadFrame}>
          <Text style={[styles.subTitle, styles.bottomColumn]}>活火山レベルを更新</Text>
        </View>
      </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
}
export default App;