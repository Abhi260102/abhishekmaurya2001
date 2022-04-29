import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';
const {height, width} = Dimensions.get('window');
const Bet = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView>
    <View style={styles.five}>
      <View style={styles.main}>
        <View style={styles.one}>
          <View style={styles.two}>
            <TouchableOpacity
              style={styles.touch1}
              onPress={() => navigation.navigate('Widraw')}>
              <Text style={styles.text1}>←</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.three}>
            <Text style={styles.text2}>Select Your Opponent</Text>
          </View>
        </View>
      </View>
      <View style={styles.four}>
        <Searchbar
          style={styles.search1}
          placeholder="Find more friends"
          onChangeText={onChangeSearch}
          value={searchQuery}
          // icon={()=><MaterialCommunityIcon name="SearchBar" size={30} color='gray'/>}
        />
      </View>
      <View style={styles.six}>
        <View style={styles.twelve}>
          <View style={styles.seven}>
            <View style={styles.eight}>
              <Image
                source={require('/Users/administrator/Desktop/abhi5/Src/user1.png')}
                style={styles.img3}
              />
            </View>

            <View style={styles.nine}>
              <Text style={styles.text8}>Random Opponent</Text>
            </View>
            <View style={styles.ten}>
              <View style={styles.eleven}>
                <Text style={styles.text7}>●</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.thirteen}>
        <View style={styles.fourteen}>
          <View style={styles.fifteen}>
            <Text style={styles.text9}>
              on no, looks like you have no friend just yet.
            </Text>
            <Text style={styles.text10}> Don't lete them miss out</Text>
          </View>
          <View style={styles.sixteen}>
            <TouchableOpacity onPress={() => alert('facebook')}>
              <View style={styles.ninteen}>
                <View style={styles.eighteen}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/facebook-logo.png')}
                    style={styles.img4}
                  />
                </View>
                <View style={styles.twenty}>
                  <Text style={styles.text12}>Connect With Facebook</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => alert('refer')}>
            <View style={styles.seventeen}>
              <View style={styles.ninteen1}>
                <View style={styles.eighteen1}>
                  <Image
                    source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/logoearn.png')}
                    style={styles.img41}
                  />
                </View>
                <View style={styles.twenty1}>
                  <Text style={styles.text121}>Refer and Earn</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.twenty2}>
        <TouchableOpacity
          style={styles.touch5}
          onPress={() => navigation.navigate('ModalA')}>
          <Text style={styles.text31}> Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Bet;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(100,28,154)',
    width: width * 1,
    height: height * 0.127,
    justifyContent: 'flex-end',
  },
  one: {flexDirection: 'row'},
  text1: {color: 'white', fontSize: 30, alignSelf: 'center'},
  text2: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 20,
    // backgroundColor:'red',
    width: width * 0.52,
    textAlign: 'center',
  },
  two: {
    // backgroundColor:'red',
    width: width * 0.17,
    height: height * 0.06,
  },
  three: {
    width: width * 0.7,
    height: height * 0.04,
    // backgroundColor:'green',
    justifyContent: 'center',
  },
  touch1: {
    // backgroundColor:'blue',
    width: width * 0.08,
    height: height * 0.04,
    alignSelf: 'center',
  },
  four: {
    //   backgroundColor:'red',
    height: height * 0.12,
    justifyContent: 'center',
  },
  search1: {
    width: width * 0.9,

    alignSelf: 'center',

    height: height * 0.06,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  six: {
    // backgroundColor: 'green',
    height: height * 0.1,
    justifyContent: 'center',
  },
  seven: {
    // backgroundColor: 'blue',
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img3: {
    height: height * 0.035,
    width: width * 0.085,
    borderRadius: 30,
    alignSelf: 'center',
  },
  eight: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    width: width * 0.15,
  },
  nine: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    width: width * 0.57,
  },
  ten: {
    // backgroundColor: 'yellow',
    width: width * 0.084,
    justifyContent: 'center',
  },
  text8: {
    fontSize: 18,
  },
  text7: {
    fontSize: 15,
    // backgroundColor:'white',
    width: width * 0.037,
    height: height * 0.022,
    color: 'rgb(100,28,154)',
    alignSelf: 'center',
  },
  eleven: {
    backgroundColor: 'white',
    borderRadius: 40,
    borderColor: 'gray',
    borderWidth: 2,
    height: height * 0.024,
    width: width * 0.05,
    justifyContent: 'center',
  },
  twelve: {
    // backgroundColor: 'red',
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    height: height * 0.08,
    borderBottomWidth: 2,
  },
  thirteen: {
    // backgroundColor: 'red',
    height: height * 0.4,
    justifyContent: 'center',
  },
  fourteen: {
    // backgroundColor: 'blue',
    height: height * 0.27,
    width: width * 0.9,
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: 'gray',
    shadowColor: 'gray',

    shadowOpacity: 0.1,
  },
  fifteen: {
    // backgroundColor: 'yellow',
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: 'center',
  },
  text9: {
    // backgroundColor: 'gray',
    textAlign: 'center',
    fontSize: 15,
    color: 'gray',
  },
  text10: {
    // backgroundColor: 'gray',
    textAlign: 'center',
    fontSize: 15,
    color: 'gray',
  },
  sixteen: {
    // backgroundColor: 'cyan',
    height: height * 0.085,
    justifyContent: 'center',
  },
  seventeen: {
    height: height * 0.085,
    // backgroundColor:'green',
    justifyContent: 'center',
  },
  img4: {
    width: width * 0.09,
    height: height * 0.055,
    alignSelf: 'center',
  },
  ninteen: {
    backgroundColor: 'rgb(50,91,148)',
    height: height * 0.066,
    width: width * 0.75,
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  eighteen: {
    justifyContent: 'center',
    //   backgroundColor:'blue',
    width: width * 0.15,
    height: height * 0.06,
  },
  twenty: {
    //   backgroundColor:'red',
    justifyContent: 'center',
    width: width * 0.52,
  },
  text12: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  twenty1: {
    justifyContent: 'center',
    width: width * 0.52,
    // backgroundColor:'red'
  },
  text121: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    // backgroundColor:'green',
    width: width * 0.42,
    textAlign: 'center',
  },
  ninteen1: {
    backgroundColor: 'rgb(105,157,186)',
    height: height * 0.066,
    width: width * 0.75,
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  eighteen1: {
    justifyContent: 'center',
    //   backgroundColor:'blue',
    width: width * 0.15,
    height: height * 0.06,
  },
  img41: {
    width: width * 0.101,
    height: height * 0.05,
    alignSelf: 'center',
    borderRadius: 35,
  },
  twenty2: {
    // backgroundColor:'red',
    height: height * 0.13,
    justifyContent: 'center',
  },
  text31: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  touch5: {
    backgroundColor: 'rgb(100,28,154)',
    height: height * 0.06,
    justifyContent: 'center',
    width: width * 0.68,
    alignSelf: 'center',
    borderRadius: 25,
  },
});
