import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {blueGrey100} from 'react-native-paper/lib/typescript/styles/colors';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
const data = [
  {label: '+91', value: ''},
  {label: '+92', value: ''},
  {label: '+93', value: ''},
  {label: '+94', value: ''},
  {label: '+95', value: ''},
  {label: '+96', value: ''},
  {label: '+97', value: ''},
  {label: '+97', value: ''},
];

const {width, height} = Dimensions.get('window');
const Register = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  return (
    <ScrollView>
    <View style={styles.main}>
      <View style={styles.third}>
        <View style={styles.second}>
          <View style={styles.fifth}>
            <View style={styles.fourth}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Onbording2')}>
                <Text style={styles.Text1}>←</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.six}>
              <Text style={styles.Text2}>Register</Text>
            </View>
          </View>
        </View>

        <View style={styles.seven}>
          <Image
            source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/Logo.png')}
            style={styles.img1}></Image>
        </View>
      </View>
      <View style={styles.eight}>
        <View style={styles.nine}>
          <View style={styles.thirteen}>
            <View>
              <View style={styles.ten}>
                <Text style={styles.Text3}>Address</Text>
              </View>
              {/* <View style={{flexDirection: 'row', 
          justifyContent: 'space-between'
          }}> */}
              <View style={styles.eleven}>
                <TextInput
                  style={styles.Text4}
                  placeholder="  "
                  placeholderTextColor={'red'}
                  autoCorrect={'false'}
                />
              </View>
              {/* <View style={{backgroundColor:'red',width:width*0.1}}>
            <Image source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
            style={{width:width*0.06,height:height*0.03}}
            />
            </View> */}

              {/* </View> */}
            </View>
            <View style={styles.twelth}>
              <Image
                style={styles.img2}
                source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.fourteen}>
        <View>
          <View style={styles.nine}>
            <View style={styles.twenty}>
              <View style={styles.ten}>
                <Text style={styles.Text5}>City</Text>
              </View>
              {/* <View style={{flexDirection: 'row', 
          justifyContent: 'space-between'
          }}> */}
              <View style={styles.eleven}>
                <TextInput
                  style={styles.Text4}
                  placeholder="  "
                  placeholderTextColor={'red'}
                  autoCorrect={'false'}
                />
              </View>
              {/* <View style={{backgroundColor:'red',width:width*0.1}}>
            <Image source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
            style={{width:width*0.06,height:height*0.03}}
            />
            </View> */}

              {/* </View> */}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sixteen}>
        <View style={styles.seventeen}>
          <View style={styles.fifteen}>
            <View style={styles.thirteen}>
              <View>
                <View style={styles.ten}>
                  <Text style={styles.Text5}>State</Text>
                </View>
                {/* <View style={{flexDirection: 'row', 
          justifyContent: 'space-between'
          }}> */}
                <View style={styles.twenty2}>
                  <TextInput
                    style={styles.Text15}
                    placeholder="  "
                    placeholderTextColor={'red'}
                    autoCorrect={'false'}
                  />
                </View>
                {/* <View style={{backgroundColor:'red',width:width*0.1}}>
            <Image source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
            style={{width:width*0.06,height:height*0.03}}
            />
            </View> */}

                {/* </View> */}
              </View>
            </View>
          </View>
          <View style={styles.eighteen}>
            <View style={styles.thirteen}>
              <View>
                <View style={styles.ten}>
                  <Text style={styles.Text5}>Zip</Text>
                </View>
                {/* <View style={{flexDirection: 'row', 
          justifyContent: 'space-between'
          }}> */}
                <View style={styles.twenty1}>
                  <TextInput
                    style={styles.Text6}
                    placeholder="  "
                    placeholderTextColor={'red'}
                    // autoCorrect={'false'}
                    keyboardType="numeric"
                  />
                </View>
                {/* <View style={{backgroundColor:'red',width:width*0.1}}>
            <Image source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
            style={{width:width*0.06,height:height*0.03}}
            />
            </View> */}

                {/* </View> */}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.twenty3}>
        <Text style={styles.Text7}>Start Over</Text>
      </View>
      <View style={styles.twenty4}>
        <View style={styles.twenty5}>
          <View style={styles.twenty5}>
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.placeholderStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.twenty6}>
            <Text style={styles.Text9}>Mobile Number</Text>
            <TextInput
              style={styles.Text8}
              placeholder="  "
              placeholderTextColor={'yellow'}
            />
          </View>
        </View>
      </View>
      <View style={styles.twenty7}>
        <View style={styles.twenty8}>
          <View style={styles.thirty}>
            <Text style={styles.Text12}>Promo Code</Text>
          </View>
          <TextInput
            style={styles.Text11}
            placeholder=""
            placeholderTextColor={'blue'}
          />
        </View>
      </View>
      <View style={styles.thirty4}>
        <ScrollView>
          <View style={styles.twenty9}>
            <View style={styles.thirty3}>
              <View style={styles.thirty2}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
              </View>

              <View style={styles.thirty1}>
                <Text style={styles.Text16}>
                  I am over 21+ year old and I acknowledge that I am not allowed
                  to have any other person to access or use my gaming account
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.twenty9}>
            <View style={styles.thirty3}>
              <View style={styles.thirty2}>
                <CheckBox 
                  value={isSelected1}
                  onValueChange={setSelection1}
                  style={styles.checkbox}
                />
              </View>

              <View style={styles.thirty1}>
                <Text style={styles.Text16}>
                  I am over 21+ year old and I acknowledge that I am not allowed
                  to have any other person to access or use my gaming account
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.thirty5}>
        <TouchableOpacity
          style={styles.touch1}
          onPress={() => navigation.navigate('Kyc')}>
          <Text style={styles.Text19}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '	rgb(99,28, 154)',
    width: '100%',
    height: '110%',
    alignSelf: 'center',
  },
  second: {
    height: height * 0.067,
    width: width * 1,
  },
  third: {
    //   backgroundColor: 'red',
    height: height * 0.2,
    width: width * 1,
    justifyContent: 'flex-end',
  },

  fourth: {
    //    backgroundColor: 'yellow',
    justifyContent: 'center',
    width: width * 0.15,
    height: height * 0.05,
    alignItems: 'center',
  },
  fifth: {
    flexDirection: 'row',
  },
  Text1: {
    fontSize: 30,
    color: 'white',
  },
  six: {
    //   backgroundColor: 'blue',
    width: width * 0.7,
    height: height * 0.07,
    //   justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:'center'
  },
  Text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  seven: {
    // backgroundColor: 'green',
    height: height * 0.06,
    width: width * 1,
  },
  img1: {
      // backgroundColor: 'blue',
    height: height * 0.066,
    width: width * 0.9,
    alignSelf: 'center',
  },
  eight: {
    // backgroundColor: 'red',
    height: height * 0.11,
    justifyContent: 'flex-end',
  },
  nine: {
    backgroundColor: 'rgb(100,28, 154)',
    width: width * 0.9,
    height: height * 0.07,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  ten: {
    height: height * 0.03,
    justifyContent: 'flex-end',
    width: width * 0.2,
    // backgroundColor: 'blue',
  },
  Text3: {
    alignSelf: 'center',
    color: 'gray',
  },
  eleven: {
    // backgroundColor: 'red',
    width: width * 0.8,
    justifyContent: 'center',
    // alignSelf:'center',

    height: height * 0.035,
  },
  Text4: {
    alignSelf: 'center',
    // backgroundColor:'red',
    width: width * 0.72,
    height: height * 0.037,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  img2: {
    width: width * 0.064,
    height: height * 0.03,
  },
  twelth: {
    // backgroundColor:'green',
    justifyContent: 'center',
  },
  thirteen: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  fourteen: {
    // backgroundColor: 'red',
    width: width * 1,
    height: height * 0.1,
    justifyContent: 'center',
  },
  Text5: {
    color: 'gray',
    // backgroundColor:'red',
    width: width * 0.14,
    textAlign: 'center',
  },
  fifteen: {
    backgroundColor: 'rgb(100,28, 154)',
    width: width * 0.49,
    height: height * 0.07,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  sixteen: {
    // backgroundColor: 'red',
    width: width * 1,
    height: height * 0.09,
    justifyContent: 'center',
  },
  seventeen: {
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  eighteen: {
    backgroundColor: 'rgb(100,28, 154)',
    width: width * 0.35,
    height: height * 0.07,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  Text6: {
    alignSelf: 'center',
    // backgroundColor:'red',
    width: width * 0.25,
    height: height * 0.037,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  twenty1: {
    // backgroundColor:'red',
    width: width * 0.35,
  },
  twenty2: {
    //  backgroundColor:'red',
    width: width * 0.48,
  },
  Text15: {
    alignSelf: 'center',
    // backgroundColor:'red',
    width: width * 0.4,
    height: height * 0.037,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  twenty3: {
    // backgroundColor: 'red',
    width: width * 0.9,
    height: height * 0.05,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Text7: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  twenty4: {
    // backgroundColor:'red',
    width: width * 1,
    height: height * 0.089,

    justifyContent: 'center',
  },
  twenty5: {
    // backgroundColor:'blue',
    // justifyContent:'center'
  },
  twenty6: {
    // backgroundColor:'blue',
    justifyContent: 'center',
    height: height * 0.066,
    width: width * 0.7,
    borderColor: 'white',
    borderWidth: 1.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  Text8: {
    height: height * 0.033,
    width: width * 0.65,
    // borderColor: 'white',
    // borderWidth: 1,
    // borderTopRightRadius:5,
    // borderBottomRightRadius:5,
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    // backgroundColor:'pink'
  },

  dropdown: {
    height: height * 0.066,
    width: width * 0.2,
    borderColor: 'white',
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

    // backgroundColor:'pink',
    // alignSelf:'center'
    // justifyContent:'center'
  },
  twenty5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Text9: {
    // backgroundColor:'green',
    width: width * 0.3,
    textAlign: 'center',
    color: 'gray',
  },
  selectedTextStyle: {
    color: 'gray',

    // backgroundColor:'red',

    // textAligna:'center'
  },
  twenty7: {
    // backgroundColor: 'red',
    height: height * 0.083,
    width: width * 1,
    justifyContent: 'flex-end',
  },
  Text11: {
    alignSelf: 'flex-end',
    // backgroundColor:'green',
    width: width * 0.85,
    height: height * 0.037,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  twenty8: {
    // backgroundColor:'blue',
    width: width * 0.9,
    height: height * 0.066,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  Text12: {
    // backgroundColor:'green',
    width: width * 0.3,
    // height:height*0.03,
    textAlign: 'center',
    color: 'gray',
  },
  thirty: {
    // backgroundColor:'red',
    width: width * 0.3,
    height: height * 0.03,
    justifyContent: 'flex-end',
  },
  twenty9: {
    // backgroundColor: 'red',
    height: height * 0.075,
    width: width * 1,
    justifyContent: 'flex-end',
  },
  thirty1: {
    // backgroundColor:'green',
    height: height * 0.06,
    width: width * 0.75,
    // justifyContent:'flex-end',
    alignSelf: 'flex-end',
  },
  Text16: {color: 'white'},
  thirty2: {},
  thirty3: {
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: width * 0.88,
  },
  thirty4: {
    // backgroundColor:'red'
  },
  thirty5: {
    // backgroundColor:'red',
    height: height * 0.1,
    justifyContent: 'center',
  },
  touch1: {
    backgroundColor: 'white',
    height: height * 0.06,
    width: width * 0.75,
    // alignSelfL:'center'
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  Text19: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkbox:{
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    alignSelf: 'center'
  },
});
