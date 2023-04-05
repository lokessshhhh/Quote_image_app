//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CustomColors} from '../../theme/CustomColors';
import {Img} from '../../theme/Img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';


const CustomHeader = () => {

    return (
        <View
          style={{
            height: hp(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity style={{marginLeft: wp(2.5)}}>
            <Image
              resizeMode="contain"
              source={Img.leftarrow}
              style={{height: hp(2.8), width: hp(2.8)}}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={Img.home}
                style={{height: hp(3.5), width: hp(3.5)}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={Img.save}
                style={{
                  height: hp(2.9),
                  width: hp(2.9),
                  marginHorizontal: wp(4),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
    );
};

export default CustomHeader;
