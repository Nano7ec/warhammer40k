import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function WarDogHuntsman() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosKnight/images/war_dog_huntsman.png')} />
            <Text style={styles.border}>WAR DOG HUNTSMAN</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 12” {' '}
                <Text style={styles.wapo}>T:</Text> 10 {' '}
                <Text style={styles.wapo}>Sv:</Text> 3+ {' '}
                <Text style={styles.wapo}>W:</Text> 12 {' '}
                <Text style={styles.wapo}>Ld:</Text> 7 {' '}
                <Text style={styles.wapo}>OC:</Text> 8
            </Text>

            {/* Armas a distancia */}
            <Text style={styles.border}>ARMAS A DISTANCIA</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Alcance</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Desolador de fusión (lanzado)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Desolador de fusión (concentrado)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cañón automático de guerra</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>48"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>7</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>

            {/* Armas cuerpo a cuerpo */}
            <Text style={styles.border}>ARMAS CUERPO A CUERPO</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Rango</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Reaper chaintalon - golpe</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>10</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Reaper chaintalon - barrido</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>CORE:</Text> Despliegue rápido (3) {'\n'}
                <Text style={styles.wapo}>Habilidades:</Text> {'\n'}
                Cazador de cabezas: Cada vez que esta unidad realiza un ataque que selecciona a un personaje como objetivo, puedes volver a tirar la tirada de impacto. {'\n'}
                Explorador: Después de que ambos jugadores han desplegado sus ejércitos, esta unidad puede realizar un movimiento normal.
            </Text>

            {/* Daño */}
            <Text style={styles.border}>DAÑADO: 1-4 HERIDAS RESTANTES</Text>
            <Text style={styles.descrip}>
                Mientras esta unidad tenga 1-4 heridas restantes, usa el siguiente perfil de daño:
                {'\n'}
                <Text style={styles.wapo}>M:</Text> 6” {' '}
                <Text style={styles.wapo}>HA:</Text> 5+ {' '}
                <Text style={styles.wapo}>HP:</Text> 5+ {' '}
                <Text style={styles.wapo}>Salvación Invulnerable:</Text> 5+
            </Text>

            {/* Palabras clave */}
            <Text style={styles.border}>PALABRAS CLAVE</Text>
            <Text style={styles.descrip}>Vehículo, Caminante, Batalla, Caos, Perros de Guerra, Cazador</Text>

            {/* Palabras clave de la facción */}
            <Text style={styles.border}>PALABRAS CLAVE DE LA FACCIÓN</Text>
            <Text style={styles.descrip}>Caballeros del Caos</Text>
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