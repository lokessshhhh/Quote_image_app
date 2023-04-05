//import liraries
//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Onboardingstyles} from '../OnBoarding/Onboardingstyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import {Img} from '../../theme/Img';
import {Strings} from '../../theme/Strings';
import SelectorCard from '../../components/Homescreen/SelectorCard';
import {HomeScreenStyles} from '../../screens/HomePage/HomeScreenStyles';

const ArrowHeader = ({HeaderText}) => {
  return (
    <View style={HomeScreenStyles.headerRowView}>
      <Text style={HomeScreenStyles.headerText}>{HeaderText}</Text>

      <Image
        resizeMode="contain"
        source={Img.leftarrow}
        style={{height: hp(2.8), width: hp(2.8)}}
      />
    </View>
  );
};

export default ArrowHeader;
