import React, {Component} from "react";
import {
    Button,
    Text,
    View,
} from "react-native";

class OrderStatus extends React.Component {
    render() {
        return (
            <View>
                <Text>OS</Text>
            </View>
        )
    }
}

const appNavigationOptions = ({ navigation }) => {
    return {
        headerStyle: {
           backgroundColor: '#aaa',
        },
        headerTintColor: '#000',
        headerRight: <OrderStatus />,
    };
};

const appStyles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000'
    },
    halfHeight: {
            flex: 2,
    },
    quarterHeight: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
};

export {
    appStyles,
    appNavigationOptions,
}