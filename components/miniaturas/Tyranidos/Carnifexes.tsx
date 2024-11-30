import React from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Barbguants(){
    return(
        <View>
          {/**Carnifexes */}
      <> 
        <Image resizeMode="stretch" style={styles.image} source={require('./imagenes//Carnifexes.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          <Text style={styles.wapo}>Core:</Text> Deadly Demise 1
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Synapse
          {'\n'}<Text style={styles.wapo}>Asalto abrasador:</Text> Cada vez que una unidad enemiga es seleccionada para disparar, después de que esa unidad haya disparado, si alguna miniatura de esta unidad perdió una o más heridas como resultado de esos ataques, esta unidad puede realizar un movimiento de Asalto abrasador.
          {'\n'}Para ello, tira un D6, sumando 2 al resultado.
          {'\n'}cada modelo de esta unidad puede moverse una distancia en pulgadas hasta el resultado, pero esta unidad debe terminar ese movimiento lo más cerca posible de la unidad enemiga más cercana.
          {'\n'}Al hacerlo, esas miniaturas pueden moverse dentro del Alcance de Combate de esa unidad enemiga. Cada unidad sólo puede efectuar un movimiento de Asalto abrasador por fase.
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
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Bio-plasma [ASSAULT, BLAST]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Deathspitters with slimer maggots</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Devourers with brainleech worms</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>18"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Heavy venom cannon [BLAST]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Spine banks [ASSAULT]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Stranglethorn cannon [BLAST]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>36"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>7</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
          </>
        </View>

        {/* Cabecera de la tabla */}
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
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Carnifex crushing claws</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>12</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6+1</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Carnifex extra scything talons [EXTRA ATTACKS]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Carnifex scything talons </Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>9</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>-2</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>3</Text>
            </View>
          </>
        </View>

        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Xenos claws and teeth </Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>
            OPCIONES DE EQUIPO
          </Text>
          <Text style={styles.descrip}>■ Cualquier número de modelos puede tener cada uno sus garras de guadaña extra Carnifex reemplazados por uno de los las siguientes:
            {'\n'}◦ 1 deathspitters with slimer maggots
            {'\n'}◦ 1 devourers with brainleech worms
            {'\n'}◦ 1 heavy venom cannon
            {'\n'}◦ 1 stranglethorn cannon
            {'\n'}◦ 1 Carnifex crushing claws
            {'\n'}■ Cualquier número de modelos puede tener cada uno sus garras trituradoras de Carnifex reemplazadas por una de las
            {'\n'}los siguientes:
            {'\n'}◦ 1 deathspitters with slimer maggots
            {'\n'}◦ 1 devourers with brainleech worms
            {'\n'}◦ 1 Carnifex crushing claws
            {'\n'}■ Cualquier número de modelos pueden equiparse cada uno con 1 bioplasma.
            {'\n'}■ Cualquier número de modelos puede equiparse cada uno con 1 bancos de espinas.
          </Text>
        </>
 
        <Text style={styles.border}>
          COMPOSICIÓN DE LA UNIDAD
        </Text>
        <Text style={styles.descrip}>■ 1-2 Carnifexes
          {'\n'}Cada modelo está equipado con: Garras guadañadoras Carnifex;
          {'\n'}Garras guadañadoras adicionales Carnifex; garras y dientes xenos.
        </Text>
        <Text style={styles.MinDes}>
          1 model ..............................................................125 pts
          {'\n'}2 models ............................................................250 pts
        </Text>
      </>
        </View>
    );
}

const styles = StyleSheet.create({
    border: { color: '#fff', fontWeight: 'bold', backgroundColor: '#2C0069', fontSize: 20, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10,
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