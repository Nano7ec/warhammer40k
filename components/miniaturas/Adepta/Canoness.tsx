import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Canoness(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('../Adepta/images/Canoness.png')} />

        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          {'\n'}<Text style={styles.wapo}>Núcleo:</Text> Líder
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Actos de Fe
          {'\n'}<Text style={styles.wapo}>Liderar a los Justos:</Text> Mientras este modelo esté liderando una unidad, cada vez que un modelo de esa unidad haga un ataque, puedes repetir la tirada para impactar.
          {'\n'}<Text style={styles.wapo}>Gracia del Emperador:</Text> Una vez por batalla, al inicio de cualquier fase, este modelo puede usar esta habilidad. Si lo hace, hasta el final de la fase, este modelo tiene una salvación invulnerable de 2+.
          {'\n'}<Text style={styles.wapo}>Salvación Invulnerable: +4</Text>
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

              <Text style={styles.cellText}><Text style={styles.wapo}>Pistola bólter [Pistola]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
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
        <View style={styles.tableRow}>
        <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Brasero de fuego sagrado [Disparo único, Tormento]:
                {'\n'}(El portador solo puede disparar esta arma una vez por batalla.)</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
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
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
        <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Condemnator boltgún [Precisión, Disparo rápido 1, Impactos devastadores]:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
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
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
        <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Pistola Inferno [Melta 2, Pistola]:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6"</Text>
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
              <Text style={styles.cellText}>-4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3</Text>
            </View>
          </>
        </View>
        <View style={styles.tableRow}>
        <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Pistola de plasma – estándar [Pistola]:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Pistola de plasma – sobrecargada [Pistola peligrosa]:</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
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
              <Text style={styles.cellText}>-3</Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Espada bendita:</Text></Text>
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
        <View style={styles.tableRow}>
        <>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}><Text style={styles.wapo}>Sierra</Text></Text>
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
              <Text style={styles.cellText}><Text style={styles.wapo}>Arma de poder:</Text></Text>
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
        <Text style={styles.MinDes}>
        (Antes de seleccionar los objetivos de esta arma, elige uno de estos perfiles para realizar ataques con ella.)
        </Text>
        <>
          <Text style={styles.border}>
          HABILIDADES DEL EQUIPO DE GUERRA
          </Text>
          <Text style={styles.descrip}>■ Varilla Nula: 
            {'\n'}Los modelos en la unidad del portador tienen la regla Sin Dolor 4+ contra ataques psíquicos.
           </Text>
           <Text style={styles.descrip}>■ Varilla de Mando: 
            {'\n'}Cada vez que selecciones la unidad del portador como objetivo de una Estratagema, tira un dado; con un resultado de 4+, obtienes 1 PC.
           </Text>
        </>
      </> 
        </View>
    );
}

const styles = StyleSheet.create({
    border: { color: '#fff', fontWeight: 'bold', backgroundColor: '#2C0069', fontSize: 20, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10,
      marginLeft: 5,
      marginRight: 5,
     },
    descrip: {fontSize: 18,
      marginLeft: 5,
      marginRight: 5, 
      backgroundColor: '#C5ACE3', 
      color: '#000000', 
      paddingLeft: 3, 
      paddingRight: 3, 
      paddingBottom: 3, 
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10 },
    image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
    tableRow: {
      flexDirection: 'row', // Alinear elementos en fila
      borderBottomWidth: 1,
      borderBottomColor: '#2C0069',
    },
    tableCelltop: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: 'center', // Centra el contenido horizontalmente
      justifyContent: 'center', // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: '#2C0069',
      marginTop: 5,
      fontSize: 10
    },
    tableCell: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: 'center', // Centra el contenido horizontalmente
      justifyContent: 'center', // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: '#C5ACE3',
      fontSize: 10
    },
    headerText: {
      color: '#fff', fontWeight: 'bold', fontSize: 20
    },
    cellText: {
      fontSize: 14,
      color: '#000',
  
    },
    wapo: {
      color: '#2C0069',
      fontWeight: 'bold'
    },
    MinDes: {
      fontSize: 18, color: '#000000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3
    }
  });