import React from 'react';
import { height, width } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, colors, fontSizes, responsiveHeight, responsiveWidth } from '../../../services';
import Spacer from '../../spacer';

export const CategoryItems = ({ id, isSelect, onPress, onHandlePress, userImage, userName, timeStamp, notificationText }) => {
    const truncatedUserName = userName.length > 50 ? `${userName.substring(0, 50)}...` : userName;
    console.log(isSelect);
    return (
        <>
            <Wrapper justifyContentCenter >
                <TouchableOpacity onPress={() => onPress(id)} style={[isSelect ? styles.selected : styles.unSelected]}>
                    <Wrapper
                        justifyContentCenter
                        alignItemsCenter
                        paddingHorizontalBase
                        paddingVerticalSmall>
                        <Text style={[isSelect ? styles.userName : styles.unSelectedText]}>{truncatedUserName}</Text>
                    </Wrapper>
                </TouchableOpacity>
            </Wrapper>
            <Spacer width={responsiveWidth(2)} />
        </>
    );
};

const styles = StyleSheet.create({
    selected: {
        borderRadius: 50,
        backgroundColor: colors.appBgColor2,
    },
    unSelected: {
        borderRadius: 50,
        backgroundColor: colors.transparent,
        borderWidth:responsiveWidth(0.1),
        borderColor: colors.borderColor1
    },
    userName: {
        color: colors.appTextColor3,
        fontFamily: appFonts.appTextMedium,
        fontSize: fontSizes.regular
    },
    unSelectedText:{
        color: colors.appTextColor6,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.regular
    }
});
