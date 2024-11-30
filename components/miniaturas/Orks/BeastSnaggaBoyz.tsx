import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import Slugga from './Armas/Slugga';
import ThumpGun from './Armas/ThumpGun';
import Choppa from './Armas/Choppa';
import CloseCombatWeapon from './Armas/CloseCombatWeapon';
import PowerSnappa from './Armas/PowerSnappa';
const { width } = Dimensions.get('screen');

export default function BeastSnaggaBoyz(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/BeastSnaggaBoyz.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Core:</Text>Feel No Pain 6+
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Waaagh!
          {'\n'}<Text style={styles.wapo}>Monster Hunters:</Text>Cada vez que una miniatura de esta unidad realice un ataque que tenga como objetivo a una unidad de Monstruos o Vehículos, puedes repetir la Tirada de Acierto.
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

         {/* Filas de la tabla armas cuerpo a cuerpo */}
        <Slugga/>
        <ThumpGun/>

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
        {/* Filas de la tabla */}
        <Choppa/>
        <CloseCombatWeapon/>
        <PowerSnappa/>

        <> 
            <Text style={styles.border}>
            OPCIONES DE ARMAMENTO
          </Text>
          <Text style={styles.descrip}>■ Por cada 10 miniaturas de esta unidad, 1 slugga y choppa de Beast Snagga Boy pueden sustituirse por 1 thump gun y 1 arma cuerpo a cuerpo. 
            </Text>

          <Text style={styles.border}>
            Composicion de la min
          </Text>
          <Text style={styles.descrip}>■ 1 Beast Snagga Nob
{'\n'}■ 9-19 Beast Snagga Boyz
            {'\n'}Cada modelo Beast Snagga Nob está equipado con:slugga; power snappa.
            {'\n'}Cada modelo Beast Snagga Boy está equipado con: slugga; choppa. 
            {'\n'}10 models .......................................................105 pts
            {'\n'}20 models .......................................................210 pts
            </Text>
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