import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';

export default function Home(props) {

  const { navigate, goBack } = props.navigation
  const {
    clickedItems,
    handlePressItem,
    data,
    search,
    setSearch,
    handleProductPressItem,
    dummyProductData,
    categories,
    clickedProductItems
  } = useHooks() || {};
  const capitalizeFirstLetter = (categoryName) => {
    return categoryName.toUpperCase();

  };
  console.log(data)
  return (
    <>
      <Wrapper flex={0.94} backgroundColor={colors.appBgColor2}>
        {/* <ScrollViews.KeyboardAvoiding> */}
        <StatusBars.Light backgroundColor={colors.appBgColor1} />
        <Wrapper
          backgroundColor={colors.appBgColor1}
          style={{
            // height: responsiveHeight(35),
            borderBottomLeftRadius: totalSize(3)
          }}>
          <Wrapper flexDirectionRow
            justifyContentSpaceBetween
            marginHorizontalMedium
            alignItemsCenter
            style={{ marginTop: responsiveHeight(7) }}>
            <Icons.Custom icon={appIcons.drawer} size={sizes.icons.mediumLarge} />
            <Icons.Custom icon={appIcons.notification} size={sizes.icons.mediumLarge} />
          </Wrapper>
          <Wrapper
            style={{ paddingLeft: responsiveWidth(7), marginTop: responsiveHeight(3) }}>
            <CategoryList
              unSelectedStyle={styles.unSelected}
              selectedStyle={styles.selected}
              clickedItems={clickedItems}
              selectedText={styles.selectedText}
              unSelectedText={styles.unSelectedText}
              handlePressItem={handlePressItem}
              data={categories.map(item => ({ ...item, name: capitalizeFirstLetter(item) }))} />
          </Wrapper>
          <Wrapper marginHorizontalTiny marginVerticalBase>
            <TextInputs.SearchBar
              value={search}
              onChangeText={(text) => setSearch(text)}
              iconColorRight={colors.iconColor5}
              keyboardType={'email-address'}
              inputContainerStyle={{
                borderColor:
                  colors.inputTextBorder,
                borderRadius: width(2),
                backgroundColor: colors.inputfieldColor2,
                shadowColor: '#000000',
                // shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.7,
                elevation: 5,
              }}
              inputStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextRegular,
                color: colors.appTextColor1
              }}
              placeholder={'Search'}
              placeholderTextColor={colors.placeHolderColor}
              titleStyle={{
                fontSize: fontSizes.small,
                fontFamily: appFonts.poppinsSemiBold,
                marginLeft: width(5),
                color: colors.appTextColor2
              }} />
          </Wrapper>
        </Wrapper>
        <Wrapper flex={1} backgroundColor={colors.appBgColor1}>
          <Wrapper
            backgroundColor={colors.appBgColor2}
            style={{ borderTopRightRadius: totalSize(4) }} >
            <Wrapper
              style={{ paddingLeft: responsiveWidth(7), marginTop: responsiveHeight(4), marginBottom: responsiveHeight(3) }}>
              <ProductList
                clickedItems={clickedProductItems}
                handlePressItem={handleProductPressItem}
                data={data}
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {/* </ScrollViews.KeyboardAvoiding> */}
      </Wrapper>

    </>
  );
}

const styles = StyleSheet.create({
  selected: {
    borderRadius: 50,
    backgroundColor: colors.appBgColor2,
  },
  unSelected: {
    borderRadius: 50,
    backgroundColor: colors.transparent,
    borderWidth: responsiveWidth(0.1),
    borderColor: colors.borderColor1
  },
  selectedText: {
    color: colors.appTextColor3,
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.regular
  },
  unSelectedText: {
    color: colors.appTextColor6,
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.regular
  }
})


