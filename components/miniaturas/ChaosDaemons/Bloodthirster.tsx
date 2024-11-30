import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Bloodthirster() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosDaemons/images/bloodthirster.png')} />
            <Text style={styles.border}>Habilidades</Text>
            <Text style={styles.descrip}>
                {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Monstruo, Personaje, Vuelo, Caos, Demonio, Khorne, Bloodthirster
                {'\n'}<Text style={styles.wapo}>Fracción:</Text> The Blood Legions of Khorne
                {'\n'}<Text style={styles.wapo}>Deadly Demise:</Text> D6
                {'\n'}<Text style={styles.wapo}>Deep Strike:</Text> Esta unidad puede desplegarse de manera especial.
                {'\n'}<Text style={styles.wapo}>Locura de Batalla (Aura):</Text> Mientras un aliado de Khorne esté a 6" de esta unidad, añade 1 a la fuerza de las armas de combate cuerpo a cuerpo de ese aliado.
                {'\n'}<Text style={styles.wapo}>Señor de la Matanza:</Text> Mientras esta unidad esté a 6" de tu ejército, añade 1 a la característica de ataque de las armas de combate cuerpo a cuerpo de tu ejército.
                {'\n'}<Text style={styles.wapo}>Rabia Incontenible:</Text> Cada vez que esta unidad lucha, si está a 6" de un enemigo, lucha una vez más después de la primera ronda de combate.
            </Text>

            {/* Tabla de armas a distancia */}
            <Text style={styles.border}>Armas a Distancia</Text>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Bloodflail</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>D6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Látigo de condenación</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2D6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Hacha de Khorne - golpe</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>16</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Hacha de Khorne - barrido</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>16</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>

            <Text style={styles.border}>Composición de la Unidad</Text>
            <Text style={styles.descrip}>
                ■ 1 Bloodthirster{'\n'}
                Este modelo está equipado con: Hacha de Khorne, Gran Hacha de Khorne
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