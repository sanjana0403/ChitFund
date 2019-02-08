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
import { ListItem } from 'react-native-elements';
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        justifyContent: "center",
        margin: 20
        
    },
    listContainer: {
        margin: 50,
        height: 160,
        backgroundColor: "#673AB7",
        
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

const list = [
    {
        name: 'Tom Hiddleston',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Amount: 92,000'
    },
    {
      name: 'Chris Hemsworth',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Amount: 90,000'
    },
    {
      name: 'Robert Downey Jr.',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Amount: 87,000'
    }
  ];

export default class TopThreePage extends Component {
    state = {}

    constructor(props){
        super(props);
         this.state = {
          seconds: '10',   // responsible for the seconds 
          minutes: '0',  // responsible for the minutes
          hours: '0',
          bidding: false
        }
        this.secondsRemaining; 
        this.intervalHandle;
        this.handleChange = this.handleChange.bind(this);
        // method that triggers the countdown functionality
        // this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
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
    optionYes = () => {
        this.openDialog(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(
            () => {
                Alert.alert("Amount added");
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
            <View>
                <View style = { styles.listContainer }>
                    {
                    list.map((l, i) => (
                        <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                        />
                    ))
                    }
                </View>
                <View style={ { height: 70 } } />
                <View style={ styles.container }>
                    <Text style={ styles.welcomeText }>
                        Next Bidding will start in:
                    </Text>
                    <Timer hours = {this.state.hours} minutes = {this.state.minutes} seconds = {this.state.seconds}/>
                    
                    <View style={ { height: 20 } } />

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
                                onPress: this.optionYes,
                            }
                        }
                        
                    >
                        

                    </Dialog>
                    
                </View>
            </View>
            
        );
    }
}

