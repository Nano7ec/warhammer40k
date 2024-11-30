import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Vertus() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../Custodes/images/Vertus.png')} />

                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    <Text style={styles.wapo}>Facción:</Text> Ka’tah Marcial
                    {'\n'}<Text style={styles.wapo}>Turbo-impulso:</Text> Cada vez que esta unidad Avance, no hagas una tirada de Avance. En su lugar, hasta el final de la fase, añade 6" a la característica de Movimiento de los modelos en esta unidad.
                    {'\n'}<Text style={styles.wapo}>Ejecución Rápida:</Text> Una vez por batalla, después de que esta unidad termine un movimiento de Avance, puedes seleccionar una unidad enemiga (excluyendo unidades de Monstruos y Vehículos) sobre la que se haya movido durante ese movimiento, luego tira un D6 por cada modelo en esta unidad: por cada 2+, esa unidad enemiga sufre 2 heridas mortales.
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Lanzamisiles de salva:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>24"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>9</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Bólter huracán de Vertus [FUEGO RÁPIDO 3, GEMELO]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>18"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>0</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Lanza de interceptor [LANZA]:</Text></Text>
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
            </>
            <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>Cualquier número de modelos pueden reemplazar su lanzamisiles de salva con 1 bólter huracán de Vertus.
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 2-6 Pretorianos de Vertus
          {'\n'}Cada modelo está equipado con: lanzamisiles de salva; lanza de interceptor.
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
