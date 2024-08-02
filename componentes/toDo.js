import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Boton from '../componentes/boton';
import Checkbox from 'expo-checkbox';
const ToDo = ({ toDoList, setToDo }) => {
  const marcarComoTachado = (id, checked) => {
    const index = toDoList.findIndex(td => td.id === id);
    const updatedToDoList = [...toDoList];
    updatedToDoList[index] = {
      ...updatedToDoList[index],
      tachado: checked,
      fechaTachado: checked ? new Date().toLocaleString() : "",
      masRapido: updatedToDoList[index].masRapido ? false : false,
    };
    setToDo(updatedToDoList);
  };

  return (
    <View>
      {toDoList.map(td => (
        <View key={td.id} style={[styles.todoItem, td.tachado && styles.completed]}>
          <Checkbox
            value={td.tachado}
            onValueChange={() => marcarComoTachado(td.id, !td.tachado)}
          />
          <Text>
            {td.toDo} - Creado: {td.fechaCreacion} {td.tachado ? `- Completado: ${td.fechaTachado}` : ''}
          </Text>
          <Boton tipo="borrar" toDoList={toDoList} setToDo={setToDo} id={td.id} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: 'grey',
    color: 'azure',
    padding: 15,
    marginTop: 30,
    borderRadius: 20,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

export default ToDo;
