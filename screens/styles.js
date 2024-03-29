import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
// エリア
  safeArea: {
    flex: 1,
    backgroundColor: '#D4ECEE',
  },
// BOXコンテナ
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelContainer: {
    flexGrow: 0.3,
    marginTop: 0,
    justifyContent: 'top',
    alignItems: 'center',
  },
  mapContainer: {
    flexGrow: 5,
    marginTop: 0,
    justifyContent: 'top',
    alignItems: 'center',
  },
  TopMapImage: {
    width: 350,
    height:350,
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 5,
  },
  mapImage: {
    flexGrow: 0,
    width: 300,
    height:300,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  subContainer: {
    flexGrow: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionContainer: {
    flexGrow: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSectionContainer: {
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    backgroundColor:'#EBEBEB',
  },
  textContainer: {
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 15,
    marginLeft: 10,
    textAlign: 'left',
  },
    detailTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor:'#EBEBEB',
  },
  levelFrame:{
    marginTop: 10,
    backgroundColor: '#EBEBEB', //白藍
    borderWidth: 2,
    borderColor: 'white',
    padding: 0,
    borderRadius: 15,
    alignItems: 'center',
    margin: 'auto',
    width: 350,
  },
  mapFrame:{
    backgroundColor: '#D4ECEE',
    padding: 0,
    alignItems: 'center',
    margin: 'auto',
    width: 350,
  },
  map: {
    width: 340,
    height:300,
  },
  startFrame:{
    marginTop: 10,
    backgroundColor: '#3087FF',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    margin: 'auto',
    width: 210,
  },
  howToUseFrame:{
    marginTop: 15,
    backgroundColor: '#808080',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    margin: 'auto',
    width: 210,
  },
  volReloadFrame:{
    marginTop: 10,
    backgroundColor: '#3087FF',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    margin: 'auto',
  },
  button: {
    backgroundColor: '#EBEBEB', //白藍
    borderWidth: 1,
  },
  backButton: {
    backgroundColor: '#EBEBEB', //白藍
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  shareButton: {
    backgroundColor: '#1A8CD8', //Twitterの色
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },

// 三列カラム定義
  buttonContainer: {
    flexDirection: 'row', // ボタンを横並びに配置
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
    margin: 'auto',
    marginRight: 10, //よくわからないけどX7の部分は調整用のおまじない。分かったら修正！！
  },
  box: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  box2: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexGrow: 3,
  },
  box3: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  selectButtonContainer: {
    flexDirection: 'row', // ボタンを横並びに配置
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    margin: 'auto',
    marginRight: 10, //よくわからないけどX7の部分は調整用のおまじない。分かったら修正！！
  },
  selectBox: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },

// テキスト定義
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  DepartPortTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  currentTime: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  changeInfTitle: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 0,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  current4DepartureTime: {
    fontSize: 30,
    marginTop: 0,
    marginBottom: 10,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  subTitle: {
    color: 'white',
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
},
chapterTitle: {
  fontSize: 18,
  marginTop: 10,
  marginBottom: 5,
  fontWeight: 'bold',
  alignItems: 'center',
  textAlign: 'center',
},
  nextDeparture: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  headLineNews:{
    marginTop: 30,
    marginBottom: 0,
    borderWidth: 1,
    textColor: '#EBEBEB',
    backgroundColor: '#FFF',
    borderColor: '#1C1C1C',
    margin: 'auto',
    width: 350,
    height: 30,
    borderRadius: 255,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerColumn: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bottomColumn: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationColumn: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mainButton: {
    backgroundColor: '#D4ECEE', //白藍
    borderWidth: 1,
    borderColor: '#00A2C0', //かごんまの色（）
    marginTop: 20,
    alignItems: 'center',
    margin: 'auto',
    width: 200,
  },
  SetButton: {
    backgroundColor: '#99CEF4',
    borderWidth: 1,
    borderColor: '#00A2C0', //かごんまの色（）
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: 180,
    height: 50,
    borderRadius: 100,
  },
  ResetButton: {
    backgroundColor: '#ECC521',
    borderWidth: 2,
    borderColor: '#B92021', //かごんまの色（）
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: 180,
    height: 50,
    borderRadius: 100,
  },
  noticeColumn: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom : 5,
  },
  sakuraButton: {
    backgroundColor: '#FCDCE0',
    borderWidth: 1,
    borderColor: '#C87D99',
    marginTop: 25,
    alignItems: 'center',
    margin: 'auto',
    width: 180,
  },
  kagoButton: {
    backgroundColor: '#EBEBEB',
    borderWidth: 1,
    borderColor: '#5F3770',
    marginTop: 25,
    alignItems: 'center',
    margin: 'auto',
    width: 180,
  },
  buttonText: {
    color: '#1C1C1C',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonTextWhite: {
    color: '#EBEBEB',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  explainText: {
    color: '#1C1C1C',
    padding: 16,
    marginTop: 0,
    fontSize: 16,
    alignItems: 'center',
  },
  descriptionText: {
    color: '#1C1C1C',
    padding: 5,
    marginTop: 0,
    fontSize: 16,
    alignItems: 'center',
  },
  linkButtonText: {
    padding: 8,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },  
  linkButtonTop: {
    marginTop: 30,
    padding: 10,
  },
  linkButton: {
    marginTop: 10,
    padding: 10,
  },
  linkButtonImage: {
    width: 200,
    height: 60,
    borderRadius: 5,
  },
  seletKagoTopButton: {
    backgroundColor: '#EBEBEB', //白藍
    borderWidth: 1,
    marginTop: 0,
    alignItems: 'center',
    margin: 'auto',
    width: 180,
  },
  seletSakuTopButton: {
    backgroundColor: '#FCDCE0', //白藍
    borderWidth: 1,
    marginTop: 0,
    alignItems: 'center',
    margin: 'auto',
    width: 180,
  },
    seletKagoButton: {
    backgroundColor: '#EBEBEB', //白藍
    borderWidth: 1,
    marginTop: 5,
    alignItems: 'center',
    margin: 'auto',
    width: 180,
  },
    seletSakuButton: {
    backgroundColor: '#FCDCE0',
    borderWidth: 1,
    marginTop: 5,
    alignItems: 'center',
    margin: 'auto',
    width: 180,
  },
    wideButton: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: 220,
  },
  picker : {
    transform: [
     { scaleX: 1.3 }, 
     { scaleY: 1.3 },
  ],
  backgroundColor: '#EBEBEB',
  },
    adBanner: {
    marginTop: 20,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  bannerImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  bannerDescription:{
      color:'#DFAF89'
  }
});