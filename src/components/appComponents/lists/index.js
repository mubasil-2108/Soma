import React, { Component, useState } from 'react';
import Wrapper from '../../wrapper';
import { width, height, totalSize } from 'react-native-dimension';
import Text from '../../text';
import Spacer from '../../spacer';
import * as Images from '../../images';
import * as Lines from '../../lines';
import { appFonts, appImages, appStyles, colors, getAppointmentStatusInfo, responsiveFontSize, responsiveHeight, responsiveWidth, routes, sizes } from '../../../services';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import * as Icons from '../../icons';
import NotificationItem from '../notificationItems';
import { CategoryItems } from '../category';
import { ProductItems, SubCategory } from '../productItems';

export const UsersListVerticalPrimary = ({ data, onPressItem, ...props }) => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => { index.toString() }}
            ItemSeparatorComponent={() => <Lines.Horizontal color={colors.appBgColor2} />}
            renderItem={({ item, index }) => {
                const { isDietitian, firstName, lastName, image, rating, reviewsCount } = item
                const userName = firstName + ' ' + lastName
                return (
                    <Pressable
                        onPress={() => onPressItem(item, index)}
                    >
                        <Wrapper background1 paddingVerticalSmall paddingHorizontalBase flexDirectionRow>
                            <Images.Round
                                source={{ uri: image }}
                            />
                            <Spacer isSmall horizontal />
                            <Wrapper flex={1} justifyContentCenter={!isDietitian} justifyContentSpaceBetween={isDietitian}
                                style={{ paddingVertical: responsiveHeight(0.4) }}
                            >
                                <Wrapper flexDirectionRow>
                                    <Wrapper flexDirectionRow alignItemsCenter>
                                        <Text isSmall isBoldFont>{userName}</Text>
                                        {
                                            isDietitian ?
                                                <>
                                                    <Icon
                                                        name='star'
                                                        type='entypo'
                                                        color={colors.appColor2}
                                                        style={[appStyles.marginHorizontalTiny]}
                                                        size={responsiveFontSize(15)}
                                                    />
                                                    <Text isTiny>{rating} ({reviewsCount})</Text>
                                                </>
                                                :
                                                null
                                        }
                                    </Wrapper>
                                </Wrapper>
                                {
                                    isDietitian ?
                                        <Text isTiny isGray>Dietitian</Text>
                                        :
                                        null
                                }

                            </Wrapper>

                        </Wrapper>
                    </Pressable>
                )
            }}
            {...props}
        />
    )
}

export const PostsListHorizontalPrimary = ({ data, onPressItem, ...props }) => {
    return (
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() => <Spacer width={sizes.marginHorizontal} />}
            ListHeaderComponent={() => <Spacer width={sizes.marginHorizontal} />}
            ItemSeparatorComponent={() => <Spacer isSmall horizontal />}
            renderItem={({ item, index }) => {
                const userName = 'John Doe'
                const userImage = appImages.user4
                const timeStamp = '21 days ago'
                const title = 'Favorite Healthy Breakfast Ideas'
                const description = "I'm looking for some new breakfast ideas that are both delicious and healthy. Share your go-to morning meals!"
                const topic = '#MealPlans'
                const commentsCount = '12'
                const viewsCount = '422'
                return (
                    <PostPrimary
                        onPress={() => onPressItem(item, index)}
                        containerStyle={[appStyles.marginHorizontalZero, { width: responsiveWidth(80) }]}
                        userImage={userImage}
                        userName={userName}
                        timeStamp={timeStamp}
                        title={title}
                        description={description}
                        topic={topic}
                        commentsCount={commentsCount}
                        viewsCount={viewsCount}
                    />
                )
            }}
            {...props}
        />
    )
}

