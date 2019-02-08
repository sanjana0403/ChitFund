import React, { Component } from "react";
import {
    Alert,
    AppRegistry,
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput
} from "react-native";

import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import Timer from "../components/timer";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",
    },
    welcomeText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
    },
    exampleText: {
        fontSize: 20,
        marginBottom: 25,
        textAlign: "center",
    },
    instructionsText: {
        color: "#333333",
        fontSize: 16,
        marginBottom: 40,
        textAlign: "center",
    }
});

export default class BiddingPage extends Component {
    state = {}

    constructor(props){
        super(props);
         this.state = {
          seconds: '10',   // responsible for the seconds 
          minutes: '0',  // responsible for the minutes
          hours: '0',
          bidding: false,
        }
        this.secondsRemaining; 
        this.intervalHandle;
        this.handleChange = this.handleChange.bind(this);
        // method that triggers the countdown functionality
        // this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
    }
    handlePress(amount) {
        Alert.alert("Amount: "+ amount);
        fetch('http://172.17.60.238:8098/v1/hack/bid/make', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    
        body: JSON.stringify({
        "amount": amount,
        "bidId": "B1902080502348883521907",
        "bidDay": "1",
        "userId": "U1902080335105859917445",
        })
        })
        .then((response) => response.json())
        .catch((error) => {
        console.error(error);
        });
    }
    handleChange(event) {
    this.setState({
        minutes: event.target.value
    })
    }
    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
        this.setState({
        minutes: min,
        seconds: sec
        })
        if (sec < 10) {
        this.setState({
            seconds: "0" + this.state.seconds,
        })
        }
        if (min < 10) {
        this.setState({
        value: "0" + min,
        })
        }
        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
        this.setState({
            bidding: true
        })
        }
        this.secondsRemaining--
    }
    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes * 60 + this.state.seconds;
        this.secondsRemaining = time;
        // handleChange = this.handleChange;
    }

    openDialog = (show) => {
        this.setState({ showDialog: show });
    }
    optionYes = (amount) => {
        this.openDialog(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        this.handlePress(amount);
        setTimeout(
            () => {
                Alert.alert("Amount added"+ amount);
            },
            300,
        );
    }

    optionNo = () => {
        this.openDialog(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
    }

    componentDidMount() {
        this.startCountDown();
    }

    render() {
        return (
            
            <View style={ styles.container }>
                <Text style={ styles.welcomeText }>
                    Bidding will start in:
                </Text>
                <Timer hours = {this.state.hours} minutes = {this.state.minutes} seconds = {this.state.seconds}/>
                
                <View style={ { height: 80 } } />

                <Button 
                    disabled= {!(this.state.bidding)}
                    onPress={ () => this.openDialog(true) }
                    title="Start Bidding"
                />

                <Dialog
                    title="Make Bid"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                    negativeButton={
                        {
                            title: "Cancel",
                            onPress: this.optionNo,
                        }
                    }
                    positiveButton={
                        {
                            title: "Add amount",
                            onPress: () => {this.optionYes('1234')},
                        }
                    }
                    
                  >
                    
                </Dialog>
                
            </View>
        );
    }
}

