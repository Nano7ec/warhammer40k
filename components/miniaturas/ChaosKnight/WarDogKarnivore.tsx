import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function WarDogKarnivore() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosKnight/images/war_dog_karnivore.png')} />
            <Text style={styles.border}>WAR DOG KARNIVORE</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 14” {' '}
                <Text style={styles.wapo}>HA:</Text> 3+ {' '}
                <Text style={styles.wapo}>HP:</Text> 3+ {' '}
                <Text style={styles.wapo}>F:</Text> 12 {' '}
                <Text style={styles.wapo}>R:</Text> 7 {' '}
                <Text style={styles.wapo}>H:</Text> 8 {' '}
                <Text style={styles.wapo}>A:</Text> 7 {' '}
                <Text style={styles.wapo}>L:</Text> 8 {' '}
                <Text style={styles.wapo}>Sv:</Text> 3+
            </Text>

            {/* Armas a distancia */}
            <Text style={styles.border}>ARMAS A DISTANCIA</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Alcance</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Diabolus heavy stubber</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>36”</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            {/* Armas de combate cuerpo a cuerpo */}
            <Text style={styles.border}>ARMAS DE COMBATE</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Rango</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Reaper chain-talons</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Slaughterclaw - sweep</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>14</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Núcleo:</Text> Deadly Demise D3 {'\n'}
                <Text style={styles.wapo}>Facción:</Text> Hatred of the False Emperor {'\n'}
                <Text style={styles.wapo}>Karnivore:</Text> Repite tiradas de Carga.
            </Text>

            {/* Daño */}
            <Text style={styles.border}>DAÑO: 1-4 HERIDAS RESTANTES</Text>
            <Text style={styles.descrip}>
                Mientras este modelo tenga 1-4 heridas restantes, sus atributos se modifican:
                <Text style={styles.wapo}> M:</Text> 8” {' '}
                <Text style={styles.wapo}>HA:</Text> 4+ {' '}
                <Text style={styles.wapo}>HP:</Text> 4+ {' '}
                <Text style={styles.wapo}>A:</Text> D6
            </Text>

            {/* Salvación Invulnerable */}
            <Text style={styles.border}>SALVACIÓN INVULNERABLE</Text>
            <Text style={styles.descrip}>5+</Text>

            {/* Opciones de equipo */}
            <Text style={styles.border}>OPCIONES DE WALKER</Text>
            <Text style={styles.descrip}>
                El diabolus heavy stubber de este modelo puede ser reemplazado con 1 heavy bolter.
            </Text>

            {/* Composición de la unidad */}
            <Text style={styles.border}>COMPOSICIÓN DE LA UNIDAD</Text>
            <Text style={styles.descrip}>1 War Dog Karnivore</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    border: { 
        color: '#000', 
        fontWeight: 'bold', 
        backgroundColor: '#5e4646', 
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
        backgroundColor: '#8a7371', 
        color: '#000', 
        paddingLeft: 3, 
        paddingRight: 3, 
        paddingBottom: 3, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10 
    },
    tableRow: { 
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderBottomColor: '#8a7371' 
    },
    tableCelltop: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#5e4646' 
    },
    tableCell: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#8a7371' 
    },
    image: { 
        width: width, 
        height: 100, 
        borderRadius: 20, 
        marginTop: 15 
    },
    headerText: { 
        color: '#000', 
        fontWeight: 'bold', 
        fontSize: 14 
    },
    cellText: { 
        fontSize: 10, 
        color: '#000' 
    },
    wapo: { 
        color: '#000', 
        fontWeight: 'bold' 
    }
});