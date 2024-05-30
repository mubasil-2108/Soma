import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import BottomTab from './bottomTab'
import * as App from '../../screens/app';
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={routes.bottomTab}
        >
             <AppStack.Screen name={routes.bottomTab} component={BottomTab} />
             {/* <AppStack.Screen name={routes.home} component={App.Home} /> 
             <AppStack.Screen name={routes.editProfile} component={App.EditProfile} />
            <AppStack.Screen name={routes.notifications} component={App.Notificatons} /> */}

        </AppStack.Navigator>
    )
}

export default AppNavigation