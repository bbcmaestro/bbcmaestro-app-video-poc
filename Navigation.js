import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Video" component={VideoScreen} options={{headerShown: false, animationEnabled: false, animation: 'none'}} />
    </Stack.Navigator>
  );
}

export default Navigation;