import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';


export default function Home(props) {

  const { navigate, goBack } = props.navigation
  const {
    clickedItems,
    handlePressItem,
    dummyData,
    search,
    setSearch,
    handleProductPressItem,
    dummyProductData,
    clickedProductItems
  } = useHooks()
  return (
    <>
      <Wrapper flex={0.94}  backgroundColor={colors.appBgColor2}>
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
                clickedItems={clickedItems}
                handlePressItem={handlePressItem}
                data={dummyData} />
            </Wrapper>
            <Wrapper marginHorizontalTiny marginVerticalBase>
              <TextInputs.SearchBar
                value={search}
                onChangeText={(text) => setSearch(text)}
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
                
                style={{ paddingLeft: responsiveWidth(7), marginTop:responsiveHeight(4) }}>
                {/* <FlatList
                  data={dummyProductData}
                  renderItem={({ item }) => ( */}
                    <ProductList
                      clickedItems={clickedProductItems}
                      handlePressItem={handleProductPressItem}
                      data={dummyProductData} 
                      />
                {/* )}
                  keyExtractor={(item, index) => index.toString()}
                /> */}
              </Wrapper>
            </Wrapper>
          </Wrapper>
        {/* </ScrollViews.KeyboardAvoiding> */}
      </Wrapper>

    </>
  );
}


