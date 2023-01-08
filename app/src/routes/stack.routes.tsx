import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';

export type RootStackParams = {
  Login: any;
  Register: any;
  Home: any;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParams>();

const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default StackRoutes;
