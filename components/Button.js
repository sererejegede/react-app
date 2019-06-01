import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btn: {
    marginTop: 40,
    borderRadius: 10
  }
});

const buttonPress = props => {
  return (
      <View style={styles.btn}>
        <Button color={props.color} title={props.title} onPress={props.onButtonPress} />
      </View>
  );
};

export default buttonPress;
