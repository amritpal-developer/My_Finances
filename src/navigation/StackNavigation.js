import {createStackNavigator} from '@react-navigation/stack';
import {String} from '../utils/String';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import {NavigationContainer} from '@react-navigation/native';
import home from '../screens/home';
import {bottomTab} from './bottomTab';
const Stack = createStackNavigator();
const screens = [
  {name: String?.LoginScreen, component: Login},
  {name: String?.homeScreen, component: bottomTab},
  {name: String?.historyScreen, component: History},
  // Add more screens as needed
];
export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:'false'}}>
        {screens?.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
