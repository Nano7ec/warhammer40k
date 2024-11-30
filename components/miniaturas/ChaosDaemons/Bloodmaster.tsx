import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Bloodmaster() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosDaemons/images/bloodmaster.png')} />
            <Text style={styles.border}>Habilidades</Text>
            <Text style={styles.descrip}>
                {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Infantería, Personaje, Caos, Demonio, Khorne, Bloodmaster
                {'\n'}<Text style={styles.wapo}>Fracción:</Text> Legiones Daemónica
                {'\n'}<Text style={styles.wapo}>Dogma de la Sangre:</Text> Mientras esta miniatura esté liderando una unidad, cada vez que un modelo de esa unidad haga un ataque cuerpo a cuerpo, si esa unidad está en la Sombra del Caos, añade 1 a la Fuerza de ese ataque.
                {'\n'}<Text style={styles.wapo}>Líder:</Text> Esta miniatura puede unirse a las siguientes unidades: Bloodletters. Una miniatura no puede unirse a más de una unidad y una unidad no puede tener más de un Líder.
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Hoja de Sangre</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>5+</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
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
                ■ 1 Bloodmaster{'\n'}
                Este modelo está equipado con: Hoja de Sangre
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
