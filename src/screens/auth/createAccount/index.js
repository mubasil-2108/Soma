import React, { Component, useState } from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons } from '../../../services';
import { useHooks } from './hooks';
import { Signup } from '../../../services/utilities/firebaseUtil/firebaseAuth';
export default function Index(props) {
    const { navigate, } = props.navigation

    const { toggleCheckbox, isChecked, email, setEmail, password, setPassword, togglePasswordVisibility, showPassword, name, setName, confirmPassword, setConfirmPassword, toggleConfirmPasswordVisibility, showConfirmPassword } = useHooks()
    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <ScrollViews.KeyboardAvoiding>
                <StatusBars.Dark backgroundColor={colors.statusBarColor1} />

                <Wrapper>
                    <Wrapper
                        justifyContentCenter alignItemsCenter
                        style={{ marginTop: width(15), }}>
                        <Text
                            isMediumTitle
                            style={{
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor1,
                                textAlign: 'center'
                            }}>
                            Register to get{'\n'}started
                        </Text>
                    </Wrapper>
                    <Wrapper marginVerticalSmall paddingHorizontalSmall>
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
                            iconColorLeft={colors.iconColor}
                            iconStyleLeft={{ marginLeft: width(0.7) }}
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

                        <TextInputs.Colored
                            title={'Confirm Password'}
                            secureTextEntry={!showConfirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            onPressIconRight={toggleConfirmPasswordVisibility}
                            value={confirmPassword}
                            keyboardType={'default'}
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
                            placeholder={'Confirm your password'}
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
                        <Wrapper flexDirectionRow alignItemsCenter marginHorizontalBase marginVerticalMedium>
                            <CheckBoxes.Primary onPress={toggleCheckbox} checked={isChecked} uncheckedIconColor={colors.iconColor5} checkedIconColor={colors.iconColor6} checkIconsize={sizes.icons.medium} />
                            <Text style={{ fontSize: fontSizes.regular, color: colors.appTextColor1, fontFamily: appFonts.interRegular }}>I agree to the{' '}
                                <Text style={{ color: colors.appTextColor4 }}>Terms of Service</Text> and{' '}
                                <Text style={{ color: colors.appTextColor4 }}>Privacy{'\n'}Policy</Text>
                            </Text>
                        </Wrapper>
                        <Wrapper marginHorizontalSmall >
                            <Buttons.Colored
                                // isLoading
                                // disabled
                                buttonColor={colors.buttonColor2}
                                onPress={()=>{Signup(email,password,setEmail,setPassword, isChecked)}}
                                buttonStyle={{
                                    height: height(6), borderRadius: width(2),
                                    shadowColor: '#000000',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 20,
                                    elevation: 5,

                                }}
                                text={'Register'}
                                textStyle={{
                                    fontFamily: appFonts.appTextBold,
                                    fontSize: fontSizes.regular
                                }} />
                        </Wrapper>

                    </Wrapper>
                    <Wrapper style={{ marginTop: height(20) }} >
                        <TouchableOpacity onPress={() => navigate(routes.auth, { screen: routes.signin })}>
                            <Wrapper isCenter flexDirectionRow alignItemsCenter marginVerticalBase>
                                <Wrapper justifyContentCenter>
                                    <Text
                                        isSmall
                                        style={{

                                            fontFamily: appFonts.appTextMedium,
                                            textAlign: 'center',
                                            color: colors.appTextColor1
                                        }}>Already have an account?</Text>
                                </Wrapper>
                                <Wrapper justifyContentCenter>
                                    <Buttons.ColoredSmall
                                        text={'Login Now'}
                                        buttonStyle={{
                                            paddingHorizontal: width(0),
                                            paddingVertical: width(0),
                                            backgroundColor: colors.transparent,
                                        }}
                                        textStyle={{
                                            color: colors.appTextColor4,
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

