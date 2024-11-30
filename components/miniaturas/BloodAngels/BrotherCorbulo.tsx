import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function BrotherCorbulo() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../BloodAngels/images/brother_corbulo.png')} />
                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Infantería, Personaje, Héroe Épico, Granadas, Imperium, Sacerdote Sanguinario, Hermano Corbulo
                    {'\n'}<Text style={styles.wapo}>Sacerdote Sanguinario:</Text> Mientras este modelo esté liderando una unidad, los modelos de esa unidad tienen la habilidad Sentir No Dolor 5+.
                    {'\n'}<Text style={styles.wapo}>El Cáliz Rojo:</Text> Mientras este modelo esté liderando una unidad, añade 1 a la característica de Ataques de las armas de combate cuerpo a cuerpo equipadas por los modelos de esa unidad.
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Pistola de perno</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Sable de Cadenas Astartes</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a Cuerpo</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                </View>
                <Text style={styles.border}>Composición de la Unidad</Text>
                <Text style={styles.descrip}>
                    ■ 1 Hermano Corbulo – Héroe Épico{'\n'}
                    Este modelo está equipado con: pistola de perno; Sable de Cadenas Astartes.
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
