import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function PrincipeDemonio() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosSpaceMarine/images/Heretic.png')} />
            <Text style={styles.border}>PRÍNCIPE DEMONIO DE LOS ASTARTES HEREJES</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 8" {' '}
                <Text style={styles.wapo}>T:</Text> 10 {' '}
                <Text style={styles.wapo}>HA:</Text> 2+ {' '}
                <Text style={styles.wapo}>HP:</Text> 3+ {' '}
                <Text style={styles.wapo}>F:</Text> 8 {' '}
                <Text style={styles.wapo}>R:</Text> 10 {' '}
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
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cañón de energía</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>24"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Garras demoníacas</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Hacha infernal</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
            </View>

            {/* Alianza demoníaca */}
            <Text style={styles.border}>ALIANZA DEMONÍACA</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Príncipe Demonio de Khorne:</Text> Esta unidad tiene la palabra clave Khorne y +2 a la característica de Fuerza de esta unidad. {'\n'}
                <Text style={styles.wapo}>Príncipe Demonio de Tzeentch:</Text> Esta unidad tiene la palabra clave Tzeentch y +2 a la característica de Resistencia de esta unidad. {'\n'}
                <Text style={styles.wapo}>Príncipe Demonio de Nurgle:</Text> Esta unidad tiene la palabra clave Nurgle y +2 a la característica de Heridas de esta unidad. {'\n'}
                <Text style={styles.wapo}>Príncipe Demonio de Slaanesh:</Text> Esta unidad tiene la palabra clave Slaanesh y +2 a la característica de Ataques de esta unidad. {'\n'}
            </Text>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Núcleo:</Text> Despliegue rápido (3+). {'\n'}
                <Text style={styles.wapo}>Aura de Oscuridad:</Text> Mientras una unidad amiga de Heretic Astartes esté a 6" de esta unidad, resta 1 a las tiradas de Impacto de ataque de armas a distancia que apunten a esa unidad. {'\n'}
                <Text style={styles.wapo}>Señor de la Guerra:</Text> Mientras esta unidad sea tu Señor de la Guerra, puedes repetir las tiradas de Impacto de 1 para las unidades amigas de Heretic Astartes a 6" de esta unidad. {'\n'}
                <Text style={styles.wapo}>Salvación Invulnerable:</Text> 4+
            </Text>

            {/* Palabras clave */}
            <Text style={styles.border}>PALABRAS CLAVE</Text>
            <Text style={styles.descrip}>
                Monstruo, Personaje, Caos, Demonio, Príncipe Demonio
            </Text>

            <Text style={styles.border}>PALABRAS CLAVE DE LA FACCIÓN</Text>
            <Text style={styles.descrip}>Astartes Herejes</Text>
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
