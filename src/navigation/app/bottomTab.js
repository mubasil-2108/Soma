import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';
import { width, height } from 'react-native-dimension';
import { appFonts, colors, fontSizes, responsiveFontSize, routes, tabs } from "../../services";
import { Images, Wrapper } from "../../components";
import { Icon } from "@rneui/base";
import * as App from '../../screens/app';
import Text from "../../components/text";

const BottomTabStack = createBottomTabNavigator();
const tabIconSize = responsiveFontSize(25);

const TabIcon = ({ color, iconName, iconType, focused, image, tabBarLabel }) => {
    const activeColor = colors.iconColor3;  // define active color
    const inactiveColor = colors.iconColor4;  // define inactive color

    return (
        <Wrapper justifyContentCenter alignItemsCenter paddingVerticalSmall style={styles.iconWrapper(focused)}>
            {
                !image ?
                    <Icon 
                        name={iconName} 
                        type={iconType} 
                        size={tabIconSize} 
                        color={focused ? activeColor : inactiveColor} 
                    />
                    :
                    <Images.Round 
                        source={{ uri: image }} 
                        size={tabIconSize} 
                        style={{ ...styles.iconImage, opacity: focused ? 1 : 0.5 }} 
                    />
            }
            <Text isTiny style={{ color: focused ? activeColor : inactiveColor, fontFamily:appFonts.interRegular }}>{tabBarLabel}</Text>
        </Wrapper>
    );
}

export default function BottomTabNavigation() {
    return (
        <BottomTabStack.Navigator
            screenOptions={{
                headerShown: false,
                ...tabs.tabBarOptions,
                tabBarShowLabel: false,
                
            }}
        >
            <BottomTabStack.Screen
                name={routes.home}
                component={App.Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon 
                            iconName='home' 
                            iconType='feather' 
                            color={color} 
                            focused={focused} 
                            tabBarLabel='Home' 
                        />
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.products}
                component={App.Product}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon 
                            iconName='globe' 
                            iconType='feather' 
                            color={color} 
                            focused={focused} 
                            tabBarLabel='Product' 
                        />
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.cart}
                component={App.Cart}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon 
                            iconName='shopping-cart' 
                            iconType='feather' 
                            color={color} 
                            focused={focused} 
                            tabBarLabel='Cart' 
                        />
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.account}
                component={App.Account}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon 
                            iconName='user' 
                            iconType='feather' 
                            color={color} 
                            focused={focused} 
                            tabBarLabel='Account' 
                        />
                    ),
                }}
            />
        </BottomTabStack.Navigator>
    );
}

const styles = StyleSheet.create({
    iconWrapper: (focused) => ({
        borderRadius: width(3),
        backgroundColor: focused ? colors.appColor2 : colors.appColor1,
        width: width(17),
        height: height(6),
        justifyContent: 'center',
        marginTop: 0,
        alignItems: 'center',
        // paddingVertical: 5
    }),
    iconImage: {
        opacity: 0.5
    }
});
