import * as React from 'react';
import { Text, ScrollView, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
 
export default function DarkAngels () {
  return (
    <ScrollView>
      <>
        <Text style={styles.border}>Gramática utilizada</Text>
        {/* Tabla de términos clave */}
        <View style={styles.tableRow}>
          <View style={styles.tableCelltop}>
            <Text style={styles.headerText}>Palabra</Text>
          </View>
          <View style={styles.tableCelltop}>
            <Text style={styles.headerText}>Acrónimos</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}><Text style={styles.wapo}>Movimiento</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Dureza</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Salvación</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Heridas</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Liderazgo</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Potencia Nominal</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Arma a Distancia</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Arma Cuerpo a Cuerpo</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Rango</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Habilidad de Disparo</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Fuerza</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Penetración de Armadura</Text></Text>
            <Text style={styles.cellText}><Text style={styles.wapo}>Daño</Text></Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>M</Text>
            <Text style={styles.cellText}>T</Text>
            <Text style={styles.cellText}>SV</Text>
            <Text style={styles.cellText}>W</Text>
            <Text style={styles.cellText}>LD</Text>
            <Text style={styles.cellText}>OC</Text>
            <Text style={styles.cellText}>AD</Text>
            <Text style={styles.cellText}>ACC</Text>
            <Text style={styles.cellText}>R</Text>
            <Text style={styles.cellText}>BS</Text>
            <Text style={styles.cellText}>S</Text>
            <Text style={styles.cellText}>AP</Text>
            <Text style={styles.cellText}>D</Text>
          </View>
        </View>

        {/* Continuar llenando la tabla de acrónimos según sea necesario */}
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  border: { color: '#fff', fontWeight: 'bold', backgroundColor: '#004d00', fontSize: 20, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  descrip: { fontSize: 18, backgroundColor: '#3b3b3b', color: '#dcdcdc', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#004d00' },
  tableCelltop: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#004d00', marginTop: 5, fontSize: 10 },
  tableCell: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#3b3b3b', fontSize: 10 },
  headerText: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
  cellText: { fontSize: 14, color: '#dcdcdc' },
  wapo: { color: '#004d00', fontWeight: 'bold' },
  MinDes: { fontSize: 18, color: '#dcdcdc', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }
});

