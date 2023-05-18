
import { Text, View, StyleSheet } from 'react-native';
import Fruits from './components/Fruits'


export default function App() {
  return (
    <View style={styles.container}>
      <Fruits/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
