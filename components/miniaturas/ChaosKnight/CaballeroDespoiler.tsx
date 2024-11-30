import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function CaballeroDespoiler() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosKnight/images/knight_despoiler.png')} />
            <Text style={styles.border}>CABALLERO DESPOILER</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 10” {' '}
                <Text style={styles.wapo}>T:</Text> 11 {' '}
                <Text style={styles.wapo}>Sv:</Text> 3+ {' '}
                <Text style={styles.wapo}>W:</Text> 22 {' '}
                <Text style={styles.wapo}>Ld:</Text> 6+ {' '}
                <Text style={styles.wapo}>OC:</Text> 10
            </Text>

            {/* Armas a distancia */}
            <Text style={styles.border}>ARMAS A DISTANCIA</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Alcance</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cañón Gatling Despoiler</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>32"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cañón Térmico</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>30"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6+2</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cañón Gatling Vengador</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>36"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cañón de Batalla</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>72"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6+3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>9</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Heavy Stubber</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>36"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Lanzallamas Pesado</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Multi-láser</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>36"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Autocañón Twin Icarus</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>48"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>7</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Bolter Pesado Twin</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>36"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            {/* Armas cuerpo a cuerpo */}
            <Text style={styles.border}>ARMAS DE COMBATE CUERPO A CUERPO</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cacharro del Destructor</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6+2</Text></View>
            </View>

            <Text style={styles.border}>DESCRIPCIÓN</Text>
            <Text style={styles.descrip}>El Caballero Despoiler es una unidad de fuego pesada, diseñada para causar estragos en las filas enemigas desde la distancia con su variedad de armas de largo alcance, mientras se mantiene en el combate cuerpo a cuerpo con sus devastadores ataques.</Text>
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