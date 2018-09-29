/** @format */

import { AppRegistry, UIManager } from 'react-native';

import App from './src/app';
import { name as appName } from './app.json';

if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

AppRegistry.registerComponent(appName, () => App);
