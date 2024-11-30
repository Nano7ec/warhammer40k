import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import BigShoota from './Armas/BigShoota';
import KannonFrag from './Armas/KannonFrag';
import KannonShell from './Armas/KannonShell';
import Kilkannon from './Armas/Killkannon';
import Lobba from './Armas/Lobba';
import ZzapGun from './Armas/Zzapgun';
import DeffRolla from './Armas/DeffRolla';
import GrabbinKlaw from './Armas/GrabbinKlaw';
import TracksandWheels from './Armas/TracksandWheels';
import WreckinBall from './Armas/WreckinBall';
const { width } = Dimensions.get('screen');

export default function Battlewagon(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/Battlewagon.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Core:</Text>Deadly Demise D6, Firing Deck 22
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Waaagh!
          {'\n'}<Text style={styles.wapo}>Ramshackle but Rugged:</Text> Cada vez que se asigna un ataque a este modelo, empeora la Penetración de armadura de ese ataque en 1. ese ataque en 1.
        </Text>

        <Text style={styles.border}>
        HABILIDADES DE EQUIPO
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>’Ard Case:</Text>
        Agrega 2 al rasgo de Dureza del portador, pero deja de tener la habilidad Mazo de Fuego.
        </Text>
        <Text style={styles.border}>
        DAÑADO: 1-5 HERIDAS RESTANTES
        </Text>
        <Text style={styles.descrip}>
        {'\n'}Mientras a este modelo le queden 1-5 heridas, cada vez que modelo realice un ataque, resta 1 de la tirada para golpear.
        </Text>
        <Text style={styles.border}>
        Invulnerable 6+
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
         <BigShoota/>
         <KannonFrag/>
         <KannonShell/>
         <Kilkannon/>
         <Lobba/>
         <ZzapGun/>

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
        <DeffRolla/>
        <GrabbinKlaw/>
        <TracksandWheels/>
        <WreckinBall/>

        <> 
            <Text style={styles.border}>
            OPCIONES DE ARMAMENTO
          </Text>
          <Text style={styles.descrip}>■ Este modelo puede equiparse con uno de los siguientes: 
          {'\n'}◦ 1 kannon
          {'\n'}◦ 1 killkannon
          {'\n'}◦ 1 zzap gun
          {'\n'}■ Este modelo se puede quipar con:
          {'\n'}◦ Lobba
          {'\n'}■ Este modelo puede equiparse con hasta 4 grandes shootas.
          {'\n'}■ Las orugas y ruedas de este modelo pueden sustituirse por 1 deff rolla.
          {'\n'}■ Este modelo puede equiparse con cualquiera de los siguientes: 
          {'\n'}◦ 1 ’ard case
          {'\n'}◦ 1 grabbin’ klaw
          {'\n'}◦ 1 wreckin’ ball

            </Text>

            <Text style={styles.border}>
            TRANSPORTE
          </Text>
          <Text style={styles.descrip}>Este modelo tiene una capacidad de transporte de 22 modelos de Infantería Orkos. Si este modelo está equipado con un killkannon, tiene una capacidad de transporte de 12 modelos de Infantería Orks. Cada modelo de Megaarmadura o Jump Pack ocupa el espacio de 2 modelos. 
          {'\n'}Si esta miniatura no está equipada con una caja de artillería, un kannon, un killkannon o un cañón zzap, puede transportar 1 Ghazghkull Thraka. Ghazghkull Thraka ocupa el espacio de 18 modelos.
            </Text>

          <Text style={styles.border}>
            Composicion de la min
          </Text>
          <Text style={styles.descrip}>■ 1 Battlewagon
            {'\n'}Cada modelo está equipado con:tracks and wheels.
            {'\n'}1 model ............................................................185 pts
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