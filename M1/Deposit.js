import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Alert,
  Linking,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ScreenStackHeaderRightView} from 'react-native-screens';

import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';
const {width, height} = Dimensions.get('window');
const Deposit = ({navigation}) => {
  return (
    <ScrollView>
    <View
      style={styles.main}>
      <View
        style={styles.one}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={styles.two}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ModalA')}>
              <Text style={styles.txt1}>←</Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.three}>
            <Text style={styles.txt2}>
              Deposit
            </Text>
          </View>
        </View>
      </View>
      <View
        style={styles.four}>
        <Image
          source={require('/Users/administrator/Desktop/abhi5/Src/av.png')}
          style={styles.img1}
        />
      </View>
      <View
        style={styles.six}>
        <View
          style={styles.seven}>
          <Image
            source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
            style={styles.img2}
          />
        </View>

        <View
          style={styles.eight}>
          <Text
            style={styles.txt4}>
            You're Registered Almost there.Make A Deposit and get Started
          </Text>
        </View>
      </View>
      <View
        style={styles.nine}>
        <Text style={styles.txt5}>
          Choose One
        </Text>
      </View>

      <View
        style={styles.eleven}>
        <TouchableOpacity onPress={() => Alert.alert('online banking')}>
          <View
            style={styles.twelve}>
            <View
              style={styles.thirteen}>
              <Image
                source={require('/Users/administrator/Desktop/abhi5/Src/icons8-online-banking-64.png')}
                style={styles.img5}
              />
            </View>

            <Text
              style={styles.txt8}>
              Online Banking
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Paypal')}>
          <View
            style={styles.fourteen}>
            <View
              style={styles.fifteen}>
              <Image
                source={require('/Users/administrator/Desktop/abhi5/Src/paypal-removebg-preview.png')}
                style={styles.img7}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={styles.sixteen}>
        <TouchableOpacity onPress={() => Alert.alert('Debit card')}>
          <View
            style={styles.seventeen}>
            <View style={{}}>
              <View
                style={styles.eighteen}>
                <Image
                  source={require('/Users/administrator/Desktop/abhi5/Src/visa-removebg-preview.png')}
                  style={styles.nineteen}
                />
              </View>
              <View
                style={styles.twenty}>
                <Image
                  source={require('/Users/administrator/Desktop/abhi5/Src/master.webp')}
                  style={styles.img8}
                />
              </View>
            </View>

            <View
              style={styles.twenty1}>
              <Text style={styles.txt9}>
                Debit Card
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Crypto')}>
          <View
            style={styles.twenty2}>
            <View
              style={styles.twenty3}>
              <Image
                source={require('/Users/administrator/Desktop/abhi5/Src/crypto-removebg-preview.png')}
                style={styles.img11}
              />
            </View>
            <View
              style={styles.twenty4}>
              <Text
                style={styles.txt11}>
                Crypto
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};
export default Deposit;
const styles = StyleSheet.create({
  main:{
    backgroundColor: '	rgb(91,38, 153)',
    width: '100%',
    height:height*1,
    alignSelf: 'center',
  },
  one:{
     // backgroundColor: 'red',
     height: height * 0.13,
  },
  two:{
        //  backgroundColor: 'yellow',
        justifyContent: 'center',
        width: width * 0.15,
        alignItems: 'center',
  },
txt1:{
  fontSize: 30, color: 'white'
},
three:{
   // backgroundColor: 'blue',
   width: width * 0.7,
   height: height * 0.2,
   justifyContent: 'center',
   alignItems: 'center',
   // alignSelf:'center
},
txt2:{
  fontSize: 35, fontWeight: 'bold', color: 'white'
},
four:{
    //  backgroundColor: 'red',
    height: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
},
img1:{
  width: width * 0.74, height: height * 0.06
},
six:{
      // backgroundColor: '	rgb(91,38, 143)',
      height: height * 0.13,
      width: width * 0.9,
      alignSelf: 'center',
      borderColor: 'white',
      borderWidth: 0.5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
},
seven:{
   // backgroundColor: 'red',
   height: height * 0.054,
   width: width * 0.1,
},
img2:{
  width: width * 0.07,
  height: height * 0.032,
  alignSelf: 'center',
  // backgroundColor:'red',

  alignSelf: 'flex-end',
},

eight:{
   //  backgroundColor: 'blue',
   height: height * 0.06,
   width: width * 0.82,
   alignItems: 'center',
   // alignSelf:'center'
},
txt4:{
   // backgroundColor: 'green',
   width: width * 0.75,
   height: height * 0.06,
   fontSize: 17,
   color: 'white',
   // justifyContent:'center',
   //  alignItems:'center',
   //  alignSelf:'center',
},
nine:{
    // backgroundColor: 'red',
    height: height * 0.09,
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
},

txt5:{
  fontWeight: 'bold', fontSize: 20, color: 'white'
},
eleven:{
   //  backgroundColor: 'red',
   height: height * 0.09,
   width: width * 1,
   justifyContent: 'space-evenly',
   alignSelf: 'center',
   flexDirection: 'row',
   alignItems: 'center',
},
twelve:{
  backgroundColor: 'white',
  width: width * 0.45,
  height: height * 0.077,
  borderRadius: 7,
  // justifyContent:'center',
  flexDirection: 'row',
},
thirteen:{
  heigh: height * 0.1,
  // backgroundColor: 'pink',
  justifyContent: 'center',
  width: width * 0.13,
  // alignSelf: 'center',
},
img5:{
     // backgroundColor: 'red',
     height: height * 0.04,
     width: width * 0.08,
     alignSelf: 'center',
},
txt8:{
      // backgroundColor: 'blue',
      width: width * 0.28,
      fontSize: 16,
      alignSelf: 'center',
      // alignSelf: 'center',
      // alignItems:'center'
      textAlign: 'center',
},
fourteen:{
  backgroundColor: 'white',
  width: width * 0.45,
  height: height * 0.077,
  borderRadius: 7,
},
fifteen:{
    // backgroundColor: 'red',
    width: width * 0.44,
    height: height * 0.08,
    justifyContent: 'center',
},

img7:{
  height: height * 0.04,
  width: width * 0.26,
  alignSelf: 'center',
},

sixteen:{ // backgroundColor: 'red',
  height: height * 0.09,
  width: width * 1,
  justifyContent: 'space-evenly',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',},
  seventeen:{
    backgroundColor: 'white',
    width: width * 0.45,
    height: height * 0.077,
    borderRadius: 7,
    flexDirection: 'row',
  },
  eighteen:{
         // backgroundColor: 'red',
         width: width * 0.125,
         height: height * 0.043,
         justifyContent: 'center',
  },
  nineteen:{
    width: width * 0.14,
    height: height * 0.034,
    alignSelf: 'center',
  },
twenty:{
      // backgroundColor: 'red',
      width: width * 0.13,
},
img8:{
  width: width * 0.099,
  height: height * 0.03,
  alignSelf: 'center',
},
twenty1:{
    // backgroundColor: 'red',
    justifyContent: 'center',
    width: width * 0.26,
    height: height * 0.07,
},
txt9:{
  fontSize: 16, alignSelf: 'center'
},
twenty2:{
  backgroundColor: 'white',
  width: width * 0.45,
  height: height * 0.077,
  borderRadius: 7,
  flexDirection: 'row',
},
twenty3:{
    // backgroundColor: 'red',
    height: height * 0.078,
    width: width * 0.14,
    justifyContent: 'center',
},
img11:{
  width: width * 0.12,
  height: height * 0.06,
  alignSelf: 'center',
},
twenty4:{
     // backgroundColor: 'red',
     width: width * 0.2,
     justifyContent: 'center',
     height: height * 0.07,
},
txt11:
{
  fontSize: 16,
                  alignSelf: 'center',
                  // backgroundColor: 'green',
                  // width: width * 0.2,
},

});
