import React, { useEffect, useState } from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, Scr, ScrollView, Pressable, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const Formulario = ({ modalVisible, setModalVisible, events, setEvents, event, setEvent }) => {
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [date, setDate] = useState(new Date())
    const [persona, setPersona] = useState("")
    const [lugar, setLugar] = useState("")
    const [telefono, setTelefono] = useState("")
    const [notas, setNotas] = useState("")


    useEffect(() => {
        if (Object.keys(event).length > 0) {
            setId(event.id)
            setNombre(event.nombre)
            setDate(event.date)
            setPersona(event.persona)
            setLugar(event.lugar)
            setTelefono(event.telefono)
            setNotas(event.notas)
        }
    }, [event])

    const onChange = (fecha) => {
        setDate(fecha)
    }

    const handleEvent = () => {
        if ([nombre, date].includes("")) {
            Alert.alert(
                "error",
                "Rellena los campos obligatorios",
                [{ text: "OK" }]
            )
            return
        }
        const newEvent = {
            nombre,
            date,
            persona,
            lugar,
            telefono,
            notas
        }
        if (id) {
            newEvent.id = id
            const eventUpdated = events.map(eventState =>
                eventState.id === newEvent.id ? newEvent : eventState
            )
            setEvents(eventUpdated)
            setEvent({})
        } else {
            newEvent.id = Date.now()
            setEvents([...events, newEvent])
        }
        setModalVisible(!modalVisible)
        setId("")
        setNombre("")
        setDate(new Date())
        setLugar("")
        setPersona("")
        setTelefono("")
        setNotas("")
    }
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>
                        {event.id ? "Editar" : "Nuevo"} {''}
                        <Text style={styles.titleBold}>Evento</Text>
                    </Text>

                    <Pressable style={styles.btnCancel}
                        onPress={() => {
                            setModalVisible(!modalVisible   )
                            setId("")
                            setEvent({})
                            setNombre("")
                            setDate(new Date())
                            setLugar("")
                            setPersona("")
                            setTelefono("")
                            setNotas("")
                        }}
                    >
                        <Text style={styles.btnCancelText}>Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Evento*</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='text'
                            placeholder='Nombre'
                            placeholderTextColor={"#666"}
                            value={nombre}
                            onChangeText={setNombre}
                        />
                    </View>

                    <View style={styles.campo}>
                        {/* <Text style={styles.label}>Fecha*</Text> */}
                        {/*                         <View style={styles.datePickerStyle}>
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display={"default"}
                                onChange={onChange} />
                        </View> */}
                        {/*                         <View>
                        <DateTimePicker style={styles.datePickerStyle}
                            value={date}
                            onChange={(date) => setDate(date)}
                        />
                        </View> */}
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Persona</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='email-address'
                            placeholder='Persona'
                            placeholderTextColor={"#666"}
                            value={persona}
                            onChangeText={setPersona}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Lugar</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='text'
                            placeholder='Lugar'
                            placeholderTextColor={"#666"}
                            value={lugar}
                            onChangeText={setLugar}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='number-pad'
                            placeholder='Teléfono'
                            placeholderTextColor={"#666"}
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={9}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Notas</Text>
                        <TextInput
                            style={[styles.input, styles.notasInput]}
                            placeholderTextColor={"#666"}
                            value={notas}
                            onChangeText={setNotas}
                            multiline={true}
                            numberOfLines={5}
                        />
                    </View>
                    <Pressable style={styles.btnNewEvent}
                        onPress={handleEvent}
                    >
                        <Text style={styles.btnNewEventText}>{event.id ? "Editar " : "Añadir "}Evento</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6D28D9",
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#fff"
    },
    titleBold: {
        fontWeight: "900"
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
    },
    label: {
        color: "#fff",
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "600"
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    notasInput: {
        height: 100
    },
    datePickerStyle: {
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    btnCancel: {
        backgroundColor: "#5827A4",
        marginVertical: 30,
        padding: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnCancelText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: 'uppercase'
    },
    btnNewEvent: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnNewEventText: {
        textAlign: "center",
        color: "#5827a4",
        textTransform: "uppercase",
        fontWeight: "900",
        fontSize: 16
    }
})

export default Formulario
