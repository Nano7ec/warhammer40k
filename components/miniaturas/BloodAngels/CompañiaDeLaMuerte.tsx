import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function CompañiaDeLaMuerte() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../BloodAngels/images/compañia_de_la_muerte.png')} />
                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Infantería, Granadas, Imperium, Compañía de la Muerte
                    {'\n'}<Text style={styles.wapo}>Rabia Negra:</Text> Cada vez que un modelo de esta unidad haga un ataque, puedes volver a tirar el dado de impacto. Mientras esta unidad no esté a 12" o menos de uno o más modelos de Capellán aliados, no puede ser seleccionada para Retirarse y la característica de Control de Objetivos de los modelos de esta unidad será 0.
                    {'\n'}<Text style={styles.wapo}>Visión de la Herejía:</Text> Una vez por turno, puedes seleccionar esta unidad para usar la Estratagema de Fuego de Sobrelivienda o la Estratagema de Intervención Heroica sin gastar CP.
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Pistola bólter</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Lanzallamas de mano</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>N/A</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cadenas de Astartes</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                </View>
                <Text style={styles.border}>Composición de la Unidad</Text>
                <Text style={styles.descrip}>
                    ■ 5-10 Marines de la Compañía de la Muerte{'\n'}
                    Cada modelo está equipado con: pistola bólter; bólter; arma de combate cuerpo a cuerpo.
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
