import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');
 
export default function Barbguants(){
    return(
      <View>
      <Image resizeMode="stretch" style={styles.image} source={require('../Tyranidos/imagenes/Broodlord.png')} />
      <Text style={styles.border}>
        Habilidades
      </Text>
      <Text style={styles.descrip}>
        <Text style={styles.wapo}>Core:</Text>Leader, Scouts 8"
        {'\n'}<Text style={styles.wapo}>Faccion:</Text> Synapse
        {'\n'}<Text style={styles.wapo}>Perspicacia viciosa:</Text> Mientras este modelo lidera una unidad, las armas equipadas por los modelos de esa unidad tienen la habilidad [HERIDAS DEVASTADORAS].
        {'\n'}<Text style={styles.wapo}>Mirada hipnótica (Psíquica):</Text> Al inicio de la fase de combate, elige una unidad enemiga a distancia de combate de esta miniatura.
        {'\n'}Hasta el fin de la fase, cada vez que una miniatura de esa unidad efectúe un ataque, resta 1 a la tirada para golpear.
      </Text>
      <Text style={styles.border}>
        Invulnerable save 4+
      </Text>

      {/* Cabecera de la tabla */}
      <View style={styles.tableRow}>
        <>
          <View style={styles.tableCelltop}>
            <Text style={styles.headerText}>ACC</Text>
          </View>
          <View style={styles.tableCelltop}>
            <Text style={styles.headerText}>R</Text>
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

            <Text style={styles.cellText}><Text style={styles.wapo}>Broodlord claws and talons
              [DEVASTATING WOUNDS, TWIN-LINKED]</Text></Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>meele</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>25</Text>
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
      <>
        <Text style={styles.border}>
          Composicion de la min
        </Text>
        <Text style={styles.descrip}>■ 1-3 Biovores
          {'\n'}Cada modelo está equipado con: Lanzador de minas de esporas; extremidades con barras de quitina.
        </Text>
      </>
      <Text style={styles.MinDes}>
        1 model ..............................................................40 pts
        {'\n'}2 models ............................................................80 pts
        {'\n'}3 models ..........................................................120 pts
      </Text>
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