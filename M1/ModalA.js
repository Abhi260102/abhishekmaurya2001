import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
 
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconA from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import Modal from 'react-native-modal'
const {width, height} = Dimensions.get('window');
const ModalA = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.two}></View>
        <View style={styles.one}>
          <View style={styles.vie47}>
            <View style={styles.vie31}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Bet')}>
                  <Icon name="bars" size={30} color={'white'} />
                </TouchableOpacity>
              </View>
              <View style={styles.vie51}>
                <Image
                  source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/logo123.png')}
                  style={styles.img34}
                />
              </View>
            </View>
            <View style={styles.vie45}>
              <TouchableOpacity onPress={() => alert('search')}>
                <Icon name="search1" size={25} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Bell')}>
                <IconA name="bell" size={25} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Deposit')}>
                <Icon name="wallet" size={25} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.three}>
          <View style={styles.seven}>
            <View style={styles.four}>
              <TouchableOpacity
                style={styles.touch1}
                onPress={() => alert('History')}>
                <Text style={styles.txt}>History</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.five}>
              <TouchableOpacity
                style={styles.touch2}
                onPress={() => alert('Favourite')}>
                <Text style={styles.txt1}>Favourite Sport</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.six}>
              <TouchableOpacity
                style={styles.touch3}
                onPress={() => alert('inbox')}>
                <Text style={styles.txt2}>Inbox (5)</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eight}>
            <Text style={styles.txt6}>Soccer</Text>
          </View>
        </View>
        <View style={{height: height * 0.02}}></View>

        {/* start from here */}
        <View style={styles.nine}>
          <View style={styles.ten}>
            <View style={styles.vie1}>
              <Text style={styles.txt8}>England Premier League 2021</Text>
            </View>
            <View style={styles.vie2}>
              <View style={styles.vie4}>
                <Text style={styles.txt9}>22 May 22:30</Text>
              </View>
              {/* abhi */}
              <View style={styles.vie6}>
                <View style={styles.vie14}>
                  <Text style={styles.txt12}>Ireland</Text>
                </View>
                <View style={styles.vie15}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/ireland1.png')}
                    style={styles.img1}
                  />
                </View>
                <View style={styles.vie16}>
                  <Text style={styles.txt13}>Vs</Text>
                </View>
                <View style={styles.vie13}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/netherland.png')}
                    style={styles.img2}
                  />
                </View>
                <View style={styles.vie17}>
                  <Text style={styles.txt17}>Netherland</Text>
                </View>
              </View>
            </View>

            <View style={styles.vie21}>
              <View style={styles.vie19}>
                <Text style={styles.txt41}>Starts in</Text>
              </View>
              <View style={styles.vie23}>
                <View style={styles.vie24}>
                  <TouchableOpacity
                    style={styles.touch4}
                    onPress={() => setModalVisible(!modalVisible) }>
                    <Text style={styles.txt16}>Reject</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.vie25}>
                  <TouchableOpacity
                    style={styles.touch5}
                    onPress={() => alert('Reject')}>
                    <Text style={styles.txt18}>Play</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.vie28}>
              <Text style={styles.txt44}>
                Daniel@123 Wants to bet 1K USD om Mnchester
              </Text>
            </View>
          </View>
          {/* end here */}
        </View>
        <View style={styles.nine}>
          <View style={styles.ten}>
            <View style={styles.vie1}>
              <Text style={styles.txt8}>T-20 World Cup 2021</Text>
            </View>
            <View style={styles.vie2}>
              <View style={styles.vie4}>
                <Text style={styles.txt9}>22 May 23:30</Text>
              </View>
              {/* abhi */}
              <View style={styles.vie6}>
                <View style={styles.vie14}>
                  <Text style={styles.txt12}>India</Text>
                </View>
                <View style={styles.vie15}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/ind.png')}
                    style={styles.img1}
                  />
                </View>
                <View style={styles.vie16}>
                  <Text style={styles.txt13}>Vs</Text>
                </View>
                <View style={styles.vie13}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/aus.png')}
                    style={styles.img2}
                  />
                </View>
                <View style={styles.vie17}>
                  <Text style={styles.txt17}>Australia</Text>
                </View>
              </View>
            </View>

            <View style={styles.vie21}>
              <View style={styles.vie19}>
                <Text style={styles.txt41}>Starts in</Text>
              </View>
              <View style={styles.vie23}>
                <View style={styles.vie24}>
                  <TouchableOpacity
                    style={styles.touch4}
                    onPress={() => alert('Reject')}>
                    <Text style={styles.txt16}>Reject</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.vie25}>
                  <TouchableOpacity
                    style={styles.touch5}
                    onPress={() => alert('Reject')}>
                    <Text style={styles.txt18}>Play</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.vie28}>
              <Text style={styles.txt44}>
                Daniel@123 Wants to bet 1K USD om Mnchester
              </Text>
            </View>
          </View>
          {/* end here */}
        </View>
        <View style={styles.nine}>
          <View style={styles.ten}>
            <View style={styles.vie1}>
              <Text style={styles.txt8}>Indian Premier League 2021</Text>
            </View>
            <View style={styles.vie2}>
              <View style={styles.vie4}>
                <Text style={styles.txt9}>22 May 21:30</Text>
              </View>
              {/* abhi */}
              <View style={styles.vie6}>
                <View style={styles.vie14}>
                  <Text style={styles.txt12}>Delhi</Text>
                </View>
                <View style={styles.vie15}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/rcb.jpeg')}
                    style={styles.img1}
                  />
                </View>
                <View style={styles.vie16}>
                  <Text style={styles.txt13}>Vs</Text>
                </View>
                <View style={styles.vie13}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/csk.jpeg')}
                    style={styles.img2}
                  />
                </View>
                <View style={styles.vie17}>
                  <Text style={styles.txt17}>Chennai</Text>
                </View>
              </View>
            </View>

            <View style={styles.vie21}>
              <View style={styles.vie19}>
                <Text style={styles.txt41}>Starts in</Text>
              </View>
              <View style={styles.vie23}>
                <View style={styles.vie24}>
                  <TouchableOpacity
                    style={styles.touch4}
                    onPress={() => alert('Reject')}>
                    <Text style={styles.txt16}>Reject</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.vie25}>
                  <TouchableOpacity
                    style={styles.touch5}
                    onPress={() => alert('Reject')}>
                    <Text style={styles.txt18}>Play</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.vie28}>
              <Text style={styles.txt44}>
                Daniel@123 Wants to bet 1K USD om Mnchester
              </Text>
            </View>
          </View>
          {/* end here */}
        </View>
      </ScrollView>
      {/* modal start from here */}

      <View style={styles.centeredView}>
        <Modal
       hasbackdrop="true"
       backdropColor='black'
       backdropOpacity={0.7}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalv1}>
                <View style={styles.modalv2}>
                  <Text style={styles.mtxt8}>
                    {' '}
                    Are you sure you want to reject{' '}
                  </Text>
                  <Text style={styles.mtxt8}>Daniel's Bet ?</Text>
                </View>
              </View>
              <View style={styles.modalv3}>
                <Text style={styles.mtxt9}>
                  By Rejecting you will loose the Chance to win a
                </Text>
                <Text style={styles.mtxt9}>
                  pontential return of 0.00024 BTC.
                </Text>
              </View>
              <View style={styles.modalv4}>
                <Image
                  source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/cross.png')}
                  style={styles.imgv}
                />
              </View>

              <View style={styles.mtouch}>
                <TouchableOpacity
                  style={styles.toucht}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Reject The Bet</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* end here */}
    </View>
  );
};

