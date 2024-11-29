import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Morvenn(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('../Adepta/images/Morvenn.png')} />

        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Núcleo:</Text> Muerte Demoledora 1, Líder
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Actos de Fe
          {'\n'}<Text style={styles.wapo}>Abadesa Sancturum:</Text> Mientras este modelo esté liderando una unidad, cada vez que un modelo de esa unidad haga un ataque, puedes repetir la tirada para impactar y repetir la tirada para herir.
          {'\n'}<Text style={styles.wapo}>Indignación Justa:</Text> Una vez por batalla, en tu fase de mando, este modelo puede usar esta habilidad. Si lo hace, hasta el inicio de tu próxima fase de mando, suma 3 a la característica de Ataques de Fidelis y la Lanza de Iluminación.
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

              <Text style={styles.cellText}><Text style={styles.wapo}>Fidelis (Impactos Sostenidos)</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Lanzamisiles Paragon – Prioris:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>8</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
        <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Lanzamisiles Paragon – Sanctorum (Explosivo):</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2D6</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Lanza de Iluminación – Golpe (Heridas Devastadoras):</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>8</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
        <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Lanza de Iluminación – Barrido:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Cuerpo a cuerpo</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>10</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>
            COMPOSICIÓN DE UNIDAD
          </Text>
          <Text style={styles.descrip}>■ 1 Morvenn Vahl – Héroe Épico
            {'\n'}Este modelo está equipado con: Fidelis, Lanzamisiles Paragon, Lanza de Iluminación.
           </Text>
        </>
        <>
          <Text style={styles.border}>
            LIDER
          </Text>
          <Text style={styles.descrip}>■ Este modelo puede unirse a la siguiente unidad:
            {'\n'}Exotrajes Paragon
           </Text>
        </>
        <>
          <Text style={styles.border}>
          COMANDANTE SUPREMO
          </Text>
          <Text style={styles.descrip}>■ Si este modelo está en tu ejército, debe ser tu Señor de la Guerra.
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