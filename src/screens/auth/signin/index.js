import React, { Component } from 'react';
// import { View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, StatusBars, Images, CheckBoxes, Modals, } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appImages, appFonts, colors, appIcons, fontSizes } from '../../../services';
import { Button, Image, TouchableOpacity } from 'react-native';
import { useHooks } from './hooks';
import { Screen } from 'react-native-screens';


export default function Index(props) {
  const { navigate } = props.navigation


  const { toggleCheckbox, isChecked, email, setEmail, password, setPassword, togglePasswordVisibility, showPassword, modalVisibility, modalVisible } = useHooks()
  return (
    // <Text>{t('welcome')}</Text>
    <Wrapper isMain background1 style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
        <Wrapper>
          <Wrapper justifyContentCenter alignItemsCenter style={{ marginTop: width(15), }}>
            <Wrapper marginVerticalSmall>
              <Text isMediumTitle children={'Welcome back to'} style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, }} />
            </Wrapper>
            <Images.MainLogo source={appImages.logo} style={{ height: sizes.images.logoHeight, width: sizes.images.logoWidth, resizeMode: 'contain' }} />
          </Wrapper>

          <Wrapper marginVerticalMedium paddingHorizontalSmall>
            <TextInputs.Colored
              title={'Email'}
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType={'email-address'}
              inputContainerStyle={{
                borderColor:
                  colors.inputTextBorder,
                borderRadius: width(2)
              }}
              inputStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextRegular,
                color: colors.appTextColor1
              }}
              placeholder={'Enter your email'}
              placeholderTextColor={colors.placeHolderColor}
              titleStyle={{
                fontSize: fontSizes.small,
                fontFamily: appFonts.poppinsSemiBold,
                marginLeft: width(5),
                color: colors.appTextColor2
              }} />
            <TextInputs.Colored
              title={'Password'}
              value={password}
              onChangeText={(text) => setPassword(text)}
              keyboardType={'default'}
              secureTextEntry={!showPassword}
              onPressIconRight={togglePasswordVisibility}
              inputContainerStyle={{
                borderColor: colors.inputTextBorder,
                borderRadius: width(2),
              }}
              containerStyle={{
                marginTop: height(2),

              }}
              inputStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextRegular,
                color: colors.appTextColor1
              }}
              placeholder={'Enter your password'}
              placeholderTextColor={colors.placeHolderColor}
              customIconRight={appIcons.eye}
              iconColorRight={colors.iconColor2}
              iconSizeRight={sizes.icons.mediumTiny}
              iconStyleRight={{
                marginRight: width(4)
              }}
              titleStyle={{
                fontSize: fontSizes.small,
                fontFamily: appFonts.poppinsSemiBold,
                marginLeft: width(5),
                color: colors.appTextColor2
              }} />
            <Wrapper
              marginHorizontalBase
              justifyContentCenter
              alignItemsFlexEnd
              marginVerticalSmall>
              <Buttons.ColoredSmall
                text={'Forgot Password?'}
                onPress={() => { navigate(routes.forgetPassword) }}
                buttonStyle={{
                  backgroundColor: colors.transparent,
                  marginRight: responsiveWidth(-5)
                }}
                textStyle={{
                  color: colors.appTextColor3,
                  fontSize: fontSizes.small,
                  fontFamily: appFonts.appTextMedium
                }} />
            </Wrapper>
          </Wrapper>
          <Wrapper marginHorizontalSmall >
            <Buttons.Colored
              buttonColor={colors.buttonColor1}
              onPress={() => { navigate(routes.app)}}
              buttonStyle={{
                height: height(6), 
                borderRadius: width(2),
                shadowColor: '#000000',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 20,
                elevation: 5,
              }}
              text={'Login'}
              textStyle={{
                fontFamily: appFonts.appTextBold,
                fontSize: fontSizes.regular
              }} />
          </Wrapper>

          <Wrapper style={{ marginTop: height(26) }} >
            <TouchableOpacity onPress={() => navigate(routes.createAccount)}>
              <Wrapper isCenter flexDirectionRow alignItemsCenter marginVerticalBase>
                <Wrapper justifyContentCenter>
                  <Text
                    isSmall
                    style={{

                      fontFamily: appFonts.appTextMedium,
                      textAlign: 'center',
                      color: colors.appTextColor1
                    }}>Don’t have an account?</Text>
                </Wrapper>
                <Wrapper justifyContentCenter>
                  <Buttons.ColoredSmall
                    text={'Register Now'}
                    // onPress={()=>navigate(routes.createAccount)}
                    buttonStyle={{
                      paddingHorizontal: width(0),
                      paddingVertical: width(0),
                      backgroundColor: colors.transparent,
                    }}
                    textStyle={{
                      color: colors.appTextColor3,
                      fontSize: fontSizes.small,
                      fontFamily: appFonts.appTextBold
                    }}
                  />
                </Wrapper>
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

