import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome firstName={'Mido Khalil'} />
      <Welcome firstName={''} />
      <Text style={styles.bigText}>Hello! 🔥</Text>
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bigText:{
    fontSize: '100vw',
    color: 'black',
    textAlign: 'center',
    

  },
  container: {
    flex: 1,
    backgroundColor: '#ea6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
