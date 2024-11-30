import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function CaballeroDesecrator() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosKnight/images/knight_desecrator.png')} />
            <Text style={styles.border}>CABALLERO DESECRATOR</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 10” {' '}
                <Text style={styles.wapo}>T:</Text> 12 {' '}
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Destructor láser Despoiler</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>72"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>16</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6+D6</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Heavy stubber Despoiler</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>36"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Espada sierra Reaper - barrido</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Espada sierra Reaper - golpe</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>16</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Garra warpstrike - barrido</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>10</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>10</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Garra warpstrike - golpe</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>20</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6+2</Text></View>
            </View>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>CEREBR: Demise Mortal D6</Text>
            <Text style={styles.descrip}>FACTION: Traitoris Lance, Towering, Abhorrent, Character, Chaos, Knight Desecrator</Text>
            <Text style={styles.descrip}>Desecrator Ruinous Power: Mientras un aliado Chaos Knights esté a 6" de esta miniatura, cada vez que ese aliado haga un ataque, puedes repetir la tirada de impacto.</Text>
            <Text style={styles.descrip}>Horrible Fascination: Cada vez que un enemigo termine un movimiento a 6" de esta miniatura, tira 1D6: con un 4+, ese enemigo sufre 1D3 mortales.</Text>
            <Text style={styles.descrip}>Towering: Esta miniatura puede disparar a través de unidades y terrenos que no sean de la categoría Towering.</Text>

            {/* Daño */}
            <Text style={styles.border}>DAÑADO: 1-7 HERIDAS RESTANTES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 6” {' '}
                <Text style={styles.wapo}>HA:</Text> 4+ {' '}
                <Text style={styles.wapo}>HP:</Text> 5+ {' '}
                <Text style={styles.wapo}>SALVACIÓN INVULNERABLE:</Text> 5+
            </Text>

            {/* Descripción */}
            <Text style={styles.border}>DESCRIPCIÓN</Text>
            <Text style={styles.descrip}>El Caballero Desecrator es una máquina de guerra imponente que puede inspirar terror en sus enemigos, cambiando el curso de la batalla gracias a su armamento devastador y habilidades especiales. Su presencia en el campo de batalla puede marcar la diferencia en los combates más intensos.</Text>
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