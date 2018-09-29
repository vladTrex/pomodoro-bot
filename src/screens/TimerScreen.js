import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { StyleSheet, View } from 'react-native';
import React, { PureComponent } from 'react';

const defaultProps = {
    countdownTime: 0,
};

export default class TimerScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={220}
                    width={25}
                    fill={52}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => alert('Session is ended')}
                    backgroundColor="#3d5875" />
            </View>
        );
    }
}

TimerScreen.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});


