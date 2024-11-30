import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function WarDogStalker() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosKnight/images/war_dog_stalker.png')} />
            <Text style={styles.border}>WAR DOG STALKER (ACECHADOR CANINO DE GUERRA)</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 12” {' '}
                <Text style={styles.wapo}>T:</Text> 10 {' '}
                <Text style={styles.wapo}>Sv:</Text> 3+ {' '}
                <Text style={styles.wapo}>W:</Text> 12 {' '}
                <Text style={styles.wapo}>Ld:</Text> 7+ {' '}
                <Text style={styles.wapo}>OC:</Text> 8
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Autocañón de guerra</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>24”</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2D3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>9</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Lanza demoníaca de aliento</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>18”</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>10</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6+2</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Lanzallamas demoníaco múltiple</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>36”</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuchilla de guerra (ataque)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>10</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuchilla de guerra (barrido)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Pisotones</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Núcleo:</Text> Demonios de la disformidad {'\n'}
                <Text style={styles.wapo}>Facción:</Text> Legiones de la disformidad {'\n'}
            </Text>

            {/* Daño */}
            <Text style={styles.border}>DAÑO: 4-6 HERIDAS RESTANTES</Text>
            <Text style={styles.descrip}>
                Mientras esta unidad tenga 4-6 heridas restantes, sus atributos se modifican:
                <Text style={styles.wapo}> M:</Text> 8” {' '}
                <Text style={styles.wapo}>HA:</Text> 4+ {' '}
                <Text style={styles.wapo}>HS:</Text> 5+ {' '}
                <Text style={styles.wapo}>Salvación Invulnerable:</Text> 5+
            </Text>

            {/* Salvación Invulnerable */}
            <Text style={styles.border}>SALVACIÓN INVULNERABLE</Text>
            <Text style={styles.descrip}>5+</Text>

            {/* Opciones de equipo */}
            <Text style={styles.border}>OPCIONES DE EQUIPO</Text>
            <Text style={styles.descrip}>
                Este modelo puede reemplazar su autocañón de guerra con un cañón termal. {'\n'}
                Este modelo puede reemplazar su lanzallamas demoníaco con un lanzallamas pesado. {'\n'}
                Este modelo puede reemplazar sus cuchillas de guerra por lanzas de guerra demoníacas.
            </Text>
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
