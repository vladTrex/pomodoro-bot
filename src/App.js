import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen';

export default StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    }
}, { initialRouteName: 'Home' });