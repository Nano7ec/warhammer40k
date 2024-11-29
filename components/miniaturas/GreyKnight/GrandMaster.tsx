import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import StormBolter from '../armas/StormBolter';
import Incinerator from '../armas/Incinerator';
import Psilencer from '../armas/Psilencer';
import Psycannon from '../armas/Psycannon';
import NemesisForceWeapon from '../armas/NemesisForceWeapon';

const { width } = Dimensions.get('screen');

export default function GrandMaster(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/GrandMaster.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Core:</Text> Deep Strike, Leader
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Teleport Assault
          {'\n'}<Text style={styles.wapo}>Might of Purity (Psychic):</Text> Mientras este modelo lidera una unidad, puedes ignorar todos o cualquiera de los modificadores a las características de los modelos de esa unidad y a cualquier tirada o prueba realizada para los modelos de esa unidad (excluyendo los modificadores a las tiradas de salvación).  
          {'\n'}<Text style={styles.wapo}>Master Strategist: </Text>  Una vez por batalla, una unidad de tu ejército con esta habilidad puede ser objetivo de una Estratagema por 0CP, incluso si otra unidad de tu ejército ya ha sido objetivo de esa Estratagema esta fase.
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

         {/* Filas de la tabla armas cuerpo a cuerpo */}
         <Incinerator/>
         <Psilencer/>
         <Psycannon/>
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
        {/* Filas de la tabla */}
        <NemesisForceWeapon/>

        <>
        <Text style={styles.border}>
        OPCIONES DE ARMAMENTO
          </Text>
          <Text style={styles.descrip}>El storm bolter de este modelo puede sustituirse por uno de los siguientes:
            {'/n'}◦ 1 incinerator
            {'/n'}◦ 1 psilencer
            {'/n'}◦ 1 psycannon
            </Text>

          <Text style={styles.border}>
            Composicion de la min
          </Text>
          <Text style={styles.descrip}> 1 Grand Master
            {'\n'}Cada modelo está equipado con: storm bolter; Nemesis force weapon.
            {'\n'}1 model ............................................................115 pts</Text>

            <Text style={styles.border}>
            Lider
          </Text>
          <Text style={styles.descrip}>Este modelo se puede acoplar a las siguientes unidades:
            {'\n'}■ Brotherhood Terminator Squad
            {'\n'}■ Paladin Squad</Text>
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