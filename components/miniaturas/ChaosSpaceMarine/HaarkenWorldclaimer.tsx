import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function HaarkenWorldclaimer() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosSpaceMarine/images/haarken.png')} />
            <Text style={styles.border}>HAARKEN WORLDCLAIMER</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 12” {' '}
                <Text style={styles.wapo}>T:</Text> 4 {' '}
                <Text style={styles.wapo}>HA:</Text> 2+ {' '}
                <Text style={styles.wapo}>HP:</Text> 2+ {' '}
                <Text style={styles.wapo}>F:</Text> 5 {' '}
                <Text style={styles.wapo}>R:</Text> 4 {' '}
                <Text style={styles.wapo}>H:</Text> 6 {' '}
                <Text style={styles.wapo}>A:</Text> 6 {' '}
                <Text style={styles.wapo}>L:</Text> 9 {' '}
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Lanza de terror de Haarken</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>

            {/* Armas de combate cuerpo a cuerpo */}
            <Text style={styles.border}>ARMAS DE COMBATE CUERPO A CUERPO</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Lanza de terror de Haarken</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Núcleo:</Text> Legión Negra, Líder {'\n'}
                <Text style={styles.wapo}>Golpe Mortal:</Text> Cada vez que realices un ataque con este modelo, un impacto crítico se logra con un resultado de 5+. {'\n'}
                <Text style={styles.wapo}>Líder:</Text> Mientras este modelo esté unido a una unidad, puedes repetir las tiradas de impacto de 1 para los modelos de esa unidad. {'\n'}
                <Text style={styles.wapo}>Cazador de Cabezas:</Text> Cada vez que este modelo destruye a un personaje enemigo, obtienes 1 punto de mando. {'\n'}
                <Text style={styles.wapo}>Aterrizaje de Precisión:</Text> Cada vez que este modelo termine una fase de refuerzos, selecciona una unidad enemiga visible a este modelo y a 12". Hasta el final de tu próximo turno, puedes repetir las tiradas de impacto fallidas para los ataques realizados por este modelo contra esa unidad. {'\n'}
                <Text style={styles.wapo}>Aura de Terror:</Text> Mientras una unidad enemiga esté a 6" de este modelo, resta 1 a las tiradas de liderazgo y de control de objetivo de esa unidad. {'\n'}
                <Text style={styles.wapo}>Salvación Invulnerable:</Text> 4+
            </Text>

            {/* Palabras clave */}
            <Text style={styles.border}>PALABRAS CLAVE</Text>
            <Text style={styles.descrip}>
                Infantería, Personaje, Épico Héroe, Volador, Mochila de salto, Caos, Legión Negra, Haarken Worldclaimer
            </Text>

            <Text style={styles.border}>PALABRAS CLAVE DE LA FRACCIÓN</Text>
            <Text style={styles.descrip}>Astartes del Caos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    border: { 
        color: '#000', 
        fontWeight: 'bold', 
        backgroundColor: '#676b6c', 
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
        backgroundColor: '#6f7773', 
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
        borderBottomColor: '#676b6c' 
    },
    tableCelltop: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#676b6c' 
    },
    tableCell: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#6f7773' 
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
        fontWeight: 'bold', 
        fontSize: 18 
    }
});
