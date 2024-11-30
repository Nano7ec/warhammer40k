import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function PrincipeDemonioWings() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosSpaceMarine/images/heretic_wing.png')} />
            <Text style={styles.border}>PRÍNCIPE DEMONIO DE LOS ASTARTES HEREJES CON ALAS</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 12" {' '}
                <Text style={styles.wapo}>A:</Text> 9 {' '}
                <Text style={styles.wapo}>F:</Text> 2 {' '}
                <Text style={styles.wapo}>R:</Text> 10 {' '}
                <Text style={styles.wapo}>H:</Text> 6 {' '}
                <Text style={styles.wapo}>A:</Text> 3 {' '}
                <Text style={styles.wapo}>Ld:</Text> 4 {' '}
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Infernal cannon</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>24"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Hellforged weapons</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>

            {/* Alianzas Demoníacas */}
            <Text style={styles.border}>ALIANZA DEMONÍACA</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Príncipe Demonio de Khorne:</Text> Si esta unidad tiene la palabra clave Khorne, añade 2 a la característica de Fuerza de esta unidad. {'\n'}
                <Text style={styles.wapo}>Príncipe Demonio de Tzeentch:</Text> Si esta unidad tiene la palabra clave Tzeentch, añade 2 a la característica de Resistencia de esta unidad. {'\n'}
                <Text style={styles.wapo}>Príncipe Demonio de Nurgle:</Text> Si esta unidad tiene la palabra clave Nurgle, añade 2 a la característica de Heridas de esta unidad. {'\n'}
                <Text style={styles.wapo}>Príncipe Demonio de Slaanesh:</Text> Si esta unidad tiene la palabra clave Slaanesh, añade 2 a la característica de Ataques de esta unidad.
            </Text>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Habilidades básicas:</Text> Deadly Demise (D3), Deep Strike {'\n'}
                <Text style={styles.wapo}>Tácticas de los Príncipes Demonio:</Text> Cada vez que esta unidad realiza un ataque, puedes cambiar un resultado de 1 en la tirada de impacto por un resultado de 6. {'\n'}
                <Text style={styles.wapo}>Auras de los Príncipes Demonio:</Text> Mientras un aura de esta unidad esté activa, añade 1 a la característica de Liderazgo de las unidades amigas de los Astartes Herejes a 6" de esta unidad. {'\n'}
                <Text style={styles.wapo}>Vuelo:</Text> Esta unidad puede volar y no se ve afectada por el terreno al avanzar. {'\n'}
                <Text style={styles.wapo}>Salvación Invulnerable:</Text> 4+
            </Text>

            {/* Palabras clave */}
            <Text style={styles.border}>PALABRAS CLAVE</Text>
            <Text style={styles.descrip}>
                Monstruo, Psíquico, Personaje, Caos, Demonio, Príncipe Demonio con Alas
            </Text>

            {/* Palabras clave de la facción */}
            <Text style={styles.border}>PALABRAS CLAVE DE LA FACCIÓN</Text>
            <Text style={styles.descrip}>Astartes Herejes</Text>

            {/* Opciones de equipo y composición */}
            <Text style={styles.border}>OPCIONES DE EQUIPO</Text>
            <Text style={styles.descrip}>Ninguna</Text>
            <Text style={styles.border}>COMPOSICIÓN DE LA UNIDAD</Text>
            <Text style={styles.descrip}>1 Príncipe Demonio de los Astartes Herejes con Alas</Text>
            <Text style={styles.descrip}>Esta unidad está equipada con: infernal cannon, hellforged weapons.</Text>
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

