import React, { useEffect, useState, Component } from 'react';
import {
  View,
  Text,
  TextInput ,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../styles'; // 新しく作成したstyles.jsファイルをインポート
import {Picker} from '@react-native-picker/picker'
import key from './IndexVolcDB.json';



// Admobバナー
//import { AdmobFullBanner } from "../Admob";

// データの保存
const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

// データの読み込み
const loadData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    console.log(data)
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

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
// 編集する火山の座標を取得
  // 位置はIndexから取得
  //console.log(data.Name, index)

// 選択した経験値とインデックスを保存
const [choosenLabel, setChoosenLabel] = useState([0]);
const [choosenIndex, setChoosenIndex] = useState([0]);
// 思い出を日記みたいにかけるようにする。
const [value, onChangeText] = React.useState("");
//console.log(key[0].volcDescription,value) //ここまでは、上の処理ができていることを確認。以下に、書き込み処理を追記
loadData(key[0].volcDescription);

//console.log(key[0].volcDescription) //ここまでは、上の処理ができていることを確認。以下に、書き込み処理を追記
  return (
  <SafeAreaView style={styles.safeArea}>
    <View style={[styles.subContainer,styles.buttonContainer]}>
    
    <TouchableOpacity
      style={[styles.box, styles.box1, styles.backButton]}
      onPress={() => {
        props.navigation.goBack(); // 遷移先の画面名を指定
      }}>
      <Text style={styles.buttonText}>戻る</Text>
    </TouchableOpacity>

    <View style={[styles.box, styles.box2]}>
      <Text style={styles.changeInfTitle}>{key[0].Name}の</Text><Text style={styles.changeInfTitle}>情報を更新</Text>
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
      <Text style={[styles.mainTitle]}>{key[0].Name}のexp. ： <Text style={[{color: key[0].Color}]}>{key[0].volLv}</Text></Text>
    </View>
  </View>

  <View style={[styles.levelContainer]}>
    <Text style={[styles.chapterTitle]}>御火山印</Text>
  </View>

  <View style={[styles.mapContainer]}>


{/* メイン画面からレベル一覧に遷移するフレーム */}
<TouchableOpacity        
  onPress={() => {
    props.navigation.navigate('活火山レベルを更新'); // 遷移先の画面名を指定
  }}
>
</TouchableOpacity>
   <View style={[styles.mapFrame]}>
   {/*if文を書いて写真をぶっこむ*/}

   </View>
</View>

   <View style={[styles.levelContainer]}>
      <View style={styles.levelFrame}>
     
          <Text style={[styles.chapterTitle]}>{key[0].Name}のexp.更新</Text>
          <View>
          {/*Picker with multiple chose to choose*/}
          {/*selectedValue to set the preselected value if any*/}
          {/*onValueChange will help to handle the changes*/}
          <Picker
            style={[styles.wideButton, styles.picker]}
            selectedValue={choosenLabel}
            onValueChange={(itemValue, itemIndex) => {
              setChoosenLabel(itemValue);
              setChoosenIndex(itemIndex);
              {/*PIcker.Item内のcolor="#30AAFF"は、地図上ではaqua*/}
            }}>
            <Picker.Item label="0（見たことがない）" value="0" color="#30AAFF" />
            <Picker.Item label="1（遠くから見た）" value="1" color="blue" />
            <Picker.Item label="2（遠くからみた、楽しんだ）" value="2" color="plum" />
            <Picker.Item label="3（麓で見た、通った）" value="3" color="purple" />
            <Picker.Item label="4（麓で楽しんだ、堪能した）" value="4" color="orange" />
            <Picker.Item label="5（完全制覇）" value="5" color="red" />
          </Picker>
        </View>
        <TouchableOpacity
        onPress={() => {
          console.log("ここに、経県値操作用のリールと、思い出をキーボード入力")
        }}>
        <View>
        <Text style={[styles.chapterTitle]}>{key[0].Name}の思い出</Text>
        <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={200}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.explainText}
      />
         </View>
     </TouchableOpacity>
     </View>
      {/* メイン画面からレベル一覧に遷移するフレーム */}
      <TouchableOpacity
        onPress={() => {
          saveData(key[0].volcDescription,value);
          console.log("ここに、ファイルのIndexを読んで書き込む操作をする")
          props.navigation.navigate('活火山レベル'); // 遷移先の画面名を指定
          console.log(key.volcDescription,value)
        }}
      >
        <View style={styles.volReloadFrame}>
          <Text style={[styles.subTitle, styles.bottomColumn]}>OK 更新</Text>
        </View>
      </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
}
export default App;