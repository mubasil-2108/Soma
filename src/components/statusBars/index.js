import React from 'react'
import { StatusBar } from 'react-native'
import { colors } from '../../services'


export const Dark = ({backgroundColor}) => {
    return (
        <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={backgroundColor}
        />
    )
}

export const Light = ({backgroundColor}) => {
    return (
        <StatusBar
            translucent
            barStyle="light-content"
           // backgroundColor={colors.appBgColor6 + '40'}
            backgroundColor={backgroundColor}
        />
    )
}