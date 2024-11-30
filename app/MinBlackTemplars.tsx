import { router } from "expo-router";
import {Text, ScrollView, StyleSheet, View} from 'react-native'
import Asurmen from "@/components/miniaturas/Aeldari/Asurmen";
import Autarch from "@/components/miniaturas/Aeldari/Autarch";
import AutarchSkyrunner from "@/components/miniaturas/Aeldari/AutarchSkyrunner";
import AutarchWayleaper from "@/components/miniaturas/Aeldari/AutarchWayleaper";
import Avatar from "@/components/miniaturas/Aeldari/Avatar";
import Baharroth from "@/components/miniaturas/Aeldari/Baharroth";
import Corsair from "@/components/miniaturas/Aeldari/Corsair";
import ChaplainGrimaldus from "@/components/miniaturas/BlackTemplars/ChaplainGrimaldus";
import CrusaderSquad from "@/components/miniaturas/BlackTemplars/CrusaderSquad";
import HighMarshal from "@/components/miniaturas/BlackTemplars/HighMarshal";
import PrimarisCrusader from "@/components/miniaturas/BlackTemplars/PrimarisCrusader";
import PrimarisSword from "@/components/miniaturas/BlackTemplars/PrimarisSword";

export default function MinBlackTemplars (){
    return (
        <ScrollView>
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
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Movimiento</Text>
                  </Text>
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
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Dureza</Text>
                  </Text>
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
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Salvacion</Text>
                  </Text>
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
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Heridas</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>W</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Liderazgo</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>Ld</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Potencial nominal</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>Oc</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Arma distancia</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>AD</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Armas cuerpo a cuerpo</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>ACC</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Rango</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>R</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Exito de conexion</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>BS</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Fuerza</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>S</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Penetracion de armadura</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>AP</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Daño</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>D</Text>
                </View>
              </>
            </View>
            </>
            <ChaplainGrimaldus/>
            <CrusaderSquad/>
            <HighMarshal/>
            <PrimarisCrusader/>
            <PrimarisSword/>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
        border: {
          color: "#fff",
          fontWeight: "bold",
          backgroundColor: "#002E40",
          fontSize: 20,
          padding: 5,
          marginTop: 6,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        border2: {
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "#002E40",
            fontSize: 20,
            padding: 5,
            marginTop: 6,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
        
          },
        descrip: {
          fontSize: 18,
          backgroundColor: "#FFFFFF",
          color: "#000000",
          paddingLeft: 3,
          paddingRight: 3,
          paddingBottom: 3,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
        tableRow: {
          flexDirection: "row", // Alinear elementos en fila
          borderBottomWidth: 1,
          borderBottomColor: "#002E40",
        },
        tableCelltop: {
          flex: 1, // Distribuye equitativamente el espacio entre columnas
          alignItems: "center", // Centra el contenido horizontalmente
          justifyContent: "center", // Centra el contenido verticalmente
          padding: 5,
          backgroundColor: "#002E40",
          marginTop: 5,
          fontSize: 10,
        },
        tableCell: {
          flex: 1, // Distribuye equitativamente el espacio entre columnas
          alignItems: "center", // Centra el contenido horizontalmente
          justifyContent: "center", // Centra el contenido verticalmente
          padding: 5,
          backgroundColor: "#FFFFFF",
          fontSize: 10,
        },
        headerText: {
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: 20,
        },
        cellText: {
          fontSize: 14,
          color: "#000000",
        },
        wapo: {
          color: "#000000",
          fontWeight: "bold",
        },
        MinDes: {
          fontSize: 18,
          color: "#000000",
          paddingLeft: 3,
          paddingRight: 3,
          paddingBottom: 3,
        },
      });