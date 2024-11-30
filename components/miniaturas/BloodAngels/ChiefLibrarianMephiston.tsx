import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function ChiefLibrarianMephiston() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../BloodAngels/images/bibliotecario_jefe_mefisto.png')} />
                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Infantería, Personaje, Héroe Épico, Psíquico, Granadas, Imperio, Tacticus, Bibliotecario Jefe Mefistón
                    {'\n'}<Text style={styles.wapo}>El Impulso (Psíquica):</Text> Mientras este modelo lidere una unidad, las miniaturas de esa unidad tendrán la habilidad "Primero en Atacar" (Fights First).
                    {'\n'}<Text style={styles.wapo}>Capucha Psíquica:</Text> Mientras este modelo lidere una unidad, las miniaturas de esa unidad tienen la habilidad "Resistencia al Dolor 4+" (Feel No Pain 4+) contra ataques psíquicos y daño mortal.
                    {'\n'}<Text style={styles.wapo}>Mirada Transfixiante (Psíquica):</Text> Al comienzo de la fase de combate, selecciona una unidad enemiga en rango de compromiso y tira 1D6:
                    {'\n'}- Con un 1, este psíquico sufre D3 heridas mortales.
                    {'\n'}- Con un 2-5, reduce la Habilidad de Armas (HA) de las armas cuerpo a cuerpo enemigas en 1 hasta el final de la fase.
                    {'\n'}- Con un 6, reduce tanto la HA como los ataques de esas armas en 1 hasta el final de la fase.
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Furia de los Ancestros</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>D3</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Pistola de Plasma (Sobrecargada)</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>8</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Vitarus [Psíquica]</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a Cuerpo</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>9</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>D3</Text></View>
                </View>
                <Text style={styles.border}>Composición de la Unidad</Text>
                <Text style={styles.descrip}>
                    ■ 1 Bibliotecario Jefe Mefistón – Héroe Épico{'\n'}
                    Este modelo está equipado con: pistola de plasma; Furia de los Ancestros; Vitarus.
                </Text>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    /* Estilos idénticos a los del componente Astorath */
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