export const PostsListVerticalPrimary = ({ data, onPressItem, ...props }) => {
    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
            ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
            ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
            renderItem={({ item, index }) => {
                const userName = 'John Doe'
                const userImage = appImages.user4
                const timeStamp = '21 days ago'
                const title = 'Favorite Healthy Breakfast Ideas'
                const description = "I'm looking for some new breakfast ideas that are both delicious and healthy. Share your go-to morning meals!"
                const topic = '#MealPlans'
                const commentsCount = '12'
                const viewsCount = '422'
                return (
                    <PostPrimary
                        onPress={() => onPressItem(item, index)}
                        //containerStyle={[appStyles.marginHorizontalZero, { width: responsiveWidth(70) }]}
                        userImage={userImage}
                        userName={userName}
                        timeStamp={timeStamp}
                        title={title}
                        description={description}
                        topic={topic}
                        commentsCount={commentsCount}
                        viewsCount={viewsCount}
                    />
                )
            }}
            {...props}
        />
    )
}

export const NotificationsList = ({ handlePressItem, clickedItems, data, onPressItem, ...props }) => {


    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            // ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
            // ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
            // ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
            renderItem={({ item, index }) => {
                const { userName, userImage, timeStamp, notificationText } = item;
                console.log(clickedItems);
                return (
                    <NotificationItem
                        onPress={() => handlePressItem(item, index)}
                        clicked={clickedItems[item.id] || false}
                        isSelect={clickedItems[item.id]}
                        userName={userName}
                        timeStamp={timeStamp}
                        notificationText={notificationText}
                        {...item}
                    />
                );
            }}
            {...props}
        />
    );
};

export const PostPrimary = ({ userImage, userName, timeStamp, title, description, showFullDescription, topic, commentsCount, viewsCount, onPress, containerStyle }) => {
    return (
        <Pressable onPress={onPress}>
            <Wrapper isColored background1 paddingHorizontalSmall paddingVerticalSmall style={containerStyle}>
                <Wrapper flexDirectionRow>
                    <Images.Round
                        source={{ uri: userImage }}
                        size={responsiveWidth(12)}
                    />
                    <Wrapper flex={1} paddingHorizontalSmall marginHorizontalTiny justifyContentSpaceBetween
                        style={{ paddingVertical: responsiveHeight(0.3) }}
                    >
                        <Text isMedium isBoldFont>{userName}</Text>
                        <Text isSmall >{timeStamp}</Text>
                    </Wrapper>
                </Wrapper>
                <Spacer isSmall />
                <Spacer isTiny />
                <Text isMedium isBoldFont numberOfLines={1}>{title}</Text>
                <Spacer isSmall />
                <Text isSmall={!showFullDescription} isMedium={showFullDescription} numberOfLines={!showFullDescription ? 3 : null}>{description}</Text>
                <Spacer isSmall />
                <Text isTiny isSecondaryColor>{topic}</Text>
                <Spacer isSmall />
                <Wrapper flexDirectionRow justifyContentSpaceBetween>
                    <Icons.WithText
                        iconName={'message-circle'}
                        iconType={'feather'}
                        tintColor={colors.appTextColor5}
                        text={`${commentsCount} comments`}
                        textContainerStyle={{ marginLeft: sizes.marginHorizontal / 4 }}
                    />
                    <Icons.WithText
                        iconName={'eye'}
                        iconType={'feather'}
                        tintColor={colors.appTextColor5}
                        text={`${viewsCount} views`}
                        textContainerStyle={{ marginLeft: sizes.marginHorizontal / 4 }}
                    />
                </Wrapper>
            </Wrapper>
        </Pressable>
    )
}

