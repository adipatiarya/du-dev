import { Text, TextInput } from "react-native";
import { AppHeader, AppLayout } from "../App";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const options = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { height: 92 }
}
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <AppLayout>
        <Text>HI</Text>
    </AppLayout>
  );
}

export default function BottomTabNavigator()  {
    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name="home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

