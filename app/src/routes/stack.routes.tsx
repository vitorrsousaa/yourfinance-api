import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default StackRoutes;
