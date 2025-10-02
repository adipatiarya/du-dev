/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image, View, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';


function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgb(248, 0, 0)', '#fff', '#FFF']}
    >
      <View style={styles.header}>
       <Image source={require('./assets/images/Vector.png')} style={styles.header}/>;
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:168,
    width:'auto',
    backgroundColor:'transparent'
  }
});

export default App;
