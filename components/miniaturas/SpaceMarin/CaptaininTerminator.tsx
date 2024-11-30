import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import CombiWeapon from './Armas/CombiWeapon';
import StormBolter from './Armas/StormBolter';
import Chainfist from './Armas/Chainfist';
import PowerFist from './Armas/PowerFist';
import RelicWeapon from './Armas/RelicWeapon';
import ThunderHammer from './Armas/ThunderHammer';
import TwinLightningClaws from './Armas/TwinLightningClaws';
const { width } = Dimensions.get('screen');

export default function CapitaninTerminator(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/CapitaninTerminator.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
            <Text style={styles.wapo}>Core:</Text>Deep Strike, Leader
          {'\n'}<Text style={styles.wapo}>Faccion:</Text>Oath of Moment
          {'\n'}<Text style={styles.wapo}>Rites of Battle:</Text> Una vez por ronda de batalla, una unidad de tu ejército con esta habilidad puede ser objetivo de una Estratagema por 0CP, incluso si otra unidad de tu ejército ya ha sido objetivo de esa Estratagema en esta fase.
          {'\n'}<Text style={styles.wapo}>The Imperium’s Sword: </Text>Puedes repetir las tiradas de Carga hechas para la unidad de este modelo 
        </Text>

        <Text style={styles.border}>
        HABILIDADES DE EQUIPO
        </Text>
        <Text style={styles.descrip}>
            <Text style={styles.wapo}>Auxiliary Grenade Launcher: </Text>
            El portador tiene la Granadas.
          {'\n'}<Text style={styles.wapo}>Relic Shield:</Text>El portador tiene una característica de Heridas de 7. 
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
        <CombiWeapon/>
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
        {/* Fila arma Cuerpo a cuerpo */}
        <Chainfist/>
        <PowerFist/>
        <RelicWeapon/>
        <ThunderHammer/>
        <TwinLightningClaws/>
        
        <>

            <Text style={styles.border}>
            Lider
          </Text>
          <Text style={styles.descrip}>Este modelo se puede acoplar a las siguientes unidades:
            {'\n'}■ Eliminator Squad
            {'\n'}■ Incursor Squad
            {'\n'}■ Infiltrator Squad
            {'\n'}■ Reiver Squad
            {'\n'}■ Scout Squad
            {'\n'}■ Scout Sniper Squad
            </Text>

          <Text style={styles.descrip}>■ 1 Captain in Phobos Armour
            {'\n'}Cada modelo está equipado con: bolt pistol; instigator bolt carbine; combat knife.
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