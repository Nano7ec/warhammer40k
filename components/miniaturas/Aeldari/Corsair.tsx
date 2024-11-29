import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Corsair(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('../Aeldari/images/Corsair.png')} />

        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Núcleo:</Text> Exploradores 7"
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Hilos del Destino
          {'\n'}<Text style={styles.wapo}>Saqueadores del vacío:</Text> Cada vez que un modelo en esta unidad hace un ataque, repite una tirada de 1. Si el objetivo de ese ataque es una unidad enemiga dentro del alcance de un marcador de objetivo, puedes repetir la tirada para impactar en su lugar.
          {'\n'}<Text style={styles.wapo}>Caminante de nubes:</Text> En tu fase de Disparo, después de que este modelo haya disparado, si no está a distancia de compromiso de ninguna unidad enemiga, esa unidad puede hacer un movimiento Normal de hasta 6" como si fuera tu fase de Movimiento. Si lo hace, hasta el final del turno, esa unidad no es elegible para declarar una carga.
        </Text>
        <Text style={styles.border}>
        HABILIDADES DE EQUIPO
        </Text>
        <Text style={styles.descrip}>
            <Text style={styles.wapo}>Escudo de niebla: </Text>El portador tiene una salvación invulnerable de 4+.
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Lanzador Corsair:</Text></Text>
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
              <Text style={styles.cellText}>8</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6-1</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Trituradora Corsair:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>18"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>N/A</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Neuro disruptor:</Text></Text>
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
              <Text style={styles.cellText}>6</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Cañón Shuriken:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Pistola Shuriken:</Text></Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Shuriken Rifle:</Text></Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Cañón espectral:</Text></Text>
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
              <Text style={styles.cellText}>14</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Espada de poder Eldar:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
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
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>El shuriken pistol del Voidreaver Felarch puede ser reemplazado por uno de los siguientes:
            {'\n'}■ 1 neurodisruptor
            {'\n'}■ 1 rifle Shuriken
            {'\n'}El Voidreaver Felarch puede ser equipado con:
            {'\n'}■ 1 escudo de niebla
            {'\n'}Todos los Corsair Voidreavers en esta unidad pueden tener su shuriken pistol y Aeldari power sword reemplazados con 1 shuriken rifle.
            {'\n'}Por cada 5 modelos en esta unidad, 1 Corsair Voidreaver's Aeldari power sword o shuriken rifle puede ser reemplazado con uno de los siguientes:
            {'\n'}■ 1 bláster Corsair
            {'\n'}■ 1 Trituradora Corsair
            {'\n'}Si esta unidad contiene 10 modelos, 1 Corsair Voidreaver's shuriken rifle puede ser reemplazado con uno de los siguientes:
            {'\n'}■ 1 cañón shuriken
            {'\n'}■ 1 cañón espectral
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 1 Atracador del Vacío Félarca
          {'\n'}■ 4-9 Atracadores del Vacío Corsarios
          {'\n'}Cada modelo está equipado con: shuriken pistol, Aeldari power sword
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
      backgroundColor: "#1E757D",
      fontSize: 20,
      padding: 5,
      marginTop: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    border2: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#1E757D",
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
      borderBottomColor: "#1E757D",
    },
    tableCelltop: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: "center", // Centra el contenido horizontalmente
      justifyContent: "center", // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: "#1E757D",
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