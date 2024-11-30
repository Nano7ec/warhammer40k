import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Kastelan() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../Mechanicus/images/Kastelan.png')} />

                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    <Text style={styles.wapo}>Núcleo:</Text> Destrucción Letal 1
                    {'\n'}<Text style={styles.wapo}>Guardaespaldas Robótico:</Text> Mientras un modelo de Tecnósofo de la Cibernética esté liderando esta unidad, ese modelo tiene la habilidad No Sentir Dolor 4+.
                    {'\n'}<Text style={styles.wapo}>Red Repulsora:</Text> Cada vez que un ataque a distancia se asigne a un modelo de Robot Kastelan en esta unidad, con una tirada de salvación no modificada de 6, la unidad atacante sufre 1 herida mortal después de haber terminado de realizar sus ataques.
                </Text>
                <Text style={styles.border2}>
                    SALVACIÓN INVULNERABLE 5+
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Bláster de fósforo pesado [IGNORA COBERTURA]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>36"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Combustor Incendine [IGNORA COBERTURA, TORRENTE]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>12"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>D6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>N/A</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Bláster de fósforo Kastelan [IGNORA COBERTURA]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>24"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>0</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Bláster de fósforo Kastelan Gemelo [IGNORA COBERTURA, GEMELO]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>24"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>0</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Arma de combate cuerpo a cuerpo	:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>0</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Puño Kastelan:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>12</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Puño Kastelan Gemelo [GEMELO]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>12</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                    </>
                </View>
            </>
        <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>Cualquier número de modelos puede reemplazar su puño Kastelan gemelo con una de las siguientes opciones:
            {'\n'}■ 1 bláster de fósforo Kastelan y 1 puño Kastelan
            {'\n'}■ 1 bláster de fósforo Kastelan gemelo y 1 arma de combate cuerpo a cuerpo
            {'\n'}Cualquier número de modelos puede reemplazar su combustor Incendine con 1 bláster de fósforo pesado.
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 2-4 Robots Kastelan
          {'\n'}Cada modelo está equipado con: combustor Incendine; puño Kastelan gemelo.
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
      backgroundColor: "#9F322A",
      fontSize: 20,
      padding: 5,
      marginTop: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    border2: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#9F322A",
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
      borderBottomColor: "#9F322A",
    },
    tableCelltop: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: "center", // Centra el contenido horizontalmente
      justifyContent: "center", // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: "#9F322A",
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
