// @flow
import { createStackNavigator } from 'react-navigation';
import UsersDetails from '../screens/usersDetails';
import Home from '../../containers/HomeContainer';
import UserList from '../../containers/UsersListContainer';


const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
    }),
  },
  UsersList: {
    screen: UserList,  navigationOptions: ({ navigation }) => ({
      title: 'Users List',
    }),
  },
  Details: {
    screen: UsersDetails,  navigationOptions: ({ navigation }) => ({
      title: 'User Details',
    }),
  }
  /* Add more screen here */
});

export default RootNavigator;