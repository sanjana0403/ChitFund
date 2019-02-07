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
    },
});

export default class App extends Component {
    state = {}

    openDialog = (show) => {
        this.setState({ showDialog: show });
    }

    openConfirm = (show) => {
        this.setState({ showConfirm: show });
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

    render() {
        return (
            <View style={ styles.container }>

                <Text style={ styles.welcomeText }>
                    Welcome to React Native Simple Dialogs!
                </Text>
                <Text style={ styles.exampleText }>
                    Examples
                </Text>
                <Text style={ styles.instructionsText }>
                    To get started, touch on the buttons
                </Text>

                <Button
                    onPress={ () => this.openDialog(true) }
                    title="Custom Dialog"
                />

                <Dialog
                    title="Add your Bid"
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
                          title: "NO",
                          onPress: this.optionNo,
                          // disabled: true,
                          titleStyle: {
                              color: "blue",
                              colorDisabled: "aqua",
                          },
                          style: {
                              backgroundColor: "transparent",
                              backgroundColorDisabled: "transparent",
                          },
                      }
                    }
                    positiveButton={
                        {
                            title: "Add amount",
                            onPress: this.optionYes,
                        }
                    }
                    
                  >
                  <View>
                    <Text style={ { marginVertical: 30 } }>
                        BID DETAILS dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                  </View>
                    

                </Dialog>
                
            </View>
        );
    }
}

