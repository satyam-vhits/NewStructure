import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '@navigation/stacks/rootStackParams';
import Login from '@screens/login/Login';
import SignUp from '@screens/signUp/SignUp';
import Home from '@screens/home/Home';
import {useAppSelector} from '@hooks/useRedux';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  const {isLogin} = useAppSelector(res => res.UserData);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isLogin ? 'Home' : 'login'}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootStack;
