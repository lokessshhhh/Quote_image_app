//import liraries
import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  PanResponder,
  Animated,
  TextInput,
} from 'react-native';
import CustomHeader from '../../components/CreateQuote/CustomHeader';
import {CustomColors} from '../../theme/CustomColors';
import {Img} from '../../theme/Img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {TriangleColorPicker} from 'react-native-color-picker';
import tinycolor from 'tinycolor2';
import {Onboardingstyles} from '../OnBoarding/Onboardingstyles';


const ImgArray = [
  {img: Img.gallery, imgblack: Img.blackgallery, title: 'Background'},
  {img: Img.text, imgblack: Img.textblack, title: 'Text'},
  {img: Img.property, imgblack: Img.propertyblack, title: 'Property'},
  {img: Img.font, imgblack: Img.fontblack, title: 'Font'},
  {img: Img.color, imgblack: Img.colorblack, title: 'Color'},
  {img: Img.effect, imgblack: Img.effectblack, title: 'Effect'},
  {img: Img.shadow, imgblack: Img.shadowblack, title: 'Shadow'},
];

class Createquote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPop: false,
      isIndex: 0,
      oldColor: '',
      showPicker: false,
      editorPosition: {x: 0, y: 0},
      text: '',
      pan: new Animated.ValueXY(),
      deg: 0,
      edittext: '',
      newheight: 50,
      newwidth: 80,
      isResize: false,
    };

    this.richText = createRef();
  }

  Picker = () => (
    <TriangleColorPicker
      hideControls={true}
      hideSliders={true}
      onColorChange={color => {
        const picked = tinycolor(color);
        const Hexcolor = picked.toHexString();
        this.setState({
          oldColor: Hexcolor,
        });
      }}
      style={{flex: 1}}
    />
  );

  UNSAFE_componentWillMount() {
    this._val = {x: 0, y: 0};
    this.state.pan.addListener(value => (this._val = value));
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
    });

    this.newResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => this.state.isResize,
      onPanResponderMove: (event, gestureState) => {
        this.setState(state => ({
          newheight: this.state.newheight + gestureState.dy,
          newwidth: this.state.newwidth + gestureState.dx,
        }));
      },
      onPanResponderRelease: () => this.setState({isResize: false}),
    });
  };

  render() {
    return (
      <View style={Onboardingstyles.mainbg}>
        <CustomHeader />

        <View
          style={{
            backgroundColor: CustomColors.bottomtabbg,
            height: hp(65),
            width: wp(100),
          }}
        >
          <ImageBackground
            imageStyle={{
              tintColor:
                this.state.oldColor === '' ? null : this.state.oldColor,
            }}
            resizeMode="stretch"
            source={Img.roadsample}
            style={{
              height: '100%',
              width: '100%',
            }}
          >
            {this.state.isIndex === 1 ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Animated.View
                  {...this.panResponder.panHandlers}
                  style={{
                    borderWidth: 1,
                    borderColor: '#ffF',
                    // width: this.state.newwidth,
                    // height: this.state.newheight,
                    marginHorizontal: wp(5),
                    maxHeight: hp(55),
                    maxWidth: wp(90),

                    transform: [
                      ...this.state.pan.getTranslateTransform(),
                      ...[{rotate: `${this.state.deg}deg`}],
                    ],
                  }}
                >
                  <View
                    style={{
                      maxHeight: hp(55),
                    maxWidth: wp(90),
                      backgroundColor: 'red',
                      width: this.state.newwidth,
                      height: this.state.newheight,
                    }}
                    {...this.newResponder.panHandlers}
                  >
                    <TextInput
                      value={this.state.edittext}
                      onChangeText={value => {
                        this.setState({
                          edittext: value,
                        });
                      }}
                      multiline
                      style={{
                        maxHeight: hp(50),
                    maxWidth: wp(85),
                        backgroundColor: 'blue',
                        // marginBottom: hp(25),
                        alignSelf:'center',
                        marginTop:15,
                        // alignSelf: 'center',
                        width: this.state.newwidth-30,
                        height: this.state.newheight-30,
                        // marginTop: hp(-5),
                        // marginBottom: hp(-2.5),
                        color: '#fff',
                        fontSize:hp(3)
                        // fontSize: hp(3),
                      }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({deg: this.state.deg + 90});
                      }}
                    
                      style={{
                        position: 'absolute',
                        top: -20,
                        alignSelf: 'center',
                      }}
                    >
                      <Image
                        source={Img.undo}
                        style={{height: hp(3), width: hp(3)}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.setState({isIndex: 0})}
                      style={{position: 'absolute', top: -10, right: -10}}
                    >
                      <Image
                        resizeMode="contain"
                        source={Img.cancel}
                        style={{height: hp(3), width: hp(3)}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onLongPress={() => {
                        this.setState({
                          isResize: true,
                        });
                      }}
                      style={{
                        position: 'absolute',
                        right: -10,
                        bottom: -10,
                        // alignSelf: 'flex-end',

                        // marginTop:this.state.newheight-this.state.newheight+30,
                        // marginLeft: this.state.newwidth,
                      }}
                    >
                      <Image
                        source={Img.arrow}
                        style={{height: hp(3), width: hp(3)}}
                      />
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              </View>
            ) : null}

            {this.state.showPicker ? (
              <View>
                <View
                  style={{
                    height: hp(30),
                    width: hp(30),
                    position: 'absolute',
                    top: '25%',
                    left: '20%',
                    borderRadius: 20,
                    padding: 20,
                    backgroundColor: CustomColors.white,
                  }}
                >
                  <this.Picker />
                </View>
              </View>
            ) : null}
          </ImageBackground>
        </View>
        {this.state.isIndex === 0 ? (
          <View
            style={{
              backgroundColor: CustomColors.white,
              elevation: 5,
              width: wp(90),
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: hp(2),
              padding: hp(1),
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    showPicker: !this.state.showPicker,
                  });
                }}
              >
                <Image
                  resizeMode="contain"
                  source={Img.colorpicker}
                  style={{height: hp(6), width: hp(6), marginRight: wp(2.5)}}
                />
              </TouchableOpacity>

              <View
                style={{
                  borderRightWidth: 1,
                  borderColor: CustomColors.bordercolor,
                }}
              ></View>
              <Image
                resizeMode="contain"
                source={Img.sample1}
                style={{height: hp(6), width: hp(6), marginLeft: wp(2.5)}}
              />
              <Image
                resizeMode="contain"
                source={Img.sample2}
                style={{height: hp(6), width: hp(6), marginLeft: wp(2.5)}}
              />
              <Image
                resizeMode="contain"
                source={Img.sample3}
                style={{height: hp(6), width: hp(6), marginLeft: wp(2.5)}}
              />
            </View>

            <TouchableOpacity style={{position: 'absolute', right: 10}}>
              <Image
                resizeMode="contain"
                source={Img.more}
                style={{height: hp(6), width: hp(6)}}
              />
            </TouchableOpacity>
          </View>
        ) : null}

        <View
          style={{
            width: wp(100),
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: CustomColors.bottomtabbg,
            height: hp(12),
            position: 'absolute',
            bottom: hp(0),
          }}
        >
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{}}
          >
            {ImgArray.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    showPop: true,
                    isIndex: index,
                  });
                  console.log(index, this.state.isIndex);
                }}
                style={{
                  marginHorizontal: wp(5),
                  alignItems: 'center',
                  // backgroundColor:'red'
                }}
              >
                {this.state.isIndex === index ? (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        height: hp(0.8),
                        width: hp(0.8),
                        backgroundColor: CustomColors.black,
                        borderRadius: 100,
                        marginBottom: hp(0.8),
                      }}
                    ></View>
                    <Image
                      resizeMode="contain"
                      source={item.imgblack}
                      style={{height: hp(5), width: hp(5)}}
                    />
                  </View>
                ) : (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        height: hp(0.8),
                        width: hp(0.8),
                        backgroundColor: CustomColors.bottomtabbg,
                        borderRadius: 100,
                        marginBottom: hp(0.8),
                      }}
                    ></View>
                    <Image
                      resizeMode="contain"
                      source={item.img}
                      style={{height: hp(5), width: hp(5)}}
                    />
                  </View>
                )}
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: CustomColors.black,
                    fontSize: hp(1.5),
                    marginTop: hp(0.5),
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Createquote;
