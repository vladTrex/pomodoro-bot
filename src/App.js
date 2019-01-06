import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';
import *  as navigationRoutes from './constants/navigation';

export default StackNavigator({
    [navigationRoutes.HOME_SCREEN]: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    [navigationRoutes.TIMER_SCREEN]: {
        screen: TimerScreen,
        navigationOptions: {
            header: null
        }
    }
}, { initialRouteName: navigationRoutes.HOME_SCREEN });