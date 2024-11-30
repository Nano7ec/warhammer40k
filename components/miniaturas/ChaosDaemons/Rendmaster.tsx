import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Rendmaster() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosDaemons/images/rendmaster.png')} />
            <Text style={styles.border}>Habilidades</Text>
            <Text style={styles.descrip}>
                {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Montura, Personaje, Caos, Demonio, Khorne, Rendmaster en Trono de Sangre
                {'\n'}<Text style={styles.wapo}>Fracción:</Text> Legiones Daemónicas
                {'\n'}<Text style={styles.wapo}>Blood Tithe:</Text> Al comienzo de cada fase de batalla, si una o más unidades han sido destruidas en esa fase, obtienes 1 punto de Blood Tithe.
                {'\n'}<Text style={styles.wapo}>Warp Storm:</Text> Al comienzo de tu fase de combate, si esta unidad está en el campo de batalla, tira 1D6 por cada unidad enemiga en el campo de batalla. Con un resultado de 4+, esa unidad sufre 1 herida mortal.
                {'\n'}<Text style={styles.wapo}>Daemonic Surge:</Text> Al comienzo de tu fase de combate, puedes realizar un ataque adicional con esta unidad por cada 4+ que obtengas en una tirada de 1D6.
            </Text>

            {/* Tabla de armas de combate cuerpo a cuerpo */}
            <Text style={styles.border}>Armas de Combate Cuerpo a Cuerpo</Text>
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Hacha de Khorne (empuñada con ambas manos)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>7</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={styles.cellText}>Trono de Sangre</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
            </View>

            {/* Salvación Invulnerable */}
            <Text style={styles.border}>Salvación Invulnerable</Text>
            <Text style={styles.descrip}>
                4+
            </Text>

            <Text style={styles.border}>Composición de la Unidad</Text>
            <Text style={styles.descrip}>
                ■ 1 Rendmaster en Trono de Sangre{'\n'}
                Este modelo está equipado con: Hacha de Khorne (empuñada con ambas manos), Trono de Sangre
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
