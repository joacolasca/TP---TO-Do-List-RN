import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Boton from './componentes/boton';
import Input from './componentes/input';
import ToDo from './componentes/toDo';
import Checkbox from 'expo-checkbox';

function App() {
  const [toDo, setTD] = useState();
  const [toDoList, setToDo] = useState([]);

  return (
    <ImageBackground source={require('./assets/imgFondo.jpg')} style={styles.background}>
      <View style={styles.controlador}>
        <Boton tipo={"agregarToDo"} toDoList={toDoList} setToDo={setToDo} toDo={toDo} />
        <Input toDo={toDo} setTD={setTD} />
      </View>
      <ToDo toDoList={toDoList} setToDo={setToDo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlador: {
    flexDirection: 'row',
    gap: 40,
  },
});

export default App;
