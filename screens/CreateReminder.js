import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, } from 'react-native';
import Constants from 'expo-constants';
import * as React from "react";

export default class CreateReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      time: "",
      setReminders: ""
    };
  }
  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Create an Reminder      
      </Text>

<TouchableOpacity>
          style={[styles.button,]}
            <TextInput
            style={[{ marginTop: 20 }]}
            onChangeText={text => this.setState({ title: text })}
            placeholder={"Enter Title"}
          />

          <TextInput
            style={[ { marginTop: 20 }]}
            onChangeText={text => this.setState({ time: text })}
            placeholder={"Enter Time"}
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => this.props.navigation.navigate("ReminderPage")}
            onPress={() => this.setState({setReminders: +1})}
          >
          Enter
          </TouchableOpacity>
          
          </TouchableOpacity>

  );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'extra-bold',
    textAlign: 'center',
    justifyContent: ''
  },

  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
});
