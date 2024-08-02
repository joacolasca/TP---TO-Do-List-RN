import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ toDo, setTD }) => {
  const guardarToDo = (e) => {
    setTD(e.nativeEvent.text);
  };

  return (
    <TextInput
      onKeyPress={guardarToDo}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 20,
    backgroundColor: 'grey',
    color: 'azure',
    fontSize: 20,
    borderRadius: 20,
  },
});

export default Input;
