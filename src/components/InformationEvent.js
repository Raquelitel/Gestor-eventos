import React from 'react'
import { Pressable, SafeAreaView, Text, View, StyleSheet } from 'react-native'

const InformationEvent = ({ event, setModalEvent, setEvent }) => {
    return (
        <SafeAreaView
            style={styles.container}>

            <Text style={styles.title}>Información {""}
                <Text style={styles.titleBold}>Evento</Text>
            </Text>
            <View>
                <Pressable
                    style={styles.btnClose}
                    onPress={() => {
                        setModalEvent(false)
                        setEvent({})
                    }
                    }>
                    <Text
                        style={styles.btnCloseText}
                    >X Cerrar</Text>
                </Pressable>
            </View>
            <View
                style={styles.content}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Evento:</Text>
                    <Text style={styles.valor}>{event.nombre}</Text>
                </View>
                {/*             <View>
                    <Text>Fecha:</Text>
                <Text>{event.date}</Text>
            </View> */}
                <View style={styles.campo}>
                    <Text style={styles.label}>Persona:</Text>
                    <Text style={styles.valor}>{event.persona}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Lugar:</Text>
                    <Text style={styles.valor}>{event.lugar}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.valor}>{event.telefono}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Notas:</Text>
                    <Text style={styles.valor}>{event.notas}</Text>
                </View>
            </View>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f59e8b",
        flex: 1
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
    btnClose: {
        backgroundColor: "#e06900",
        marginVertical: 30,
        padding: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnCloseText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: 'uppercase'
    },
    content: {
        backgroundColor: "#fff",
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    campo: {
        marginBottom: 10
    },
    label: {
        textTransform: "uppercase",
        color: "#374151",
        fontWeight: "600",
        fontSize: 12
    },
    valor: {
        fontWeight: "700",
        fontSize: 20,
        color: "#334155"
    }
})

export default InformationEvent
