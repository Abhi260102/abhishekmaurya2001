import {StyleSheet, Text, View, Dimensions, Image,TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import Widraw from './Widraw';
const {width, height} = Dimensions.get('window');
const Onbording1 = ({navigation}) => {
  return (
  <ScrollView>
    <View style={styles.main1}>
    
      <View style={styles.six}>
      <View style={styles.one}>

        <Image
          source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/onbord.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.three}>
        <Text style={styles.txt1}>Professionals you can trust</Text>
      </View>
      <View style={styles.four}>
        <Text style={styles.txt2}>
          Lorem ipsum dolor sit ameet,consectetur adipiscing
        </Text>
        <Text style={styles.txt2}>
          elit. Aenean euismod bibendum laoreet.proin
        </Text>
        <Text style={styles.txt2}>
          gravida dolor sit amet lacus accumsan et viverra
        </Text>
        <Text style={styles.txt2}>
          justo commodo.proin sodales pulvinar tempor.Cum
        </Text>
        <Text style={styles.txt2}>
          sociis nataque penatibus et magnis dis parturient
        </Text>
        <Text style={styles.txt2}>montes</Text>
      </View>
<View style={styles.eight}>
  <View style={styles.nine}>
    <View style={styles.ten}>
  <Image source={require('/Users/administrator/Desktop/abhi5/Pages/M1/Images/dot.png')}
  style={styles.img3}/>
  </View>
  <View style={styles.eleven}>
  <TouchableOpacity onPress={()=>navigation.navigate('Onbording2')}>
    <View style={styles.twelve}>
 <Text style={styles.txt4}>→</Text>
 
 </View>
</TouchableOpacity>
  </View>
  </View>
  </View>

<View>
  <TouchableOpacity onPress={()=>alert('skip')}>
  <Text style={styles.txt6}>Skip</Text>
  </TouchableOpacity>
</View>


    </View>
    </View>
    </ScrollView>
  );
};

export default Onbording1;

const styles = StyleSheet.create({
  six: {
    height: height * 1,
    backgroundColor: 'rgb(73,20,127)',
    width: width * 0.98,
    alignSelf: 'center',
  },
  one: {
    // backgroundColor: 'blue',
    height: height * 0.5,
    justifyContent: 'flex-end',
  },
  img: {
    height: height * 0.5,
    width: width * 0.93,
  },
  three: {
    // backgroundColor:'red',
    height: height * 0.1,
    width: width * 0.8,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  txt1: {
    color: 'white',
    fontWeight: 'bold',
    // backgroundColor:'green',
    width: width * 0.7,
    height: height * 0.1,
    textAlign: 'center',
    fontSize: 33,
    alignSelf: 'center',
  },
  four: {
    // backgroundColor:'green',
    height: height * 0.163,
    justifyContent: 'flex-end',
    width:width*0.88,
    alignSelf:'center'
  },
  txt2: {
    textAlign: 'center',
    color: 'white',
    fontSize:14,
    // backgroundColor:'blue',
    height:height*0.023

    
  },
  eight:{
    // backgroundColor:'red',
    height:height*0.14
  },
  img3:{
    height:height*0.025,
    width:width*0.18,
  },
  img4:{
    height:height*0.07,
    width:width*0.16,
   
   
  },
  nine:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  ten:{
    // backgroundColor:'green',
    height:height*0.07,
    width:width*0.4,
    justifyContent:'flex-end',
    
  },
  eleven:{
  // backgroundColor:'blue',
    width:width*0.16,
    height:height*0.1,
    justifyContent:'flex-end',
   
  },
  txt4:{
    color:'gray',
    fontSize:28,
    alignSelf:'center'
  },
  twelve:{
    backgroundColor:'white',
    borderRadius:30,
    height:height*0.055,
    width:width*0.12,
    justifyContent:'center',
    borderWidth:1,
    borderColor:'gray'

   
  },
  txt6:{
    color:'white',
    fontSize:17,
    // backgroundColor:'red',
    width:width*0.24,
    textAlign:'center'

  },
 
});
