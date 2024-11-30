import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import BoltPistol from './Armas/BoltPistol';
import HeavyBoltPistol from './Armas/HeavyBoltPistol';
import MasterCraftedBoltRifle from './Armas/MasterCraftedBoltRifle';
import PlasmaPistolStan from './Armas/PlasmaPistolStan';
import PlasmaPistolSuper from './Armas/PlasmaPistolSuper';
import CloseCombatWeapon from './Armas/CloseCombatWeapon';
import MasterCraftedPowerWeapon from './Armas/MasterCraftedPowerWeapon';
import PowerFist from './Armas/PowerFist';

const { width } = Dimensions.get('screen');

export default function PrimarisCaptain(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/PrimarisCaptain.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Core:</Text>Leader
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Oath of Moment
          {'\n'}<Text style={styles.wapo}>Rites of Battle:</Text> Una vez por ronda de batalla, una unidad de tu ejército con esta habilidad puede ser objetivo de una Estratagema por 0CP, incluso si otra unidad de tu ejército ya ha sido objetivo de esa Estratagema en esta fase.
          {'\n'}<Text style={styles.wapo}>Finest Hour: </Text> Una vez por batalla, al inicio de la fase de combate, este modelo puede usar esta habilidad. 
          {'\n'}Si lo hace, hasta el final de la fase, suma 3 a la característica Ataques de las armas cuerpo a cuerpo equipadas por este modelo y esas armas tienen la habilidad [HERIDAS DEVASTADORAS].
        </Text>
        <Text style={styles.border}>
            Habilidades de equipo
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Relic Shield:</Text>
        El portador tiene una característica de Heridas de 6.
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
        <BoltPistol/>
        <HeavyBoltPistol/>
        <MasterCraftedBoltRifle/>
        <PlasmaPistolStan/>
        <PlasmaPistolSuper/>
        

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
        <CloseCombatWeapon/>
        <MasterCraftedPowerWeapon/>
        <PowerFist/>
        
        <>
        <Text style={styles.border}>
            Opciones de equipo
          </Text>
          <Text style={styles.descrip}>■ La pistola de cerrojo, el rifle de cerrojo artesanal y el arma de combate cuerpo a cuerpo de este modelo pueden sustituirse por una de las siguientes:
            {'\n'}◦ 1 plasma pistol and 1 power fist
            {'\n'}◦ 1 heavy bolt pistol, 1 master-crafted power weapon and 1 relic shield
            {'\n'} El arma de combate cuerpo a cuerpo de este modelo puede sustituirse por una de las siguientes: 
            {'\n'}◦ 1 master-crafted power weapon
            {'\n'}◦ 1 power fist

            </Text>
            <Text style={styles.border}>
            Lider
          </Text>
          <Text style={styles.descrip}>Este modelo se puede acoplar a las siguientes unidades:
            {'\n'}■ Assault Intercessor Squad
            {'\n'}■ Bladeguard Veteran Squad*
            {'\n'}■ Hellblaster Squad*
            {'\n'}■ Infernus Squad
            {'\n'}■ Intercessor Squad
            {'\n'}■ Sternguard Veteran Squad
            </Text>

          <Text style={styles.descrip}>■ 1 Primaris Captain
            {'\n'}Cada modelo está equipado con: bolt pistol; master-crafted bolt rifle; close combat weapon.
            {'\n'}1 model ..............................................................80 pts
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