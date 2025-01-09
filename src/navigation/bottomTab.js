import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {String} from '../utils/String';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import profile from '../screens/profile';
import Home from '../assets/svg/Home.svg';
import Calculator from '../assets/svg/calculator.svg';
import Profile from '../assets/svg/profile.svg';
const Tab = createBottomTabNavigator();
const screens = [
  {
    name: String?.profileScreen,
    component: profile,
    tabBarLabel: 'Home',
    tabBarIcon: ({color, size}) => (
      <Home width={String?.twentyFive} height={String?.twentyFive} />
    ),
  },
  {
    name: String?.DashboardScreen,
    component: Dashboard,
    tabBarLabel: 'DashBoard',
    tabBarIcon: ({color, size}) => (
      <Calculator width={String?.twentyFive} height={String?.twentyFive} />
    ),
  },
  {
    name: String?.historyScreen,
    component: History,
    tabBarLabel: 'Profile',
    tabBarIcon: ({color, size}) => (
      <Profile width={String?.twentyFive} height={String?.twentyFive} />
    ),
  },
  // Add more screens as needed
];
export function bottomTab() {
  return (
    <Tab.Navigator>
      {screens?.map((screen, index) => (
        <Tab.Screen
          key={index}
          options={{
            tabBarLabel: screen?.tabBarLabel,
            tabBarIcon: screen?.tabBarIcon,
          }}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
}
