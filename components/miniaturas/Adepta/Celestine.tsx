import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Celestine(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('../Adepta/images/Celestine.png')} />

        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Núcleo:</Text> Golpe Profundo, Líder
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Actos de Fe
          {'\n'}<Text style={styles.wapo}>Curación de Lágrimas:</Text> Mientras esta unidad contenga un modelo de Celestine, en tu fase de Mando, si esta unidad está a 6" de tu Sacerdote, esta unidad recupera D3 heridas perdidas.
          {'\n'}<Text style={styles.wapo}>Vida Eterna:</Text> Mientras esta unidad contenga uno o más modelos de Geminae Superia, Celestine tiene la habilidad No Hay Dolor 4+
          {'\n'}<Text style={styles.wapo}>Intervención Milagrosa:</Text> La primera vez que esta unidad de Celestine es destruida, tira un D6 al final de la fase. Con un 2+, restablece esta unidad con todos sus modelos con todas sus heridas restantes, y colócala a 6" de un modelo enemigo. Esta unidad no puede ser restablecida de esta manera más de una vez por batalla.
        </Text>
        <Text style={styles.border2}>
        Salvación Invulnerable: +4
        </Text>
        {/* Cabecera de la tabla */}
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
              <Text style={styles.headerText}>BS</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>S</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AP</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>D</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Pistola bólter (Pistola)</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
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

              <Text style={styles.cellText}><Text style={styles.wapo}>La Espada Ardiente:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        {/* Cabecera de la tabla */}
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
              <Text style={styles.headerText}>WS</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>S</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AP</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>D</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Arma de poder</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>La Espada Ardiente</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>Ninguna
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 1 Celestine - Héroe Épico
          {'\n'}■ 2 Geminae Superia
          {'\n'}Saint Celestine está equipada con la Espada Ardiente.
          {'\n'}Cada Geminae Superia está equipada con: pistola bólter, arma de poder.
           </Text>
        </>
        <>
          <Text style={styles.border}>
            LIDER
          </Text>
          <Text style={styles.descrip}>■ Esta unidad puede ser unida a las siguientes unidades:
            {'\n'}Escuadra Seraphim
            {'\n'}Escuadra Zephyrim.
           </Text>
        </>
      </> 
        </View>
    );
}

const styles = StyleSheet.create({
  image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
  border: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#5D0300",
    fontSize: 20,
    padding: 5,
    marginTop: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  border2: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#5D0300",
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
  tableRow: {
    flexDirection: "row", // Alinear elementos en fila
    borderBottomWidth: 1,
    borderBottomColor: "#5D0300",
  },
  tableCelltop: {
    flex: 1, // Distribuye equitativamente el espacio entre columnas
    alignItems: "center", // Centra el contenido horizontalmente
    justifyContent: "center", // Centra el contenido verticalmente
    padding: 5,
    backgroundColor: "#5D0300",
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