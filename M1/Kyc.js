import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
const Country = [
  {label: 'India', value: ''},
  {label: 'USA', value: ''},
  {label: 'Rusia', value: ''},
  {label: 'Japan', value: ''},
  {label: 'England', value: ''},
  {label: 'Austria', value: ''},
  {label: 'West Indies', value: ''},
  {label: 'Srilanka', value: ''},
];
const {height, width} = Dimensions.get('window');
const Kyc = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.five}></View>
        <View style={styles.one}>
          <View style={styles.two}>
            <View style={styles.four}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.text1}>←</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.three}>
            <Text style={styles.text2}>KYC - Details</Text>
          </View>
        </View>
        <View style={{height: height * 0.02}}></View>
        <View style={styles.six}>
          <View style={styles.seven}>
            <Text style={styles.Text3}>Personal Information</Text>
          </View>
          {/* input start from here/ */}

          <View style={styles.eight}>
            <View style={styles.ten}>
              <View style={styles.nine}>
                <Text style={styles.text4}>First Name</Text>
                <TextInput
                  style={styles.textin}
                  placeholder=""
                  placeholderTextColor="red"
                />
              </View>
              <View style={styles.eleven}>
                <Image
                  source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
                  style={styles.img1}
                />
              </View>
            </View>
          </View>
          {/* end here */}
          {/* input start from here/ */}

          <View style={styles.eight1}>
            <View style={styles.ten}>
              <View style={styles.nine}>
                <Text style={styles.text4}>Last Name</Text>
                <TextInput
                  style={styles.textin}
                  placeholder=""
                  placeholderTextColor="red"
                />
              </View>
              <View style={styles.eleven}>
                <Image
                  source={require('/Users/administrator/Desktop/abhi5/Src/checkbox-removebg-preview.png')}
                  style={styles.img1}
                />
              </View>
            </View>
          </View>
          {/* end here */}
          {/* input start from here/ */}

          <View style={styles.eight12}>
            <View style={styles.nine1}>
              <Text style={styles.text41}>Street Address</Text>
              <TextInput
                style={styles.textin1}
                placeholder=""
                placeholderTextColor="red"
              />
            </View>
          </View>
          {/* end here */}

          {/* input start from here/ */}

          <View style={styles.eight12}>
            <View style={styles.nine1}>
              <Text style={styles.text42}>City </Text>
              <TextInput
                style={styles.textin1}
                placeholder=""
                placeholderTextColor="red"
              />
            </View>
          </View>
          {/* end here */}
          {/* input start from here/ */}

          <View style={styles.eight12}>
            <View style={styles.nine1}>
              <Text style={styles.text43}>ZIP/Area code</Text>
              <TextInput
                style={styles.textin1}
                placeholder=""
                placeholderTextColor="red"
              />
            </View>
          </View>
          {/* end here */}
          {/* input start from here/ */}

          <View style={styles.eight12}>
            <View style={styles.nine1}>
              <Text style={styles.text44}>Citizenship</Text>
              <TextInput
                style={styles.textin1}
                placeholder=""
                placeholderTextColor="red"
              />
            </View>
          </View>
          {/* end here */}
          {/* <View style={styles.eight12}>
              <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.placeholderStyle}
              data={Country}
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
            /></View> */}
          <View style={styles.twelve}>
            <TouchableOpacity
              style={styles.touch2}
              onPress={() => navigation.navigate('Widraw')}>
              <Text style={styles.text15}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Kyc;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(100,28,154)',
    height: height * 1,
    width: width * 1,
  },
  one: {
    //   backgroundColor:'red',
    height: height * 0.07,
    width: width * 1,
    justifyContent: 'space-between',

    flexDirection: 'row',
  },
  two: {
    //   backgroundColor:'blue',
    width: width * 0.17,
    height: height * 0.047,
    justifyContent: 'center',
  },
  text1: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    //   backgroundColor:'yellow',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    //   backgroundColor:'gray',
    width: width * 0.4,
    textAlign: 'center',
  },
  three: {
    //   backgroundColor:'cyan',
    width: width * 0.7,
    height: height * 0.04,
    justifyContent: 'center',
  },
  four: {
    backgroundColor: 'green',
    width: width * 0.11,
    height: height * 0.041,
    alignSelf: 'center',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  five: {
    // backgroundColor:'green',
    height: height * 0.07,
  },
  six: {
    backgroundColor: 'white',
    height: height * 0.9,
    width: width * 1,
    borderRadius: 25,
  },
  seven: {
    // backgroundColor: 'red',
    width: width * 0.57,
    height: height * 0.1,
    justifyContent: 'center',
  },
  Text3: {
    //   backgroundColor:'green',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  eight: {
    //   backgroundColor:'blue',
    height: height * 0.08,
    justifyContent: 'center',
  },
  nine: {
    //   backgroundColor:'gray',
    height: height * 0.066,
    width: width * 0.77,
    //   alignSelf:'center'
    justifyContent: 'center',
  },
  textin: {
    // backgroundColor: 'green',
    height: height * 0.034,
    width: width * 0.67,
    // alignSelf: 'flex-end',
    alignSelf: 'center',
    fontSize: 17,
  },
  img1: {
    height: height * 0.033,
    width: width * 0.07,
  },
  ten: {
    flexDirection: 'row',
    alignSelf: 'center',
    // backgroundColor:'pink',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 2,
    shadowColor: 'gray',
  },
  text4: {
    // backgroundColor:'red',
    width: width * 0.27,
    textAlign: 'center',
    color: 'gray',
  },
  eleven: {
    //   backgroundColor:'red',
    justifyContent: 'center',
    width: width * 0.1,
    justifyContent: 'center',
    // alignSelf:'center'
  },
  eight1: {
    height: height * 0.1,
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  nine1: {
    // alignSelf:'center',
    // backgroundColor:'pink',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 2,
    shadowColor: 'gray',

    width: width * 0.88,
    height: height * 0.068,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  eight12: {
    height: height * 0.088,
    justifyContent: 'center',
    // backgroundColor:'red',
  },
  textin1: {
    // backgroundColor: 'green',
    height: height * 0.034,
    width: width * 0.77,
    alignSelf: 'center',
    fontSize: 17,
  },
  text41: {
    // backgroundColor:'red',
    width: width * 0.35,
    textAlign: 'center',
    color: 'gray',
  },
  text42: {
    // backgroundColor:'red',
    width: width * 0.15,
    textAlign: 'center',
    color: 'gray',
  },
  text43: {
    // backgroundColor:'red',
    width: width * 0.32,
    textAlign: 'center',
    color: 'gray',
  },
  text44: {
    // backgroundColor:'red',
    width: width * 0.27,
    textAlign: 'center',
    color: 'gray',
  },
  twelve: {
    //    backgroundColor:'red',
    height: height * 0.1,
    width: width * 1,
    justifyContent: 'center',
  },
  touch2: {
    backgroundColor: 'rgb(100,28,154)',
    height: height * 0.05,
    width: width * 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  text15: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  dropdown: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 2,
    shadowColor: 'gray',
    shadowOffset: 0.9,
    width: width * 0.88,
    height: height * 0.068,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  selectedTextStyle: {
    color: 'gray',
  },
});