export const ChatMessagesListVertical = ({ data }) => {
    return (
        <>
            {data.map((item, index) => {
                const { user, message, created_at } = item;
                const is_my_message = user?.id === users[4]?.id;
                return (
                    <Wrapper marginVerticalSmall style={[]}>
                        <Wrapper
                            marginHorizontalSmall
                            style={{
                                flexDirection: !is_my_message ? "row" : "row-reverse",
                            }}
                        >
                            <Wrapper
                                //flex={7}
                                isColored
                                //paddingHorizontalSmall
                                paddingVerticalSmall
                                marginHorizontalZero
                                style={[
                                    {
                                        borderRadius: 100,
                                    },
                                    !is_my_message
                                        ? {
                                            //borderBottomLeftRadius: 0,
                                            backgroundColor: colors.appBgColor1,
                                        }
                                        : {
                                            //borderBottomRightRadius: 0,
                                            backgroundColor: colors.appColor1,
                                        },
                                ]}
                            >
                                <Text
                                    isRegular
                                    //isMediumFont
                                    isPrimaryColor={!is_my_message}
                                    isWhite={is_my_message}
                                    style={[!is_my_message ? {} : {}]}
                                >
                                    {message}
                                </Text>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isTiny />
                        <Wrapper marginHorizontalMedium alignItemsFlexEnd={is_my_message}>
                            <Text isTiny  >
                                {created_at}
                            </Text>
                        </Wrapper>
                    </Wrapper>
                );
            })}
        </>
    );
};

export const CategoryList = ({ handlePressItem, selectedStyle, selectedText, unSelectedText, unSelectedStyle, textStyle, clickedItems, data, onPressItem, ...props }) => {


    return (
        <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal
            // ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
            // ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
            // ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
            renderItem={({ item, index }) => {
                const { name, userImage, timeStamp, notificationText } = item;
                const isSelect = !!clickedItems[name];
                // console.log(clickedItems);
                return (
                    <CategoryItems
                        onPress={() => handlePressItem(item)}
                        clicked={isSelect}
                        isSelect={isSelect}
                        userName={name}
                        textStyle={textStyle}
                        selectedStyle={selectedStyle}
                        unSelectedStyle={unSelectedStyle}
                        unSelectedText={unSelectedText}
                        selectedText={selectedText}
                        {...item}
                    />
                );
            }}
            keyExtractor={(item) => item.name}
            {...props}
        />
    );
};

// export const ProductList = ({ handlePressItem, clickedItems, data, onPressItem, ...props }) => {


//     return (
//         <Wrapper>
//             <FlatList
//                 data={data}
//                 showsVerticalScrollIndicator={false}
//                 horizontal
//                 // ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
//                 // ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
//                 // ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
//                 renderItem={({ item, index }) => {
//                     const { id, subCategory } = item;
//                     // const { userName, userImage, timeStamp, notificationText,product,subName } = item;
//                     // console.log(data[0].subCategory[0].subName);
//                     // console.log(clickedItems);
//                     return (
//                         <ProductItems
//                             onPress={() => handlePressItem(item, index)}
//                             clicked={clickedItems[item.id] || false}
//                             isSelect={clickedItems[item.id]}
//                             subCategories={subName}
//                             productImage={product}
//                             userName={userName}
//                             timeStamp={timeStamp}
//                             notificationText={notificationText}
//                             {...item}
//                         />
//                     );
//                 }}
//                 {...props}
//             />
//         </Wrapper>
//     );
// };

// export const ProductList = ({ handlePressItem, clickedItems, data, ...props }) => {
//     return (
//         <Wrapper >
//             <FlatList
//                 data={Object.values(data)}
//                 showsVerticalScrollIndicator={false}
//                 renderItem={({ item,index }) => {
//                     const { id, subCategories } = item;
//                     return (
//                         <Wrapper key={id}>
//                             <FlatList
//                                 data={Object.values(subCategories)}
//                                 horizontal
//                                 showsHorizontalScrollIndicator={false}
//                                 keyExtractor={(subItem) => subItem.name + '_' + id}
//                                 renderItem={({ item: subItem }) => {
//                                     const { name, products } = subItem;
//                                     return (
//                                         <ProductItems
//                                         key={name + '_' + id} 
//                                             handlePressItem={handlePressItem}
//                                             isSelect={clickedItems}
//                                             subCategory={name}
//                                             products={products}
//                                             index={index}
//                                             totalCategories={Object.keys(data).length}
//                                         />
//                                     )
//                                 }}
//                             // {/* <Text>{id}</Text> Render User ID for testing */}

