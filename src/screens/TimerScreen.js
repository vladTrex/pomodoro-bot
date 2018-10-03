import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';

const defaultProps = {
    countdownTime: 0
};
export default class TimerScreen extends PureComponent {
    constructor() {
        super();
        this.state = { time: {}, seconds: 5 };
        this.timer = 0;
        this.countDown = this.countDown.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds
        };
        return obj;
    }

    startTimer() {
        
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        debugger;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });

        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={220}
                    width={25}
                    fill={52}
                    rotation={0}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => alert('Session is ended')}
                    backgroundColor="#3d5875"
                />
                <TouchableOpacity onPress={this.startTimer}>
                    <Text>Start</Text>
                </TouchableOpacity>
                <Text>
                    m: {this.state.time.m} s: {this.state.time.s}
                </Text>
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
        backgroundColor: '#ffffff'
    }
});
