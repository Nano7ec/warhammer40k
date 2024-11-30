import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Guard() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../Custodes/images/Guard.png')} />

                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    <Text style={styles.wapo}>Núcleo:</Text> Despliegue rápido
                    {'\n'}<Text style={styles.wapo}>Facción:</Text> Ka’tah Marcial
                    {'\n'}<Text style={styles.wapo}>Vigilia Permanente:</Text> Cada vez que un modelo en esta unidad haga un ataque, vuelve a tirar una tirada para herir de 1. Mientras esta unidad esté dentro del rango de un marcador de objetivo que controles, puedes volver a tirar la tirada para herir en su lugar.
                    {'\n'}<Text style={styles.wapo}>Tormenta de Centinelas:</Text> Una vez por batalla, en tu fase de Disparo, después de que esta unidad haya disparado, puede disparar de nuevo.
                </Text>
                <Text style={styles.border}>
                    HABILIDADES DEL EQUIPO
                </Text>
                <Text style={styles.descrip}>
                    <Text style={styles.wapo}>Escudo de Praesidium:</Text> Añade 1 a la característica de Heridas del portador.
                    {'\n'}<Text style={styles.wapo}>Vexilla:</Text> Añade 1 a la característica de Control de Objetivos de los modelos en la unidad del portador.
                </Text>
                <Text style={styles.border2}>
                    SALVACIÓN INVULNERABLE 4+
                </Text>
                {/* Tabla de Armas a Distancia */}
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Armas a Distancia</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Rango</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>A</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>HP</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>F</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>PA</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>D</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Lanza guardiana [ASALTO]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>24"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Hoja centinela [ASALTO, PISTOLA]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>12"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                    </>
                </View>
                {/* Tabla de Armas Cuerpo a Cuerpo */}
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Armas Cuerpo a Cuerpo</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Rango</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>A</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>HA</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>F</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>PA</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>D</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Lanza guardiana:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>7</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Misericordia:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Hoja centinela:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
            </>
            <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>Cualquier número de modelos pueden reemplazar su lanza guardiana con 1 hoja centinela y 1 escudo de Praesidium.
          {'\n'}La lanza guardiana de 1 modelo puede ser reemplazada por una de las siguientes opciones:
          {'\n'}■ 1 vexilla y 1 misericordia
          {'\n'}■ 1 vexilla, 1 misericordia y 1 escudo de Praesidium
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 4-10 Guardias Custodios
          {'\n'}Cada modelo está equipado con: lanza guardiana.
           </Text>
        </>
        </View>
    );
}

const styles = StyleSheet.create({
    image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
    border: {
      color: "#fff",
      fontWeight: "bold",
      backgroundColor: "#755C42",
      fontSize: 20,
      padding: 5,
      marginTop: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    border2: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#755C42",
        fontSize: 20,
        padding: 5,
        marginTop: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    
      },
    descrip: {
      fontSize: 18,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      paddingLeft: 3,
      paddingRight: 3,
      paddingBottom: 3,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    italicdesc: {
        fontSize: 15,
        backgroundColor: "#FFFFFF",
        fontStyle: "italic",
        color: "#000000",
        paddingLeft: 3,
        paddingRight: 3,
        paddingBottom: 3,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
    tableRow: {
      flexDirection: "row", // Alinear elementos en fila
      borderBottomWidth: 1,
      borderBottomColor: "#755C42",
    },
    tableCelltop: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: "center", // Centra el contenido horizontalmente
      justifyContent: "center", // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: "#755C42",
      marginTop: 5,
      fontSize: 10,
    },
    tableCell: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: "center", // Centra el contenido horizontalmente
      justifyContent: "center", // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: "#FFFFFF",
      fontSize: 10,
    },
    headerText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 20,
    },
    cellText: {
      fontSize: 14,
      color: "#000000",
    },
    wapo: {
      color: "#000000",
      fontWeight: "bold",
    },
    MinDes: {
      fontSize: 18,
      color: "#000000",
      paddingLeft: 3,
      paddingRight: 3,
      paddingBottom: 3,
    },
  });
