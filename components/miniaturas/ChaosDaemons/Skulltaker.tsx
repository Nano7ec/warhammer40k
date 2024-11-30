import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Skulltaker() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosDaemons/images/skulltaker.png')} />
            <Text style={styles.border}>Habilidades</Text>
            <Text style={styles.descrip}>
                {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Infantería, Personaje, Épico Héroe, Caos, Demonio, Khorne, Skulltaker
                {'\n'}<Text style={styles.wapo}>Fracción:</Text> Legiones Daemónica
                {'\n'}<Text style={styles.wapo}>Desde las Sombras del Caos:</Text> Mientras este modelo esté liderando una unidad, cada vez que un enemigo termine un movimiento a 12" o menos de esta unidad, tira un D6: con un 4+, esa unidad enemiga sufre D3 heridas mortales.
                {'\n'}<Text style={styles.wapo}>Cazador de Cráneos:</Text> Cada vez que este modelo haga un ataque que seleccione a un Personaje enemigo, puedes repetir la tirada de herida.
                {'\n'}<Text style={styles.wapo}>La Espada Segadora:</Text> Cada vez que este modelo haga un ataque con esta arma, un impacto exitoso inflige 2 heridas mortales al objetivo y la secuencia de ataque termina.
            </Text>

            {/* Tabla de armas de combate cuerpo a cuerpo */}
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
                <View style={styles.tableCell}><Text style={styles.cellText}>La Espada Segadora</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>7</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            {/* Salvación Invulnerable */}
            <Text style={styles.border}>Salvación Invulnerable</Text>
            <Text style={styles.descrip}>
                4+
            </Text>

            <Text style={styles.border}>Composición de la Unidad</Text>
            <Text style={styles.descrip}>
                ■ 1 Skulltaker - Épico Héroe{'\n'}
                Este modelo está equipado con: La Espada Segadora
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    border: { 
        color: '#fff', 
        fontWeight: 'bold', 
        backgroundColor: '#11183f', 
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
        backgroundColor: '#3b3d5e', 
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
        borderBottomColor: '#3b3d5e' 
    },
    tableCelltop: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#11183f' 
    },
    tableCell: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        backgroundColor: '#3b3d5e' 
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
