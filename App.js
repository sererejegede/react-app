import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Text, Image} from 'react-native';

import Button from './components/Button';
import Input from './components/Input';

type Props = {};

export default class App extends Component<Props> {

  // location: any;
  buttonPress = () => {
    console.log('Kilowog');
  };

  render() {
    return (
        <ImageBackground source={require('./assets/img/login-background.jpg')}
                         style={styles.container}>
          <Image source={require('./assets/img/SerereHead2.png')} style={{width: 200, height: 200}}/>
          <View style={styles.inner_view}>
            <View style={styles.form_container}>
              <Input label="Username" placeholder="Enter your username" icon="users" keyBoardType="text" />
              <Input label="Password" placeholder="Enter your password" icon="account" secureTextEntry={true} />
              <Text onPress={this.buttonPress} style={styles.forgot_password}>Forgot Password?</Text>
              <Button color="#912f8E" title="Submit" onButtonPress={this.buttonPress}/>
            </View>
          </View>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inner_view: {
    // paddingLeft: 5,
    // paddingRight: 5,
    paddingBottom: 40
  },
  form_container: {
    // flex: 1,
    backgroundColor: '#FFF',
    width: 350,
    marginTop: 30,
    padding: 15
  },
  button: {
    fontSize: 20,
    margin: 10,
    width: '80%',
    color: '#912f8E'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  fineButton: {
    width: 150,
    textAlign: 'center',
    backgroundColor: '#760AF3',
    marginTop: 15,
    marginBottom: 15,
    padding: 3,
    color: '#fff',
    borderRadius: 5
  },
  forgot_password: {
    paddingLeft: 5,
    color: '#912f8E'
  }
});