//                             />
//                         </Wrapper>
//                     );
//                 }}
//                 keyExtractor={item => (item.id ? item.id.toString() : `key_${Math.random()}`)}
//                 {...props}
//             />
//         </Wrapper>
//     );
// };

export const ProductList = ({ handlePressItem, clickedItems, data, ...props }) => {
    return (
        <Wrapper>
            <FlatList
                data={Object.values(data)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    const { id, subCategories } = item;
                    return (
                        <Wrapper key={id}>
                            <FlatList
                                data={Object.values(subCategories)}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(subItem) => subItem.name + '_' + id}
                                renderItem={({ item: subItem }) => {
                                    const { name, products } = subItem;
                                    return (
                                        <Wrapper key={name + '_' + id}>
                                            <Wrapper marginVerticalSmall>
                                                <Text isMedium style={{ fontFamily: appFonts.appTextMedium }}>{name}</Text>
                                            </Wrapper>
                                            <FlatList
                                                data={products}
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                                keyExtractor={(product) => product.id.toString()}
                                                renderItem={({ item: product }) => (
                                                    <ProductItems
                                                        key={product.id}
                                                        handlePressItem={handlePressItem}
                                                        isSelect={clickedItems}
                                                        subCategory={name}
                                                        products={[product]}
                                                        index={index}
                                                        totalCategories={Object.keys(data).length}
                                                    // Other props if needed
                                                    />
                                                )}
                                            />
                                        </Wrapper>
                                    );
                                }}
                                {...props}
                            />
                        </Wrapper>
                    );
                }}
                keyExtractor={item => item.id ? item.id.toString() : `key_${Math.random()}`}
                {...props}
            />
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    subCategoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: responsiveHeight(2),
    },
})

// export const SubCategoryList = ({ handlePressItem, clickedItems, data, ...props }) => {
//     return (
//         <Wrapper >
//             <FlatList
//                 data={data}

//                 showsVerticalScrollIndicator={false}
//                 renderItem={({ item,index }) => {
//                     const { id, subCategory } = item;
//                     return (
//                         <Wrapper>
//                             <FlatList
//                                 data={subCategory}
//                                 horizontal
//                                 showsHorizontalScrollIndicator={false}
//                                 keyExtractor={(subItem) => id + '_' + subItem.subName}
//                                 renderItem={({ item: subItem }) => {
//                                     const { subName, products } = subItem;
//                                     return (
//                                         <SubCategory
//                                             key={id + '_' + subName}
//                                             handlePressItem={handlePressItem}
//                                             isSelect={clickedItems}
//                                             subCategory={subName}
//                                             products={products}
//                                             index={index}
//                                             totalCategories={data.length}
//                                         />
//                                     )
//                                 }}
//                             // {/* <Text>{id}</Text> Render User ID for testing */}

//                             />
//                         </Wrapper>
//                     );
//                 }}
//                 keyExtractor={(item) => item.id}
//                 {...props}
//             />
//         </Wrapper>
//     );
// };
export const SubCategoryList = ({ handlePressItem, clickedItems, data }) => {
    // Flatten all products into one array
    const allProducts = data.flatMap(category =>
        category.subCategory.flatMap(subCat =>
            subCat.products.map(product => ({
                ...product,
                subCategory: subCat.subName,
                categoryName: category.userName,
            }))
        )
    );

    // Make sure to provide a unique key for each item
    const keyExtractor = (item) => item.id ? item.id.toString() : `${item.productName}-${Math.random()}`;

    return (
        <Wrapper>
            <FlatList
                data={allProducts}
                renderItem={({ item, index }) => (
                    <SubCategory
                        key={item.id}
                        handlePressItem={handlePressItem}
                        isSelect={clickedItems.includes(item.id)}
                        {...item}
                        index={index}
                        totalCategories={allProducts.length}
                    />
                )}
                keyExtractor={keyExtractor}
            />
        </Wrapper>
    );
};