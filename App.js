import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, Shop, AboutBilum, Weavers, WeaverProfile } from './pages/index';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Shop: Shop,
    AboutBilum: AboutBilum,
    Weavers: Weavers,
    WeaverProfile: WeaverProfile,
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