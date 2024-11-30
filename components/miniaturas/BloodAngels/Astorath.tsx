import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Astorath() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../BloodAngels/images/astorath.png')} />
                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Infantería, Personaje, Héroe Épico, Vuelo, Mochila de Salto, Granadas, Imperio, Capellán, Astorath
                    {'\n'}<Text style={styles.wapo}>Habilidad de Redentor de los Perdidos:</Text> Mientras este modelo lidere una unidad, cada vez que un modelo de esa unidad sea destruido por un ataque cuerpo a cuerpo, si ese modelo no ha luchado en esta fase, tira 1D6. Con un 4+, no lo retires del juego; ese modelo destruido puede luchar después de que la unidad atacante termine sus ataques, y luego es retirado del juego.
                    {'\n'}<Text style={styles.wapo}>Misa de la Perdición:</Text> Una vez por batalla, cuando la unidad de este modelo realice un movimiento de carga, este modelo puede usar esta habilidad. Si lo hace, hasta el final del turno, las armas cuerpo a cuerpo equipadas por modelos de esa unidad obtienen la habilidad [HERIDAS DEVASTADORAS].
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Pistola bólter [PISTOL]</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>0</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>1</Text></View>
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Hacha del Verdugo [HERIDAS DEVASTADORAS]</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-3</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                </View>
                <Text style={styles.border}>Composición de la Unidad</Text>
                <Text style={styles.descrip}>
                    ■ 1 Astorath – Héroe Épico{'\n'}
                    Este modelo está equipado con: pistola bólter; Hacha del Verdugo.
                </Text>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
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
      color: '#ff0000', 
      fontWeight: 'bold' 
  }
});

