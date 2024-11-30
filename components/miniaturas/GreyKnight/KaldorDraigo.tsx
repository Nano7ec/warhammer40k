import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import StormBolter from './armas/StormBolter';
import Scourging from '../armas/Scourging';
import TheTitanSword from '../armas/TheTitanSword';

const { width } = Dimensions.get('screen');

export default function KaldorDraigo(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/KaldorDraigo.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Core:</Text> Deep Strike, Leader
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Teleport Assault
          {'\n'}<Text style={styles.wapo}>Untouchable Purity:</Text> Mientras este modelo lidera una unidad los modelos de esa unidad tienen la habilidad No Sentir Dolor 4+ contra heridas mortales.
          {'\n'}<Text style={styles.wapo}>One With the Warp (Psychic): </Text> Una vez por batalla, cuando unidad de este modelo declara una carga en el mismo turno en que se estableció como Refuerzos usando la habilidad Golpe profundo, suma 3 a la tirada de Carga. 
        </Text>

        <Text style={styles.border}>
          Invulnerable +4
        </Text>

        {/* Cabecera de la tabla */}
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
        {/* Fila de Armas Cuerpo a Cuerpo */}
        <Scourging/>
         <StormBolter/>

        {/* Cabecera de la tabla armas distancia */}
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
        {/* Fila arma a distancia */}
        <TheTitanSword/>
        
        <>
          <Text style={styles.border}>
            Composicion de la min
          </Text>
          <Text style={styles.descrip}>■ 1 Kaldor Draigo – Heroe Epico
            {'\n'}Cada modelo está equipado con: Scourging; storm bolter; the Titansword.
            {'\n'}1 model ............................................................155 pts</Text>

            <Text style={styles.border}>
            Lider
          </Text>
          <Text style={styles.descrip}>Este modelo se puede acoplar a las siguientes unidades:
            {'\n'}■ Brotherhood Terminator Squad
            {'\n'}■ Paladin Squad</Text>

            <Text style={styles.border}>
            Comandante supremo
          </Text>
          <Text style={styles.descrip}>Si este modelo está en tu ejército, debe ser tu Señor de la Guerra.</Text>
        </>
      </> 
        </View>
    );
}

const styles = StyleSheet.create({
    border: { color: '#fff', 
        fontWeight: 'bold', 
        backgroundColor: '#2C0069',
        fontSize: 20, 
        padding: 5, 
        marginTop: 6, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
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