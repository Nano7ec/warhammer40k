import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import BoltStormGauntlet from './Armas/Boltstormgauntlet';
import MasterCrafttedHeavyBoltRifle from './Armas/MasterCraftedHeavyBoltRifle';
import MasterCraftedPowerWeapon from './Armas/MasterCraftedPowerWeapon';
import PowerFist from './Armas/PowerFist';
import RelicBlade from './Armas/RelicBlade';
import RelicChainsword from './Armas/RelicChainsword';
import RelicFist from './Armas/RelicFist';

const { width } = Dimensions.get('screen');

export default function CapitaninGravis(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/CapitaninGravis.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          {'\n'}<Text style={styles.wapo}>Faccion:</Text>Leader,Oath of Moment
          {'\n'}<Text style={styles.wapo}>Rites of Battle:</Text> Una vez por ronda de batalla, una unidad de tu ejército con esta habilidad puede ser objetivo de una Estratagema por 0CP, incluso si otra unidad de tu ejército ya ha sido objetivo de esa Estratagema en esta fase.
          {'\n'}<Text style={styles.wapo}>Refuse to Yield:</Text> Cada vez que se asigna un ataque a este modelo, se reduce a la mitad la característica de Daño de ese ataque.
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
        {/* Fila de Armas a Distancia */}
        <BoltStormGauntlet/>
        <MasterCrafttedHeavyBoltRifle/>

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
        {/* Fila arma Cuerpo a cuerpo */}
        <MasterCraftedPowerWeapon/>
        <PowerFist/>
        <RelicBlade/>
        <RelicChainsword/>
        <RelicFist/>
        
        <>
        <Text style={styles.border}>
            Invulnerable 4+
          </Text>

        <Text style={styles.border}>
            Opciones de equipo
          </Text>
          <Text style={styles.descrip}>■ La pistola de cerrojo, el rifle de cerrojo artesanal y el arma de combate cuerpo a cuerpo de este modelo pueden sustituirse por una de las siguientes:
            {'\n'}◦ 1 boltstorm gauntlet, 1 power fist and 1 relic chainsword
            {'\n'}◦ 1 boltstorm gauntlet, 1 power fist and 1 relic blade
            {'\n'}◦ 1 boltstorm gauntlet, 1 power fist and 1 relic fist
            </Text>

            <Text style={styles.border}>
            Lider
          </Text>
          <Text style={styles.descrip}>Este modelo se puede acoplar a las siguientes unidades:
            {'\n'}■ Aggressor Squad
            {'\n'}■ Eradicator Squad
            {'\n'}■ Heavy Intercessor Squad
            </Text>

          <Text style={styles.descrip}>■ 1 Captain in Gravis Armour
            {'\n'}Cada modelo está equipado con: master-crafted heavy bolt rifle; master-crafted power weapon.
            {'\n'}1 model ..............................................................95 pts
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