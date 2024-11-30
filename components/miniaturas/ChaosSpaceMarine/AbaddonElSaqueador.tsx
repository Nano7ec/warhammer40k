import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function AbaddonElSaqueador() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosSpaceMarine/images/abaddon.png')} />
            <Text style={styles.border}>ABADDON EL SAQUEADOR</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 5” {' '}
                <Text style={styles.wapo}>T:</Text> 5 {' '}
                <Text style={styles.wapo}>HA:</Text> 2+ {' '}
                <Text style={styles.wapo}>HP:</Text> 2+ {' '}
                <Text style={styles.wapo}>F:</Text> 5 {' '}
                <Text style={styles.wapo}>R:</Text> 5 {' '}
                <Text style={styles.wapo}>H:</Text> 9 {' '}
                <Text style={styles.wapo}>A:</Text> 5 {' '}
                <Text style={styles.wapo}>L:</Text> 10 {' '}
                <Text style={styles.wapo}>Sv:</Text> 2+
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Talon of Horus</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>24"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Drach'nyen</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>10</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Talon of Horus</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>

            {/* Señor de la Guerra */}
            <Text style={styles.border}>SEÑOR DE LA GUERRA</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Marca de la Muerte (Aura):</Text> Mientras una unidad amiga de Núcleo esté a 6" de este modelo, puedes repetir la tirada de ataque cada vez que esa unidad haga un ataque. {'\n'}
                <Text style={styles.wapo}>Aura de Odio (Aura):</Text> Mientras una unidad amiga de Núcleo de Heretic Astartes esté a 6" de este modelo, añade 1 a la tirada de herir cada vez que esa unidad haga un ataque. {'\n'}
                <Text style={styles.wapo}>Señor de las Legiones Traidoras (Aura):</Text> Mientras una unidad amiga de Núcleo de Heretic Astartes esté a 6" de este modelo, puedes repetir las tiradas de moral fallidas para esa unidad.
            </Text>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Núcleo:</Text> Black Legion, Líder {'\n'}
                <Text style={styles.wapo}>Líder:</Text> Este modelo puede unirse a las siguientes unidades: Terminator Squad, Chosen. {'\n'}
                <Text style={styles.wapo}>Comandante Supremo:</Text> Este modelo debe ser tu Señor de la Guerra. {'\n'}
                <Text style={styles.wapo}>Táctico Supremo:</Text> Una vez por batalla, puedes usar una Estratagema sin gastar puntos de Mando. {'\n'}
                <Text style={styles.wapo}>Salvación Invulnerable:</Text> 4+
            </Text>

            {/* Palabras clave */}
            <Text style={styles.border}>PALABRAS CLAVE</Text>
            <Text style={styles.descrip}>
                Infantería, Personaje, Épico Héroe, Terminator, Caos Universal, Caos, Khorne, Slaanesh, Nurgle, Tzeentch, Abaddon el Saqueador
            </Text>

            <Text style={styles.border}>PALABRAS CLAVE DE LA FACCIÓN</Text>
            <Text style={styles.descrip}>Heretic Astartes</Text>
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
