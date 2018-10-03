import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TIMER_SCREEN} from '../constants/navigation';
import colors from '../constants/colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends Component {
  render() {
    const myIcon = (<Icon name="rocket" size={30} color="#900" />)
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Timer Bot! {myIcon}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Go to Timer"
          onPress={() => navigation.navigate(TIMER_SCREEN)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBackgroundColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
