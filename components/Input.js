import React from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  form_control: {
    // paddingBottom: 1,
    // borderBottomWidth: 1,
    // borderBottomColor: '#777'
  },
  form_wrapper: {
    paddingBottom: 20
  }
});

const leftIconConfig = {
  type: 'fonts-awesome',
};

const inputField = (props) => {
  return (
      <View style={styles.form_wrapper}>
        {/*<TextInput style={styles.form_control} placeholder={props.placeholder}
                 />*/}
        <Input label={props.label}
               labelStyle={{color: '#0e240e'}}
               inputStyle={{marginBottom: 0, paddingBottom: 0}}
               shake={true}
               secureTextEntry={props.secureTextEntry}
               keyboardType={props.keyboardType}
               // leftIcon={
               //   <Icon name="user" size={16} color='#000'/>
               // }
               placeholder={props.placeholder}/>
      </View>
  )
};

export default inputField;