import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import BiddingPage from './src/pages/biddingPage';
import BiddingPage2 from './src/pages/biddingPage2';
import TopThreePage from './src/pages/topthree';

export default createAppContainer(createBottomTabNavigator(
  {
    TopThreePage: {screen:TopThreePage, navigationOptions:({header:null})},
    BiddingPage: { screen: BiddingPage, navigationOptions:({header: null})},
    BiddingPage2: { screen: BiddingPage2, navigationOptions:({header: null})},
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