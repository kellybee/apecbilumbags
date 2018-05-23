import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Button, Text } from 'react-native';
import {
    Home,
    Shop,
    AboutBilum,
    Weavers,
    WeaverProfile,
    OrderStatus,
    OrderFeedback,
    ShopPattern,
    ShopDeliveryDetails,
    ShopConfirm,
    } from './pages/index';
import Orders from './data/Orders';

class OrderStatusIcon extends React.Component {
    render() {
        const orderId = '1';
        const order = Orders.find(item => item.id === orderId);
        const navTo = order.status === 'in_progress' ? 'OrderStatus' : 'OrderFeedback';

        if (order.show_order === 'true') {
        return (
            <Button
                title="1"
                onPress={() => this.props.navigation.navigate(navTo)}
                 style={{marginRight: 5}}/>
        )
        }

        return (<Text></Text>);
    }
}

const navigationOptions = ({ navigation }) => {
    return {
        headerStyle: {
           backgroundColor: '#aaa',
        },
        headerTintColor: '#000',
        headerRight: <OrderStatusIcon navigation={navigation}/>,
    };
};

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Shop: Shop,
    ShopPattern: ShopPattern,
    ShopDeliveryDetails: ShopDeliveryDetails,
    ShopConfirm: ShopConfirm,
    AboutBilum: AboutBilum,
    Weavers: Weavers,
    WeaverProfile: WeaverProfile,
    OrderStatus: OrderStatus,
    OrderFeedback: OrderFeedback,
  },
  {
    initialRouteName: 'Home',
    navigationOptions,
  }
);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}