export default ModalA;

const styles = StyleSheet.create({
  one: {
    backgroundColor: 'rgb(100,28,154)',
    height: height * 0.08,
    justifyContent: 'center',
  },
  two: {
    backgroundColor: 'rgb(100,28,154)',
    height: height * 0.048,
  },
  three: {},
  txt: {
    color: 'gray',
    //    backgroundColor:'red',
    textAlign: 'center',
    //    height:height*0.03
  },
  four: {
    //    backgroundColor:'green',

    width: width * 0.26,
    justifyContent: 'center',
  },
  five: {
    //    backgroundColor:'cyan',
    width: width * 0.4,
    justifyContent: 'center',
  },
  six: {
    //    backgroundColor:'green',
    width: width * 0.25,
    justifyContent: 'center',
  },
  txt2: {
    color: 'white',
    textAlign: 'center',
    //    backgroundColor:'rgb(100,28,154)',
    //    height:height*0.04,
  },
  txt1: {
    color: 'gray',
    textAlign: 'center',
  },
  seven: {
    // backgroundColor: 'blue',
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  touch1: {
    backgroundColor: 'white',
    height: height * 0.05,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'gray',

    borderWidth: 1,
  },
  touch2: {
    backgroundColor: 'white',
    height: height * 0.05,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'gray',

    borderWidth: 1,
  },
  touch3: {
    backgroundColor: 'rgb(100,28,154)',
    height: height * 0.05,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'gray',

    borderWidth: 1,
  },
  eight: {
    // backgroundColor: 'red',
    height: height * 0.07,
    justifyContent: 'center',
  },
  txt6: {
    fontSize: 23,
    fontWeight: 'bold',
    //    backgroundColor:'green',
    width: width * 0.3,
    textAlign: 'center',
  },
  nine: {
    // backgroundColor: 'blue',
    height: height * 0.2,
    shadowColor: 'gray',
  },
  ten: {
    backgroundColor: 'white',
    height: height * 0.188,
    width: width * 0.9,
    alignSelf: 'center',
    borderBottomWidth: 0.2,
    shadowOpacity: 10,
    shadowOffset: 0.2,
    borderRadius: 8,
  },
  txt8: {
    //    backgroundColor:'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  vie1: {
    // backgroundColor:'cyan',
    height: height * 0.03,
    justifyContent: 'center',
  },
  vie2: {
    // backgroundColor: 'green',
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txt9: {
    // backgroundColor: 'blue',
    width: width * 0.1,

    //    justifyContent:"center"
    // height: height * 0.08,
  },
  vie4: {
    // backgroundColor: 'red',
    height: height * 0.06,
    width: width * 0.12,
    borderRightWidth: 1,
    borderColor: 'gray',

    //    alignSelf:'center'
  },
  vie6: {
    flexDirection: 'row',
    //    justifyContent:'space-around',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  img1: {
    height: height * 0.033,
    width: width * 0.065,
    borderRadius: 20,
  },
  img2: {
    height: height * 0.033,
    width: width * 0.065,
    borderRadius: 20,
    alignSelf: 'center',
  },
  txt12: {
    fontWeight: 'bold',
  },
  vie13: {
    //    backgroundColor:'red',
    width: width * 0.1,
    justifyContent: 'center',
  },
  txt13: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  vie14: {
    // backgroundColor:'red',
    width: width * 0.15,
    justifyContent: 'center',
  },
  vie15: {
    // backgroundColor:'red',
    width: width * 0.09,
    justifyContent: 'center',
  },
  vie16: {
    backgroundColor: 'gray',
    width: width * 0.17,
    justifyContent: 'center',
    borderRadius: 20,
    height: height * 0.034,
    alignSelf: 'center',
  },
  vie17: {
    // backgroundColor:'blue',
    width: width * 0.2,
    height: height * 0.04,
    justifyContent: 'center',
  },
  txt17: {
    fontWeight: 'bold',
  },
  vie23: {
    flexDirection: 'row',
  },
  vie21: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    borderBottomWidth: 0.17,
    borderColor: 'gray',
  },
  vie24: {
    //   backgroundColor:'red',
    width: width * 0.18,
    height: height * 0.033,
    //   justifyContent:'center'
  },
  vie25: {
    //   backgroundColor:'green',
    width: width * 0.21,
    height: height * 0.033,
    //   justifyContent:'center'
  },
  touch4: {
    backgroundColor: 'rgb(95,78,78)',
    height: height * 0.03,
    justifyContent: 'center',
    borderRadius: 30,
    width: width * 0.17,
  },
  touch5: {
    backgroundColor: 'gray',
    height: height * 0.03,
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    width: width * 0.17,
  },
  txt16: {
    textAlign: 'center',
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  txt18: {
    textAlign: 'center',
    color: 'rgb(100,28,154)',
    fontWeight: 'bold',
    fontSize: 12,
  },
  vie19: {
    //   backgroundColor:'red',
    justifyContent: 'center',
    width: width * 0.18,
  },
  txt41: {
    textAlign: 'center',
    fontSize: 12,
  },
  vie28: {
    //   backgroundColor:'red',
    height: height * 0.04,
    justifyContent: 'center',
  },
  txt44: {
    textAlign: 'center',
    color: 'rgb(100,28,154)',
    fontSize: 13,
  },

  vie31: {
    // backgroundColor:'red',
    flexDirection: 'row',
    width: width * 0.6,
  },
  img34: {
    height: height * 0.033,
    width: width * 0.35,
  },
  vie45: {
    width: width * 0.35,
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  vie47: {
    flexDirection: 'row',
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  vie51: {
    // backgroundColor:'red',
    width: width * 0.23,
  },

  // strt from here
  centeredView: {
    height: height * 1,
   
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    height: height * 0.4,
    width: width * 0.98,
    backgroundColor: 'white',
    borderRadius: 30,
   
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalv1: {
    // backgroundColor:'green',
    height: height * 0.12,
    width: width * 0.9,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  mtxt8: {
    fontSize: 18,
    // backgroundColor:'red',
    height: height * 0.03,
    width: width * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalv2: {
    //  backgroundColor:'red',
    height: height * 0.07,
    justifyContent: 'flex-end',
  },
  modalv3: {
    //  backgroundColor:'red',
    height: height * 0.07,
    justifyContent: 'center',
  },
  mtxt9: {
    color: 'gray',
    textAlign: 'center',
    height: height * 0.023,
  },
  modalv4: {
    //  backgroundColor:'green',
    height: height * 0.1,
    width: width * 1,
    justifyContent: 'center',
  },
  imgv: {
    height: height * 0.095,
    width: width * 0.2,
    alignSelf: 'center',
  },
  mtouch: {
    //  backgroundColor:'red',
    height: height * 0.078,
    width: width * 1,
    justifyContent: 'flex-end',
  },
  toucht: {
    backgroundColor: 'red',
    height: height * 0.06,
    justifyContent: 'center',
    width: width * 0.66,
    alignSelf: 'center',
    borderRadius: 25,
  },
});
