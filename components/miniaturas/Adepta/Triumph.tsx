import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Triumph(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('../Adepta/images/Triumph.png')} />

        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Núcleo:</Text> Líder
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Actos de Fe
          {'\n'}<Text style={styles.wapo}>Reliquias de las Matriarcas:</Text> Al inicio de la fase de combate, selecciona una de las habilidades de las Reliquias de las Matriarcas. Esta habilidad está activa hasta el inicio de tu próxima fase de combate.
        </Text>
        <Text style={styles.border2}>
        Daño: 1-5 Heridas Restantes:
        </Text>
        <Text style={styles.descrip}>
        Mientras este modelo tenga 1-5 heridas restantes, las armas de ataque de este modelo tienen una característica de A de 1 y no puede usar la habilidad de Reliquias de las Matriarcas. Sin embargo, aún puede usar la habilidad de Actos de Fe.
        </Text>
        <Text style={styles.border}>
        Salvación Invulnerable: 4+
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
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Armas reliquias</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>18</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
        <Text style={styles.border}>
        RELIQUIAS DE LAS MATRIARCAS
        </Text>
        <Text style={styles.descrip}>
          {'\n'}<Text style={styles.wapo}>El Corazón Ardiente (Aura):</Text> Mientras una unidad amiga de Adepta Sororitas esté a 6" de este modelo, si esa unidad es destruida, la habilidad Milagro de este modelo gana un resultado de 6 automáticamente.
          {'\n'}<Text style={styles.wapo}>Incensario de la Rosa Sagrada (Aura):</Text> Mientras una unidad amiga de Adepta Sororitas esté a 6" de este modelo, mejora la característica de Liderazgo de esa unidad en 1.
          {'\n'}<Text style={styles.wapo}>Simulacro del Cáliz de Ébano (Aura):</Text> Mientras una unidad amiga de Adepta Sororitas esté a 6" de este modelo, esa unidad puede realizar una acción y disparar sin que la acción falle.
          {'\n'}<Text style={styles.wapo}>Simulacro del Sudario Argenta (Aura):</Text> Mientras una unidad amiga de Adepta Sororitas esté a 6" de este modelo, añade 1 a las tiradas de ataque de esa unidad.
          {'\n'}<Text style={styles.wapo}>Simulacro del Corazón Valiente (Aura):</Text> Mientras una unidad amiga de Adepta Sororitas esté a 6" de este modelo, cada vez que una tirada de salvación de esa unidad falle, puedes volver a tirar esa tirada.
          {'\n'}<Text style={styles.wapo}>Simulacro de la Rosa Sangrienta (Aura):</Text> Mientras una unidad amiga de Adepta Sororitas esté a 6" de este modelo, añade 1 a las tiradas de herida de esa unidad.
        </Text>
        </>
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
          <Text style={styles.descrip}>■ 1 Triunfo de Santa Katherine - Héroe Épico
          {'\n'}Esta unidad está equipada con: pistola bólter, armas de combate cuerpo a cuerpo.
           </Text>
        </>
        <>
          <Text style={styles.border}>
            LIDER
          </Text>
          <Text style={styles.descrip}>Este modelo puede ser adjuntado a la siguiente unidad: 
            {'\n'}Escuadra de Hermanas de Batalla
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