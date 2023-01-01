import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default StackRoutes;
