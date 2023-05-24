import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Posts from './Post/Posts';
import FullPost from './FullPost/FullPost';

const Stack = createNativeStackNavigator();

const Navigation = ({selectPost}: {selectPost: number | null}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Posts} />
        <Stack.Screen name="FullPost" component={FullPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
