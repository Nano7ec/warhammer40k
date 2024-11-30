import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import StaffofTomorrow from '../armas/StaffofTomorrow';

const { width } = Dimensions.get('screen');

export default function OrikanTheDiviner(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('./img/OrikanTheDiviner.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
        {'\n'}<Text style={styles.wapo}>Core:</Text>Leader
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> : Reanimation Protocols
          {'\n'}<Text style={styles.wapo}>Master Chronomancer:</Text> Mientras este modelo lidere una unidad, los modelos de esa unidad tienen una salvación invulnerable de 4+.

          {'\n'}<Text style={styles.wapo}>The Stars Are Right: </Text>Una vez por batalla, al inicio de la fase de combate, esta miniatura puede usar esta habilidad. Si lo hace, hasta el final de la fase, triplica las características de Ataques y Fuerza del Báculo del Mañana de esta miniatura y cada tirada para Herir efectuada con éxito por los ataques de esta miniatura obtiene una Herida Crítica.
        </Text>

        <Text style={styles.border}>
          Invulnerable +4
        </Text>

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
        <StaffofTomorrow/>

        <> 
            <Text style={styles.border}>
            Leader
          </Text>
          <Text style={styles.descrip}>Este modelo se puede acoplar a la siguiente unidad:
          {'\n'}■ Immortals
          {'\n'}■ Lychguard
          {'\n'}■ Necron Warriors
            </Text>

          <Text style={styles.border}>
            Composicion de la min
          </Text>
          <Text style={styles.descrip}>■ 1 Imotekh the Stormlord – Heroe Epico
            {'\n'}Cada modelo está equipado con: Staff of Tomorrow.
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