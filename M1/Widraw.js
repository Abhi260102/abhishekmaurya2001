import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
const {height, width} = Dimensions.get('window');

const Widraw = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.Maincontainer}>
      <StatusBar barStyle="light-content" />
      <View style={{height: height * 0.035}}></View>

      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Kyc')}>
            <View style={styles.vie2}>
              <Text style={styles.txt}>←</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.vie3}>
            <Text style={styles.txt1}>Withdraw coin</Text>
          </View>
          <Ionicons name="qrcode" size={30} color="white" />
        </View>
      </View>

      <View style={{height: height * 0.03}}></View>
      <View style={styles.container2}>
        <View style={styles.con1}>
          <View style={{height: height * 0.003}}></View>
          <Text style={styles.txt3}>Bitcoin</Text>
          <View style={{height: height * 0.015}}></View>
          <Text style={styles.txt4}>$ 11,760.93</Text>
          <View style={{height: height * 0.015}}></View>
          <Text style={styles.txt5}>0.8934 BTC</Text>
        </View>
        {/* <View style={{height: height * 0.02}}></View> */}

        <View style={styles.one}>
          <View>
            <Text style={styles.txt6}>Withdraw Bitcoin</Text>
          </View>
          <View style={{height: height * 0.009}}></View>
          <View style={styles.two}>
            <Text style={styles.text12}>
              Enter the Details of the Wallet you would like{' '}
            </Text>
            <Text style={styles.text13}>to receive to</Text>
          </View>
        </View>
        <View style={styles.vie4}>
          <View style={{height: height * 0.032}}></View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.vie5}>
              <Text style={styles.text14}>
                Max Withdrawable Amount:{' '}
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  0.8914 BTC**{' '}
                </Text>
              </Text>
            </View>
            <View style={styles.vie6}>
              <Ionicons name="infocirlceo" size={27} color="white" />
            </View>
          </View>
          <View style={{height: height * 0.01}}></View>
          <View style={styles.vie7}>
            <TextInput
              style={styles.textin}
              placeholder=""
              placeholderTextColor={'black'}></TextInput>
          </View>
        </View>

        <View style={{height: height * 0.04}}></View>

        <View style={styles.container7}>
          <TouchableOpacity onPress={()=>navigation.navigate('Bet')}>
            <Text style={styles.txt8}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Widraw;

const styles = StyleSheet.create({
  Maincontainer: {
    height: height * 0.2,
    backgroundColor: 'rgb(94,29,159)',
  },
  container1: {
    width: width / 1.1,
    // backgroundColor:'red',
    height: height * 0.08,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },

  txt: {
    fontSize: 27,
    color: 'white',
    textAlign: 'center',
  },
  vie3: {
    justifyContent: 'center',
    // backgroundColor:'green',
    width: width / 1.3,
  },
  txt1: {
    textAlign: 'center',
    // backgroundColor:'red',
    width: width * 0.5,
    fontSize: 20,
    color: 'white',
    // fontWeight: 'bold',
  },
  container2: {
    // backgroundColor:'red',
    height: height * 1,

    backgroundColor: 'white',
  },

  txt3: {
    // backgroundColor:'red',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  container7: {
    width: width / 1.4,
    backgroundColor: 'rgb(75,15,135)',
    height: height * 0.063,
    alignSelf: 'center',
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  txt4: {
    //   backgroundColor:'red',
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  txt5: {
    // backgroundColor:'red',
    width: width * 1.03,
    color: 'white',
    textAlign: 'center',
  },

  con1: {
    backgroundColor: 'rgb(107,189,63)',
    height: height * 0.2,
    // width:width/1.2,
    // alignSelf:'center',
    justifyContent: 'center',
  },
  vie4: {
    //   backgroundColor:'green',
    width: width / 1.1,
    alignSelf: 'center',
  },
  txt6: {
    //   backgroundColor:'red',
    width: width * 0.6,
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vie5: {
    //   backgroundColor:'red',
    height: height * 0.06,
    width: width / 1.21,

    justifyContent: 'center',
  },
  vie6: {
    backgroundColor: 'gray',
    height: height * 0.036,
    borderRadius: 20,
    width: width * 0.07,
    alignItems: 'center',
  },
  vie7: {
    //    backgroundColor:'red',
    height: height * 0.074,
    width: width / 1.17,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.5,

    borderBottomWidth: 2,
    borderColor: 'grey',
    justifyContent: 'center',
  },
  text12: {
    //  backgroundColor:'red',
    color: 'gray',
    width: width * 0.91,
    textAlign: 'center',
  },
  text13: {
    // backgroundColor:'red',
    color: 'gray',
    width: width * 0.39,
    textAlign: 'center',
  },
  one: {
    backgroundColor: 'rgb(245,245,245)',
    width: width * 1,
    height: height * 0.13,
    justifyContent: 'center',
  },
  two: {},
  text14: {
    width: width * 0.81,
    // backgroundColor:'green',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'flex-end',
    color: 'gray',
    height: height * 0.04,
  },
  textin: {
    // backgroundColor:'red',
    width: width * 0.82,
    height: height * 0.04,
    alignSelf: 'flex-end',
    fontSize: 18,
  },
  txt8: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
