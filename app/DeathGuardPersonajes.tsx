import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

// Interfaces para propiedades
interface Habilidad {
  nombre: string;
  descripcion: string;
}

interface Arma {
  headers: string[];
  rows: string[][];
}

interface PersonajeProps {
  nombre: string;
  imagen: any;
  habilidades: Habilidad[];
  armasDistancia: Arma;
  armasCuerpo: Arma;
}

// Componente para habilidades
const Habilidades: React.FC<{ habilidades: Habilidad[] }> = ({ habilidades }) => (
  <View style={styles.habilidadesContainer}>
    <Text style={styles.title}>Habilidades</Text>
    <Text style={styles.desc}>
      {habilidades.map((habilidad, index) => (
        <Text key={index}>
          <Text style={styles.highlight}>{habilidad.nombre}:</Text> {habilidad.descripcion}
          {"\n"}
        </Text>
      ))}
    </Text>
  </View>
);

// Componente de tabla genérica
const Table: React.FC<Arma> = ({ headers, rows }) => (
  <View style={styles.tableContainer}>
    <View style={styles.tableRow}>
      {headers.map((header, index) => (
        <View key={index} style={styles.tableCellTop}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
      ))}
    </View>
    {rows.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.tableRow}>
        {row.map((cell, cellIndex) => (
          <View key={cellIndex} style={styles.tableCell}>
            <Text style={styles.cellText}>{cell}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);

// Componente principal de personaje
const Personaje: React.FC<PersonajeProps> = ({
  nombre,
  imagen,
  habilidades,
  armasDistancia,
  armasCuerpo,
}) => (
  <View style={styles.personajeContainer}>
    <Text style={styles.nombrePersonaje}>{nombre}</Text>
    <Image resizeMode="stretch" style={styles.image} source={imagen} />
    <Habilidades habilidades={habilidades} />
    <Text style={styles.subtitle}>Armas a Distancia</Text>
    <Table headers={armasDistancia.headers} rows={armasDistancia.rows} />
    <Text style={styles.subtitle}>Armas Cuerpo a Cuerpo</Text>
    <Table headers={armasCuerpo.headers} rows={armasCuerpo.rows} />
  </View>
);

export default Personaje;

const styles = StyleSheet.create({
    personajeContainer: {
      marginBottom: 20,
      backgroundColor: "#0a1e0a", 
      padding: 10,
      borderRadius: 10,
      borderColor: "#4a5230", 
      borderWidth: 2,
    },
    nombrePersonaje: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#e8eae6", 
      textAlign: "center",
      marginBottom: 10,
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    habilidadesContainer: {
      marginBottom: 15,
    },
    title: {
      color: "#fff",
      fontWeight: "bold",
      backgroundColor: "#4a5230", 
      fontSize: 20,
      padding: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    desc: {
      fontSize: 16,
      backgroundColor: "#6b705c", 
      color: "#e8eae6", 
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    highlight: {
      fontWeight: "bold",
      color: "#93a97d", 
    },
    subtitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      backgroundColor: "#3b4d3b", 
      padding: 5,
      marginTop: 6,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderColor: "#93a97d",
      borderWidth: 2,
    },
    tableContainer: {
      marginBottom: 15,
    },
    tableRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#6b705c", 
    },
    tableCellTop: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      backgroundColor: "#4a5230", 
    },
    tableCell: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      backgroundColor: "#3b4d3b", 
      maxWidth: 80,
    },
    cellText: {
      fontSize: 11,
      color: "#e8eae6", 
      textAlign: "center",
      flexWrap: "wrap",
    },
    headerText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  