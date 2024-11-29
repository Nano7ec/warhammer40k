import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Barbguants(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./imagenes/Exocrine.png')} />
        <Text style={styles.border}>
        DAMAGED:
        </Text>
        <Text style={styles.descrip}>
          {'\n'}1-5 HERIDAS RESTANTES Mientras este modelo tenga 1-5 heridas restantes, cada vez que este modelo haga un ataque, resta 1 de la tirada para golpear.
        </Text>

        <Text style={styles.border}>
          ORGANISMO CAZADOR
        </Text>
        <Text style={styles.descrip}>Este modelo no puede ser tu Señor de la Guerra.
        </Text>
        <Text style={styles.MinDes}>
          1 model ..............................................................80 pts
        </Text>

        {/* Cabecera de la tabla daño distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AD</Text>
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
        {/* Filas de la tabla de armas distancia */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Bio-plasmic cannon [BLAST, HEAVY]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+3"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>8</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>


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

              <Text style={styles.cellText}><Text style={styles.wapo}>Powerful limbs</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        <Text style={styles.border}>
          COMPOSICIÓN DE LA UNIDAD
        </Text>
        <Text style={styles.descrip}>■ 1 Deathleaper - Epic Hero
          {'\n'}Este modelo está equipado con: Garras y garras de Lictor.
        </Text>

        <Text style={styles.border}>
          ORGANISMO CAZADOR
        </Text>
        <Text style={styles.descrip}>Este modelo no puede ser tu Señor de la Guerra.
        </Text>
        <Text style={styles.MinDes}>
          1 model ..............................................................80 pts
        </Text>
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