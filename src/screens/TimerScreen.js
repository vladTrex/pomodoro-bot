import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';

const defaultProps = {
    countdownTime: 60
};
export default class TimerScreen extends PureComponent {
    constructor(props) {
        super(props);
        // todo: should refactor code
               
        this.state = { time: {}, seconds: 60, percantage: 100 };
        this.timer = 0;

        this.countDown = this.countDown.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    secondsToTime(secs) {
        const divisor_for_minutes = secs % (60 * 60);
        const divisor_for_seconds = divisor_for_minutes % 60;

        const hours = Math.floor(secs / (60 * 60));
        const minutes = Math.floor(divisor_for_minutes / 60);
        const seconds = Math.ceil(divisor_for_seconds);

        const obj = {
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
            seconds: seconds,
            percantage: Math.floor((seconds * this.props.countdownTime) / 100)
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
                    fill={this.state.percantage}
                    prefill={100}
                    rotation={0}
                    tintColor="#00e0ff"
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
