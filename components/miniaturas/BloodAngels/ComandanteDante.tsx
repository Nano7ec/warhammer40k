import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function ComandanteDante() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../BloodAngels/images/comandante_dante.png')} />
                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Infantería, Personaje, Héroe Épico, Volar, Pack de Salto, Granadas, Imperium, Táctico, Maestro de Capítulo, Comandante Dante
                    {'\n'}<Text style={styles.wapo}>Señor Regente del Imperium Nihilus:</Text> Mientras este modelo esté liderando una unidad, suma 1 a las tiradas de Carga realizadas por esa unidad y cada vez que un modelo de esa unidad realice un ataque, suma 1 a la tirada para impactar.
                    {'\n'}<Text style={styles.wapo}>Máscara de la Muerte de Sanguinius:</Text> Al comienzo de la fase de combate, cada unidad enemiga dentro de 6" de este modelo debe realizar una prueba de **Impacto de Batalla**, restando 1 a esa prueba cuando la hagan.
                </Text>
                {/* Tabla de armas a distancia */}
                <Text style={styles.border}>Armas a Distancia</Text>
                <View style={styles.tableRow}>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>Arma</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>R</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>HP</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>AP</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Perdición</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>6"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                </View>
                {/* Tabla de armas cuerpo a cuerpo */}
                <Text style={styles.border}>Armas de Combate Cuerpo a Cuerpo</Text>
                <View style={styles.tableRow}>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>Arma</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>R</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>AP</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text style={styles.cellText}>El Hacha Mortalis</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>7</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                </View>
                <Text style={styles.border}>Composición de la Unidad</Text>
                <Text style={styles.descrip}>
                    ■ 1 Comandante Dante – Héroe Épico{'\n'}
                    Este modelo está equipado con: Perdición; El Hacha Mortalis.
                </Text>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    border: { 
        color: '#fff', 
        fontWeight: 'bold', 
        backgroundColor: '#ff0000', 
        fontSize: 20, 
        padding: 5, 
        marginTop: 6, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        marginLeft: 5, 
        marginRight: 5 
    },
    descrip: { 
        fontSize: 18, 
        marginLeft: 5, 
        marginRight: 5, 
        backgroundColor: '#c03f3f', 
        color: '#fff', 
        paddingLeft: 3, 
        paddingRight: 3, 
        paddingBottom: 3, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10 
    },
    image: { 
        width: width, 
        height: 100, 
        borderRadius: 20, 
        marginTop: 15 
    },
    tableRow: { 
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderBottomColor: '#c03f3f' 
    },
    tableCelltop: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#ff0000' 
    },
    tableCell: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#c03f3f' 
    },
    headerText: { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 14 
    },
    cellText: { 
        fontSize: 10, 
        color: '#fff' 
    },
    wapo: { 
        color: '#fff', 
        fontWeight: 'bold' 
    }
});
