import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import BiddingApp from './src/pages/biddingPage';

const BiddingStack = createStackNavigator({
  Profile: { screen: BiddingApp, navigationOptions:({header: null})},
  
});



export default createAppContainer(createBottomTabNavigator(
  {
    BiddingApp: BiddingStack
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#673AB7',
      inactiveBackgroundColor: '#673AB7',
      labelStyle: {fontSize: 16, marginBottom: 12}
    },
  }
));