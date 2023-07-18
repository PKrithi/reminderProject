import { Text, View, StyleSheet, Card, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Home Screen
      </Text>

    <TouchableOpacity onPress={() => this.props.navigation.navigate("CreateReminder")}>
    <Text style={styles.button}>Create Reminder</Text>
    </TouchableOpacity>

    <TouchableOpacity>
    <Text style={styles.b}>Reminder Page</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    fontWeight: 'extra-bold',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    justifyContent: 'center'
  },
  b: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
