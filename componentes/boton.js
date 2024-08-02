import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
const Boton = ({ tipo, toDoList, setToDo, toDo = "", id = 0 }) => {

  if (tipo === "agregarToDo") {
    const agregarToDo = () => {
      setToDo([
        ...toDoList,
        {
          id: Date.now(),
          toDo: toDo,
          tachado: false,
          fechaCreacion: new Date().toLocaleString(),
          fechaTachado: "",
        },
      ]);
    };
    return (
      <TouchableOpacity onPress={agregarToDo} style={styles.botonAgregar}>
        <Text>Agregar To Do</Text>
      </TouchableOpacity>
    );
  }

  if (tipo === "borrar") {
    const borrarToDo = () => {
      setToDo(toDoList.filter(todo => todo.id !== id));
    };

    return (
      <TouchableOpacity onPress={borrarToDo} style={styles.borrar}>
        <Text>Borrar</Text>
      </TouchableOpacity>
    );
  }

  if (tipo === "tareaRapida") {
    const tareaRapida = () => {
      let map1 = toDoList.filter(element => element.tachado == true).map(element => {
        return {
          ...element,
          tiempoTardado: new Date(element.fechaTachado) - new Date(element.fechaCreado),
        };
      });

      if (map1.length > 0) {
        let minimo = map1.reduce((minimo, actual) => {
          return actual.tiempoTardado < minimo.tiempoTardado ? actual : minimo;
        });

        setToDo(toDoList.map((item) => {
          if (item.id === minimo.id) {
            return {
              ...item,
              masRapido: true,
            };
          }
          if (item.id !== minimo.id && item.masRapido) {
            return {
              ...item,
              masRapido: false,
            };
          }
          return item;
        }));
      }
    };

    return (
      <TouchableOpacity onPress={tareaRapida} style={styles.botonRapida}>
        <Text>Tarea más rápida</Text>
      </TouchableOpacity>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  borrar: {
    backgroundColor: 'rgb(153, 7, 7)',
    color: 'azure',
    padding: 15,
    fontSize: 16,
    borderRadius: 20,
  },
  botonAgregar: {
    padding: 20,
    fontSize: 16,
    borderRadius: 20,
  },
  botonRapida: {
    padding: 20,
    fontSize: 16,
    borderRadius: 20,
  },
});

export default Boton;
