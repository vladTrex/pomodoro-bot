import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const defaultProps = {
    countdownTime: 60
};

const propTypes = {
    countdownTime: PropTypes.number
};
export default class TimerScreen extends PureComponent {
    constructor(props) {
        super(props);
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

        return {
            h: hours,
            m: minutes,
            s: seconds
        };
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds,
            percantage: Math.floor((seconds * 100) / this.props.countdownTime)
        });

        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        const {percantage, time} = this.state;

        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={220}
                    width={25}
                    fill={percantage}
                    prefill={100}
                    rotation={0}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                />
                <TouchableOpacity style={styles.startButtonStyle} onPress={this.startTimer}>
                    <Text style={styles.buttonTextStyle}>Start</Text>
                </TouchableOpacity>
                <Text>
                    m: {time.m} s: {time.s}
                </Text>
            </View>
        );
    }
}

TimerScreen.defaultProps = defaultProps;
TimerScreen.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    startButtonStyle: {
        padding: 10,
        marginTop: 10,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#e2e2e2',
    },
    buttonTextStyle: {
        textAlign: 'center',
    }
});
