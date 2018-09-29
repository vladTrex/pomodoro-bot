import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';

export default StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Timer: {
        screen: TimerScreen,
        navigationOptions: {
            header: null
        }
    }
}, { initialRouteName: 'Home' });