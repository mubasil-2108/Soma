import React, { Component, useState } from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Modals } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons } from '../../../services';
import { useHooks } from './hooks';
import { Screen } from 'react-native-screens';

export default function Index(props) {
    const { navigate, goBack } = props.navigation

    const { email, setEmail,modalVisibility, modalVisible } = useHooks()
    return (
        <Wrapper isMain background1 style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <ScrollViews.KeyboardAvoiding>
                <Wrapper>
                    <Wrapper marginHorizontalSmall
                        style={{ marginTop: height(5), }}>
                        <Headers.Primary
                            onBackPress={() => { goBack() }}
                            showBackArrow
                            iconContainer={{ flexDirection: 'row' }}
                            containerStyle={{ backgroundColor: colors.appColor11 }} />
                    </Wrapper>
                    <Wrapper
                        paddingHorizontalBase
                        justifyContentCenter
                        marginVerticalSmall>
                        <Text
                            isMediumTitle
                            style={{
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor1,

                            }}>
                            Forgot Password?
                        </Text>
                        <Text isMedium
                            style={{
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor5,
                            }}>
                            Please enter the email address linked with your account to reset your password.
                        </Text>
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
                        <Wrapper marginVerticalMedium >
                            <Buttons.Colored
                                buttonColor={colors.buttonColor2}
                                onPress={modalVisibility}
                                buttonStyle={{
                                    height: height(6),
                                    borderRadius: width(2),
                                    shadowColor: '#000000',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 20,
                                    elevation: 5,
                                }}
                                text={'Send Code'}
                                textStyle={{
                                    fontFamily: appFonts.appTextBold,
                                    fontSize: fontSizes.regular
                                }} />
                        </Wrapper>
                    </Wrapper>

                </Wrapper>
                <Wrapper>
                    <Modals.ImageModal
                    hideHeader
                     visible={modalVisible} 
                     onPress={()=>{navigate(routes.signin)}} 
                     colorsOpacity={[colors.transparent, colors.transparent]} 
                     containerStyle={{shadowColor: '#000000',
                     shadowOffset: { width: 4, height: 4 },
                     shadowOpacity: 0.1,
                     shadowRadius: 20,
                     elevation: 4,}}/>
                </Wrapper>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    )
}