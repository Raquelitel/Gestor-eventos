import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, Pressable, FlatList, Alert, Modal, } from 'react-native';
import Formulario from './src/components/Formulario';
import Event from './src/components/Event';
import InformationEvent from './src/components/InformationEvent';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [events, setEvents] = useState([])
  const [event, setEvent] = useState({})
  const [modalEvent, setModalEvent] = useState(false)

  const editEvent = id => {
    const eventEdit = events.filter(event => event.id === id)
    setEvent(eventEdit[0])
  }

  const deleteEvent = id => {
    Alert.alert(
      "¿Desea eliminar el evento?",
      " ",
      [
        { text: "Cancelar" },
        {
          text: "Elminar", onPress: () => {
            const eventUpdated = events.filter(eventState => eventState.id !== id)
            setEvents(eventUpdated)
          }
        }
      ]
    )

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Administrador de Eventos</Text>
      <Text style={styles.subtitle}>backlog</Text>

      <Pressable
        style={styles.btnAdd}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.btnTextAdd}>+ add</Text>
      </Pressable>

      {events.length === 0 ? <Text style={styles.noEvent}>
        No hay ningún Evento registrado</Text> :
        <FlatList
          style={styles.list}
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Event
                item={item}
                setModalVisible={setModalVisible}
                editEvent={editEvent}
                deleteEvent={deleteEvent}
                setModalEvent={setModalEvent}
                setEvent={setEvent}
              />
            )
          }}
        />}
      {modalVisible && (
        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          events={events}
          setEvents={setEvents}
          event={event}
          setEvent={setEvent}
        />
      )}

      <Modal
        visible={modalEvent}
        animationType="fade">
        <InformationEvent
          event={event}
          setModalEvent={setModalEvent}
          setEvent={setEvent}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6",
    flex: 1,

  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    textTransform: 'uppercase',
    color: "#374151",
    marginTop: 50,
  },
  subtitle: {
    textAlign: "center",
    color: "#6D28D9",
  },
  btnAdd: {
    backgroundColor: "#6D28D9",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextAdd: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  noEvent: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600"
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30
  }
})


