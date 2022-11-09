import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const Event = ({ item, setModalVisible, editEvent, deleteEvent, setModalEvent, setEvent }) => {
    const { nombre, fecha, id} = item
    const changeDate = date => {
        const newDate = new Date(date)
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
        return newDate.toLocaleDateString("es-ES", options)

    }
    return (
        <Pressable
        onPress={() => {
            setModalEvent(true)
            setEvent(item)
        }}>
        <View style={styles.container}>
            <Text style={styles.label}>Evento</Text>
            <Text style={styles.text}>{nombre}</Text>
{/*             <Text style={styles.fecha}>{changeDate(fecha)}</Text> */}
            <View style={styles.containerBotones}>
                <Pressable
                   onPress={() => {
                    setModalVisible(true)
                    editEvent(id)
                } }
                    style={[styles.btn, styles.btnEdit]}>
                    <Text style={styles.btnText}>Editar</Text>
                </Pressable>
                <Pressable 
                onPress={() => {
                    deleteEvent(id)
                }}
                style={[styles.btn, styles.btnDelete]}>
                    <Text style={styles.btnText}>Eliminar</Text>
                </Pressable>

            </View>
        </View>
        </Pressable>



    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
        borderBottomColor: "#94a3b8",
        borderBottomWidth: 2
    },
    label: {
        color: "#374151",
        textTransform: "uppercase",
        fontWeight: "700",
        marginBottom: 10
    },
    text: {
        color: "#6D28d9",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10

    },
    fecha: {
        color: "#374151",
    },
    containerBotones: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnEdit: {
        backgroundColor: "#F59E0B"
    },
    btnDelete: {
        backgroundColor: "#EF4444"
    },
    btnText: {
        textTransform: 'uppercase',
        fontWeight: "700",
        fontSize: 12,
        color: "#fff"
    }
})

export default Event
