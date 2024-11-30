import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function FabiusBile() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosSpaceMarine/images/fabius.png')} />
            <Text style={styles.border}>FABIUS BILE</Text>

            {/* Atributos */}
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>M:</Text> 6" {' '}
                <Text style={styles.wapo}>HA:</Text> 4+ {' '}
                <Text style={styles.wapo}>HP:</Text> 3+ {' '}
                <Text style={styles.wapo}>F:</Text> 5 {' '}
                <Text style={styles.wapo}>R:</Text> 4 {' '}
                <Text style={styles.wapo}>H:</Text> 6 {' '}
                <Text style={styles.wapo}>A:</Text> 4 {' '}
                <Text style={styles.wapo}>L:</Text> 8 {' '}
                <Text style={styles.wapo}>OC:</Text> 1
            </Text>

            {/* Armas a distancia */}
            <Text style={styles.border}>ARMAS A DISTANCIA</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Alcance</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Chirurgeon (arma de pistola)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>

            {/* Armas de combate cuerpo a cuerpo */}
            <Text style={styles.border}>ARMAS DE COMBATE CUERPO A CUERPO</Text>
            <View style={styles.tableRow}>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>Nombre del arma</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>FP</Text></View>
                <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Bastón de Tormento</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Chirurgeon (arma de combate)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>3"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Acolito Cirujano</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
            </View>

            {/* Habilidades */}
            <Text style={styles.border}>HABILIDADES</Text>
            <Text style={styles.descrip}>
                <Text style={styles.wapo}>Núcleo:</Text> Sentir No el Dolor 5+, Líder {'\n'}
                <Text style={styles.wapo}>Facción:</Text> Pacto Oscuro {'\n'}
                <Text style={styles.wapo}>Sentir No el Dolor 5%:</Text> Cada vez que una unidad con esta habilidad pierde una herida, tira un dado D6. Con un resultado de 5+, esa herida no se pierde. {'\n'}
                <Text style={styles.wapo}>Líder:</Text> Esta unidad puede ser seleccionada para liderar una unidad. {'\n'}
                <Text style={styles.wapo}>Experimentos Mejorados:</Text> Durante la fase de mando, puedes seleccionar una unidad de Infantería del Caos dentro de 3" de esta unidad. Hasta el comienzo de tu próxima fase de mando, añade 1 a la Fuerza y la Habilidad de Armas de los modelos en esa unidad. {'\n'}
                <Text style={styles.wapo}>Acolito Cirujano:</Text> Mientras esta unidad contenga un Acolito Cirujano, cada vez que esta unidad realiza un chequeo de Sentir No el Dolor, puedes repetir el dado. 
            </Text>

            {/* Palabras clave */}
            <Text style={styles.border}>PALABRAS CLAVE</Text>
            <Text style={styles.descrip}>
                Todas las unidades, Infantería, Caos, Universo del Caos, Fabius Bile, Personaje de Fabius Bile, Épico, Fabius Bile
            </Text>

            <Text style={styles.border}>PALABRAS CLAVE DE LA FRACCIÓN</Text>
            <Text style={styles.descrip}>Astartes Renegados</Text>
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