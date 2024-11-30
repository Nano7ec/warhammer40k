import Bloodmaster from '@/components/miniaturas/ChaosDaemons/Bloodmaster';
import Bloodthirster from '@/components/miniaturas/ChaosDaemons/Bloodthirster';
import Karanak from '@/components/miniaturas/ChaosDaemons/Karanak';
import Rendmaster from '@/components/miniaturas/ChaosDaemons/Rendmaster';
import Skarbrand from '@/components/miniaturas/ChaosDaemons/Skarbrand';
import Skullmaster from '@/components/miniaturas/ChaosDaemons/Skullmaster';
import Skulltaker from '@/components/miniaturas/ChaosDaemons/Skulltaker';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
export default function MinChaosDemon (){
return(
    <ScrollView style={{ flex: 1, backgroundColor: '#7d8cc3', padding: 7}}>
    <>
    <Text style={styles.border}>Gramatica usada</Text>
    {/* Cabecera de la tabla */}
    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCelltop}>
          <Text style={styles.headerText}>Palabra</Text>
        </View>
        <View style={styles.tableCelltop}>
          <Text style={styles.headerText}>Acronimos</Text>
        </View>
      </>
    </View>
    {/* Filas de la tabla */}
    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Movimiento</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>M</Text>
        </View>
      </>
    </View>
    {/* Filas de la tabla */}
    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Dureza</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>T</Text>
        </View>
      </>
    </View>

    {/* Filas de la tabla */}
    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Salvacion</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>SV</Text>
        </View>
      </>
    </View>

    {/* Filas de la tabla */}
    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Heridas</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>W</Text>
        </View>
      </>
    </View>

    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Liderazgo</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>Ld</Text>
        </View>
      </>
    </View>


    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Potencial nominal</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>Oc</Text>
        </View>
      </>
    </View>


    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Arma distancia</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>AD</Text>
        </View>
      </>
    </View>


    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Armas cuerpo a cuerpo</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>ACC</Text>
        </View>
      </>
    </View>

    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Rango</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>R</Text>
        </View>
      </>
    </View>

    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>exito de conexion</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>BS</Text>
        </View>
      </>
    </View>


    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Fuerza</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>S</Text>
        </View>
      </>
    </View>

    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Penetracion de armadura</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>AP</Text>
        </View>
      </>
    </View>


    <View style={styles.tableRow}>
      <>
        <View style={styles.tableCell}>

          <Text style={styles.cellText}><Text style={styles.wapo}>Daño</Text></Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>D</Text>
        </View>
      </>
    </View>
  </>
  <br/> <Skarbrand/>
  <br/> <Bloodthirster/>
  <br/> <Skulltaker/>
  <br/> <Bloodmaster/>
  <br/> <Skullmaster/>
  <br/> <Rendmaster/>
  <br/> <Karanak/>
    </ScrollView>
);
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#7d8cc3', paddingVertical: 0},
    border: { color: '#fff', fontWeight: 'bold', 
        backgroundColor: '#11183f', 
        fontSize: 20, 
        padding: 5, 
        marginTop: 6, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10 },
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
        backgroundColor: '#11183f',
        marginTop: 5,
        fontSize: 10
      },
      tableCell: {
        flex: 1, // Distribuye equitativamente el espacio entre columnas
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        padding: 5,
        backgroundColor: '#3b3d5e',
        fontSize: 10
      },
      
    cellText: {
        fontSize: 14,
        color: '#fff',
    
      },
    headerText: {
      color: '#fff', fontWeight: 'bold', 
      fontSize: 20
    },
    wapo: {
      color: '#fff',
      fontWeight: 'bold'
    },
  });