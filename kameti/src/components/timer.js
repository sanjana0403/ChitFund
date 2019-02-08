import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Timer extends React.Component {
    render() {
        return (           
            <View>
                <Text style={{ fontSize: 40, marginLeft: 5}}>
                {this.props.hours}:{this.props.minutes}:{this.props.seconds}
                </Text>
            </View>
        );
    }
}

