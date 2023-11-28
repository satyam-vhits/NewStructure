import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '@navigation/stacks/rootStackParams';
import Login from '@screens/login/Login';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="intro">
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default RootStack;
