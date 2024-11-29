import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Missionary(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('../Adepta/images/Missionary.png')} />

        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Núcleo:</Text> Líder
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Actos de Fe
          {'\n'}<Text style={styles.wapo}>War Hymns:</Text> Mientras este modelo esté liderando una unidad, las armas cuerpo a cuerpo equipadas por los modelos en esa unidad tienen la habilidad [HITS SOSTENIDOS 1].
          {'\n'}<Text style={styles.wapo}>Holy Piety:</Text> Cada vez que este modelo haga un ataque cuerpo a cuerpo, si la unidad de este modelo está Battle-shocked, puedes repetir la tirada para impactar.
        </Text>
        <Text style={styles.border2}>
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

              <Text style={styles.cellText}><Text style={styles.wapo}>Autogun (pistol 1):</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>+4</Text>
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
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Holy pistol (pistol 1):</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>+4</Text>
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

              <Text style={styles.cellText}><Text style={styles.wapo}>Ministorum shotgun (assault 2):</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>+4</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Chainsword</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
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
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Power weapon</Text></Text>
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
          <Text style={styles.descrip}>El arma de poder de este modelo puede ser reemplazada con una de las siguientes:
            {'\n'}■ 1 autogun y 1 chainsword
            {'\n'}■ 1 Ministorum shotgun y 1 chainsword
          </Text>
        </>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 1 Misionero             
            {'\n'}Este modelo está equipado con: holy pistol, arma de poder
           </Text>
        </>
        <>
          <Text style={styles.border}>
            LIDER
          </Text>
          <Text style={styles.descrip}>■ Este modelo puede unirse a las siguientes unidades:
            {'\n'}Arco-Flagelantes
            {'\n'}Escuadra de Hermanas de Batalla
            {'\n'}Cruzados
            {'\n'}Escuadra de Novicias
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