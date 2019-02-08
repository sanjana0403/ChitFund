import React, { Component } from "react";
import { ListItem } from 'react-native-elements'
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


  
export default class WinnerPage extends Component {

    render() {
        return(
        <View>
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
        );
    }
}