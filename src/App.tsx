/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { ReactNode } from 'react';
import {Button, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PropsWithChildren } from 'react';

type PropAppHeader = {
  size: 'small' | 'large'
}

import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
}


export function AppLayout({children}: { children: ReactNode }) {
   const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      style={[styles.container]}
      colors={['rgba(248, 0, 0, 1)', '#fff', '#FFF']}
    >
      <SafeAreaProvider>
         <SafeAreaView style={[styles.container]}>
          <AppHeader size="small"/>
          {children}
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );
}



export function AppHeader(props: PropsWithChildren<PropAppHeader>) {
  return (
      <ImageBackground source={require('./assets/images/Vector.png')} style={[styles.header, {height:props.size == 'small'?59.5: 119}]}>
         <View style={styles.textInputBox}>
            <TextInput style={styles.textInput} placeholder='Cari resep favoritmu' placeholderTextColor={"#000"}></TextInput>      
         </View>
      </ImageBackground>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    opacity:1.3,
    width: 'auto',
    borderColor:"white",
    borderWidth:1
  },
  textInputBox: {
    flexDirection:'row',
    justifyContent:'space-between',
   
  },

  textInput: {
    padding: 8,
    backgroundColor:'#fff',
    width:'50%',
     borderRadius:100
   
  }
});

export default App;
