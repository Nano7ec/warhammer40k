import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Stratoraptor() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../Mechanicus/images/Stratoraptor.png')} />

                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    <Text style={styles.wapo}>Núcleo:</Text> Destrucción Letal D3, Flotar
                    {'\n'}<Text style={styles.wapo}>Facción:</Text> Imperativos de Doctrina
                    {'\n'}<Text style={styles.wapo}>Pasada de Ataque:</Text> Cada vez que este modelo realice un ataque a distancia que tenga como objetivo una unidad enemiga (excluyendo unidades que puedan volar), suma 1 a la tirada para impactar.
                </Text>
                <Text style={styles.border}>
                    HABILIDADES DEL EQUIPO
                </Text>
                <Text style={styles.descrip}>
                    <Text style={styles.wapo}>Lanzador de Paja:</Text> El portador tiene la palabra clave Humo.
                    {'\n'}<Text style={styles.wapo}>Enlace de Comando:</Text> Cada vez que selecciones la unidad del portador como objetivo de una Estratagema, tira un D6: con un 5+, ganas 1CP.
                </Text>
                <Text style={styles.border}>
                    DAÑADO: 1-3 HERIDAS RESTANTES
                </Text>
                <Text style={styles.descrip}>
                    Mientras este modelo tenga 1-3 heridas restantes, cada vez que realice un ataque, resta 1 de la tirada para impactar.
                </Text>
                {/* Tabla de Armas a Distancia */}
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Armas a Distancia</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Rango</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>A</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>HP</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>F</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>PA</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>D</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Ametralladora pesada Cognis [FUEGO RÁPIDO 3, IMPACTOS SOSTENIDOS 1]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>36"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>0</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Bláster de fósforo pesado [IGNORA COBERTURA]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>36"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Laser Cognis gemelo [IMPACTOS SOSTENIDOS 1, GEMELO]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>48"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>12</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>D6+1</Text>
                        </View>
                    </>
                </View>
                {/* Tabla de Armas Cuerpo a Cuerpo */}
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Armas Cuerpo a Cuerpo</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>Rango</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>A</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>HA</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>F</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>PA</Text>
                        </View>
                        <View style={styles.tableCelltop}>
                            <Text style={styles.headerText}>D</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Casco blindado:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>0</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
            </>
            <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>El enlace de comando de este modelo puede ser reemplazado con 1 lanzador de paja.
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 1 Archaeopter Stratoraptor
          {'\n'}Este modelo está equipado con: 2 ametralladoras pesadas Cognis; 2 blásters de fósforo pesado; láser Cognis gemelo; casco blindado; enlace de comando.
           </Text>
        </>
        </View>
    );
}

const styles = StyleSheet.create({
    image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
    border: {
      color: "#fff",
      fontWeight: "bold",
      backgroundColor: "#9F322A",
      fontSize: 20,
      padding: 5,
      marginTop: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    border2: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#9F322A",
        fontSize: 20,
        padding: 5,
        marginTop: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    
      },
    descrip: {
      fontSize: 18,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      paddingLeft: 3,
      paddingRight: 3,
      paddingBottom: 3,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    italicdesc: {
        fontSize: 15,
        backgroundColor: "#FFFFFF",
        fontStyle: "italic",
        color: "#000000",
        paddingLeft: 3,
        paddingRight: 3,
        paddingBottom: 3,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
    tableRow: {
      flexDirection: "row", // Alinear elementos en fila
      borderBottomWidth: 1,
      borderBottomColor: "#9F322A",
    },
    tableCelltop: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: "center", // Centra el contenido horizontalmente
      justifyContent: "center", // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: "#9F322A",
      marginTop: 5,
      fontSize: 10,
    },
    tableCell: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: "center", // Centra el contenido horizontalmente
      justifyContent: "center", // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: "#FFFFFF",
      fontSize: 10,
    },
    headerText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 20,
    },
    cellText: {
      fontSize: 14,
      color: "#000000",
    },
    wapo: {
      color: "#000000",
      fontWeight: "bold",
    },
    MinDes: {
      fontSize: 18,
      color: "#000000",
      paddingLeft: 3,
      paddingRight: 3,
      paddingBottom: 3,
    },
});
