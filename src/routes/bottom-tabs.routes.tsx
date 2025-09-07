import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home/HomeScreen';
import SkillScreen from '../screens/SkillScreen/SkillScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
        <Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons 
                name="home" 
                color={color} 
                size={size}
                />
            ),
            headerShown: false
         }}
        />

        <Screen 
        name="Skills" 
        component={SkillScreen}
        options={{ 
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="flash" 
                color={color} 
                size={size}
                />
            ),
            headerShown: false
         }} 
        />
    </Navigator>
  );
}