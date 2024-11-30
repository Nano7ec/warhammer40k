import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Barbguants(){
    return(
        <View>
          <>
  {/**Imagenes */}
  <Image resizeMode="stretch" style={styles.image} source={require('./imagenes/Gargoyles.png')} />

  {/**Tabla de habilidades */}
  <Text style={styles.border}>
    Habilidades
  </Text>
  <Text style={styles.descrip}>
    <Text style={styles.wapo}>Core:</Text>: Deep Strike
    {'\n'}<Text style={styles.wapo}>Faccion:</Text> Shadow in the Warp, Synapse
    {'\n'}<Text style={styles.wapo}>Winged Swarm:</Text> En tu fase de Disparo, después de que esta unidad haya disparado, si no está a distancia de combate de ninguna unidad enemiga, puede hacer un movimiento Normal de hasta 6". 
    {'\n'}Si lo hace, hasta el final del turno, esta unidad no puede declarar una carga.
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

        <Text style={styles.cellText}><Text style={styles.wapo}>Fleshborer [ASSAULT]</Text></Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>18"</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>1"</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>4+"</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>5</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>0</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>1</Text>
      </View>
    </>
  </View>

  {/* Cabecera de la tabla daño cuerpo a cuerpo */}
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
  {/* Filas de la tabla armas cuerpo a cuerpo */}
  <View style={styles.tableRow}>
    <>
      <View style={styles.tableCell}>

        <Text style={styles.cellText}><Text style={styles.wapo}>Blinding venom</Text></Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>meele</Text>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.cellText}>1</Text>
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
  <>

{/**Reglas extras */}
<Text style={styles.border}>
      Composicion de la min
    </Text>
    <Text style={styles.descrip}>■ 10-20 Gargoyles 
    {'\n'}Cada modelo está equipado con: perforador de carne; veneno cegador.
      
      </Text>

  {/**Composicion de las unidades */}
    <Text style={styles.border}>
      Composicion de la min
    </Text>
    <Text style={styles.descrip}>■ 1 WingedHiveTyrant.
      {'\n'}Este modelo va equipado con: espada de huesos monstruosa y látigo azotador; garras de tirano.
      {'\n'}10 models .........................................................75 pts
      {'\n'}20 models ........................................................150 pts
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