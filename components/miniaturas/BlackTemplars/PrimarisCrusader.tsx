import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function PrimarisCrusader() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../BlackTemplars/images/PrimarisCrusader.png')} />

                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    <Text style={styles.wapo}>Núcleo:</Text> Exploradores 6"
                    {'\n'}<Text style={styles.wapo}>Facción:</Text> Juramento del Momento
                    {'\n'}<Text style={styles.wapo}>Celo Justo:</Text> Puedes volver a tirar las tiradas de Avance y Carga hechas para esta unidad.
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Pistola bólter [PISTOLA]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>18"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Rifle bólter [ASALTO, PESADO]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>24"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Pistola bólter pesada [PISTOLA]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>18"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Arma de fuego neófita [ASALTO]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>18"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Pistola de fuego puro [IGNORA COBERTURA, PISTOLA, TORRENTE]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>12"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>D6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>N/A</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Purgador [IGNORA COBERTURA, TORRENTE]:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>12"</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>D6</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>N/A</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>0</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Espada sierra Astartes:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>4</Text>
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
                            <Text style={styles.cellText}><Text style={styles.wapo}>Arma de combate cuerpo a cuerpo:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Arma de poder:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>5</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>1</Text>
                        </View>
                    </>
                </View>
                <View style={styles.tableRow}>
                    <>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}><Text style={styles.wapo}>Puño de combate:</Text></Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>3+</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>8</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>-2</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>2</Text>
                        </View>
                    </>
                </View>
            </>
            <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>La pistola bólter pesada del Primaris Sword Brother puede ser reemplazada por 1 pistola de fuego puro.
            {'\n'}Todos los Primaris Neophytes pueden reemplazar su pistola bólter y su espada sierra Astartes por 1 arma de fuego de Neophyte y 1 arma de combate cuerpo a cuerpo.
            {'\n'}Cualquier número de Primaris Initiates puede reemplazar su rifle bólter por 1 pistola bólter pesada y 1 espada sierra Astartes
            {'\n'}Por cada 10 modelos en esta unidad, hasta 2 Primaris Initiates pueden reemplazar su rifle bólter por una de las siguientes opciones:
            {'\n'}■ 1 pistola bólter pesada y 1 puño de combate.
            {'\n'}■ 1 purgador.
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 1 Hermano de la Espada Primaris
          {'\n'}■ 5-11 Iniciados Primaris
          {'\n'}■ 4-8 Neófitos Primaris
          {'\n'}El Hermano de la Espada Primaris está equipado con: pistola bólter pesada; arma de poder.
          {'\n'}Cada Iniciado Primaris está equipado con: pistola bólter; rifle bólter; arma de combate cuerpo a cuerpo.
          {'\n'}Cada Neófito Primaris está equipado con: pistola bólter; espada sierra Astartes.
           </Text>
        </>
        <>
            <Text style={styles.border}>
            UNIDAD ADJUNTA
            </Text>
            <Text style={styles.descrip}>Si un Personaje de tu ejército con la habilidad de Líder puede ser adjuntado a una Escuadra de Intercesores, puede ser adjuntado a esta unidad en su lugar.
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
      backgroundColor: "#002E40",
      fontSize: 20,
      padding: 5,
      marginTop: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    border2: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#002E40",
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
      borderBottomColor: "#002E40",
    },
    tableCelltop: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: "center", // Centra el contenido horizontalmente
      justifyContent: "center", // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: "#002E40",
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
