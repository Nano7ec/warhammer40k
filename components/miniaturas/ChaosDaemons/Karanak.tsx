import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Karanak() {
    return (
        <View>
            <Image resizeMode="stretch" style={styles.image} source={require('../ChaosDaemons/images/karanak.png')} />
            <Text style={styles.border}>Habilidades</Text>
            <Text style={styles.descrip}>
                {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Bestia, Personaje, Héroe Épico, Caos, Demonio, Khorne, Karanak
                {'\n'}<Text style={styles.wapo}>Fracción:</Text> Legiones Demoníacas
                {'\n'}<Text style={styles.wapo}>Aullido de la Caza:</Text> En tu fase de movimiento, puedes seleccionar una unidad enemiga visible a Karanak. Hasta el final de la fase, cada vez que un ataque sea dirigido a esa unidad, puedes repetir la tirada de ataque.
                {'\n'}<Text style={styles.wapo}>Perro de la Sangre:</Text> Cada vez que una unidad enemiga sea destruida por un ataque realizado por este modelo, puedes seleccionar una unidad amiga de Legiones Demoníacas dentro de 12" de este modelo. Hasta el final del turno, esa unidad tiene la habilidad de Sentir el Dolor 5+.
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
                <View style={styles.tableCell}><Text style={styles.cellText}>Mordisco de alma (precisión)</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>7</Text></View>
                <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
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
                ■ 1 Karanak - Héroe Épico{'\n'}
                Esta unidad puede incluir hasta dos perros de caza adicionales, llamados collares de Khorne.
            </Text>

            {/* Habilidades de guerra */}
            <Text style={styles.border}>Habilidades de Guerra</Text>
            <Text style={styles.descrip}>
                Collar de Khorne: Este portador tiene la habilidad de Sentir el Dolor 3+.
            </Text>

            {/* Líder */}
            <Text style={styles.border}>Líder</Text>
            <Text style={styles.descrip}>
                Esta unidad puede ser adjunta a las siguientes unidades:
                {'\n'}Perros de caza
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
