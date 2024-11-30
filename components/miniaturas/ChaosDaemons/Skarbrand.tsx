import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Skarbrand() {
    return (
        <View>
            <>
                <Image resizeMode="stretch" style={styles.image} source={require('../ChaosDaemons/images/skarbrand.png')} />
                <Text style={styles.border}>
                    Habilidades
                </Text>
                <Text style={styles.descrip}>
                    {'\n'}<Text style={styles.wapo}>Palabras clave:</Text> Monstruo, Personaje, Héroe Épico, Caos, Demonio, Khorne, Skarbrand
                    {'\n'}<Text style={styles.wapo}>Código:</Text> Despliegue Caótico (DS), Golpe Profundo
                    {'\n'}<Text style={styles.wapo}>Rabia Incandescente:</Text> Mientras esté en el campo de batalla, los Demonios de Khorne tienen +1 a la Fuerza de sus ataques de combate cuerpo a cuerpo.
                    {'\n'}<Text style={styles.wapo}>Rugido de Odio (Aura):</Text> Mientras esté en el campo de batalla, las unidades enemigas a 6" de Skarbrand tienen -1 a sus tiradas de Liderazgo.
                    {'\n'}<Text style={styles.wapo}>Ira de Khorne:</Text> Una vez por batalla, en la fase de combate, Skarbrand puede realizar un ataque adicional con cada una de sus armas de combate cuerpo a cuerpo.
                </Text>
                {/* Tabla de armas a distancia */}
                <Text style={styles.border}>Armas a Distancia</Text>
                <View style={styles.tableRow}>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>Arma</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>R</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>HP</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>AP</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Rugido de Odio [EXPLOSIÓN, DISPARO ÚNICO]</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>12"</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2D6</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>5</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-1</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2</Text></View>
                </View>
                {/* Tabla de armas cuerpo a cuerpo */}
                <Text style={styles.border}>Armas de Combate Cuerpo a Cuerpo</Text>
                <View style={styles.tableRow}>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>Arma</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>R</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>A</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>HA</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>F</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>AP</Text></View>
                    <View style={styles.tableCelltop}><Text style={styles.headerText}>D</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Slaughter and Carnage [ATAQUE]</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>Cuerpo a cuerpo</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>16</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>2+</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>14</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>-4</Text></View>
                    <View style={styles.tableCell}><Text style={styles.cellText}>4</Text></View>
                </View>
                <Text style={styles.border}>Composición de la Unidad</Text>
                <Text style={styles.descrip}>
                    ■ 1 Skarbrand – Héroe Épico{'\n'}
                    Este modelo está equipado con: Rugido de Odio; Slaughter and Carnage.
                </Text>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
  border: { 
      color: '#fff', 
      fontWeight: 'bold', 
      backgroundColor: '#11183f', 
      fontSize: 20, 
      padding: 5, 
      marginTop: 6, 
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10, 
      marginLeft: 5, 
      marginRight: 5 
  },
  descrip: { 
      fontSize: 18, 
      marginLeft: 5, 
      marginRight: 5, 
      backgroundColor: '#3b3d5e', 
      color: '#fff', 
      paddingLeft: 3, 
      paddingRight: 3, 
      paddingBottom: 3, 
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10 
  },
  image: { 
      width: width, 
      height: 100, 
      borderRadius: 20, 
      marginTop: 15 
  },
  tableRow: { 
      flexDirection: 'row', 
      borderBottomWidth: 1, 
      borderBottomColor: '#3b3d5e' 
  },
  tableCelltop: { 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 5, 
      backgroundColor: '#11183f' 
  },
  tableCell: { 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 5, 
      backgroundColor: '#3b3d5e' 
  },
  headerText: { 
      color: '#fff', 
      fontWeight: 'bold', 
      fontSize: 14 
  },
  cellText: { 
      fontSize: 10, 
      color: '#fff' 
  },
  wapo: { 
      color: '#fff', 
      fontWeight: 'bold' 
  }
});
