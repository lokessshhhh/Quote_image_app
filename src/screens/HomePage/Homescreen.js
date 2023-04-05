//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
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
import ArrowHeader from '../../components/Homescreen/ArrowHeader';
import MainHeader from '../../components/Homescreen/MainHeader';
import {HomeScreenStyles} from './HomeScreenStyles';

const Categories = [
  {name: 'Sad', img: Img.sadcircle},
  {name: 'Life', img: Img.lifecircle},
  {name: 'Love', img: Img.lovecircle},
  {name: 'Happy', img: Img.happycircle},
  {name: 'Hope', img: Img.birdcircle},
  {name: 'Travel', img: Img.travelcircle},
  {name: 'Trust', img: Img.trustcircle},
  {name: 'Friends', img: Img.friendscircle},
];

class Homescreen extends Component {


  constructor(props) {
    super(props);
  }

  render() {

    return (
      <SafeAreaView style={Onboardingstyles.mainbg}>
        <MainHeader HeaderText={Strings.createquote} />
        <ScrollView style={{flexGrow: 1}}>
          <ImageBackground
            resizeMode="stretch"
            style={HomeScreenStyles.mainCardBGView}
            source={Img.quotebox}
          >
            <View style={HomeScreenStyles.mainCardViewImageBG}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp(2.5),
                  color: CustomColors.black,
                }}
              >
                {Strings.quoteofday}
              </Text>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  source={Img.share}
                  style={{height: hp(4), width: hp(4)}}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={[
                Onboardingstyles.mainquote,
                {fontSize: hp(2), alignSelf: 'center', marginTop: hp(2.5)},
              ]}
            >
              {Strings.screen1text}
            </Text>

            <TouchableOpacity
              style={{position: 'absolute', bottom: wp(5), right: wp(5)}}
            >
              <Image
                resizeMode="contain"
                source={Img.copy}
                style={{height: hp(4), width: hp(4)}}
              />
            </TouchableOpacity>
          </ImageBackground>
          <ArrowHeader HeaderText={'Create Quotes'} />
          <View style={{marginLeft: wp(2.5)}}>
            <SelectorCard 
            onPress={()=>{
              this.props.navigation.navigate('Createquote')
            }}
            hideText 
            CardIcon={Img.plus}  
            />
          </View>
          <ArrowHeader HeaderText={'Quote Categories'} />
          <View style={{marginLeft: wp(2.5)}}>
            <FlatList
              scrollEnabled={false}
              numColumns={4}
              data={Categories}
              renderItem={({item}) => (
                <SelectorCard
                  MainStyle={{marginBottom: hp(2.5)}}
                  CardText={item.name}
                  CardIcon={item.img}
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Homescreen;
