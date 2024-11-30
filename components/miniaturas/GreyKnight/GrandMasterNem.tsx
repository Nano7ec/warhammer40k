import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import GatlingPsilencer from '../armas/GatlingPsilencer';
import HeavyIncinerator from '../armas/HeavyIncinerator';
import HeavyPsycannon from '../armas/HeavyPsycanon';
import Dreadfists from '../armas/Dreadfists';
import NemesisDaemonG from '../armas/NemesisDaemonG';
import NemesisG_S from '../armas/NemesisG-S';
import NemesisG_SW from '../armas/NemesisG-SW';

const { width } = Dimensions.get('screen');

export default function GrandMasterNem(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/GrandMasterNem.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Core:</Text> Deadly Demise D3, Deep Strike
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Teleport Assault
          {'\n'}<Text style={styles.wapo}>Surge of Wrath (Psychic):</Text> Una vez por ronda de batalla, en la fase de combate, una miniatura de tu ejército con esta habilidad puede usarla antes de resolver sus ataques. Si lo hace, hasta el final de la fase, cada vez que ese modelo efectúe un ataque que tenga como objetivo una unidad Monster o Vehicle, puedes repetir la tirada para golpear, puedes repetir la tirada para herir y puedes repetir la tirada para dañar.
          {'\n'}<Text style={styles.wapo}>Heroism’s Favour:</Text>Cada vez que apuntas a este modelo con una Estratagema, sólo cuesta 1CP usarla, incluso si el coste de CP es mayor.
        </Text>

        <Text style={styles.border}>
        DAÑADO: 1-4 HERIDAS RESTANTES
        </Text>
        <Text style={styles.descrip}>
        Mientras a este modelo le queden de 1 a 4 heridas, cada vez que realice un ataque, resta 1 de la tirada de impacto.
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
         <GatlingPsilencer/>
         <HeavyIncinerator/>
         <HeavyPsycannon/>

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
        <Dreadfists/>
        <NemesisDaemonG/>
        <NemesisG_S/>
        <NemesisG_SW/>

        <>

        <Text style={styles.border}>
        OPCIONES DE ARMAMENTO
          </Text>
          <Text style={styles.descrip}>El storm bolter de este modelo puede sustituirse por uno de los siguientes:
            {'/n'}◦ 1 Nemesis daemon greathammer
            {'/n'}◦ 1 Nemesis greatsword
            {'/n'}
            {'/n'}■ Este modelo puede equiparse con hasta dos de los siguientes elementos, pero no puede llevar duplicados:
            {'/n'}◦ 1 gatling psilencer
            {'/n'}◦ 1 heavy incinerator
            {'/n'}◦ 1 heavy psycannon         
            </Text>

          <Text style={styles.border}>
            Composicion de la min
          </Text>
          <Text style={styles.descrip}>■ 1 Grand Master in Nemesis Dreadknight
            {'\n'}Cada modelo está equipado con:  dreadfists.
            {'\n'}1 model ............................................................245 pts
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