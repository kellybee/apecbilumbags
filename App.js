import React from 'react';
import { createStackNavigator } from 'react-navigation';
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
  }
);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}