import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function BaalPredator() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../BloodAngels/images/baal_predator.png')} />
                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Vehículo, Humo, Imperium, Baal Predator
                    {'\n'}<Text style={styles.wapo}>Motores Sobrecargados:</Text> Puedes repetir las tiradas de Avance para este modelo. Cada vez que este modelo avance, hasta el final del turno, las armas a distancia equipadas por este modelo tienen la habilidad [ASALTO], pero solo pueden apuntar a unidades de Infantería.
                    {'\n'}<Text style={styles.wapo}>Dañado:</Text> Cuando este modelo tiene entre 1-4 heridas restantes, cada vez que realice un ataque, resta 1 a la tirada para Impactar.
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
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cañón flamestorm Baal</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>18"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>D6+3</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>N/A</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>6</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-2</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Bolter pesado</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>36"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>3</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>3+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                </View>
                {/* Añadir más filas según sea necesario */}
                <Text style={styles.border}>Composición de la Unidad</Text>
                <Text style={styles.descrip}>
                    ■ 1 Baal Predator{'\n'}
                    Este modelo está equipado con: cañón de asalto doble; orugas blindadas.
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
