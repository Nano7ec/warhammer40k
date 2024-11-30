import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function TousandSons (){
    return (
        <ScrollView style={styles.scroll}>
          <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
          <Text style={styles.desc}>
            Los Mil Hijos canalizan su poder arcano a través de rituales en el campo
            de batalla, invocando al Cambiador de Caminos para recibir conocimiento
            prohibido o devastar a sus enemigos con fuego del inmaterium y mutación.
          </Text>
    
          <Text style={styles.subtitle}>CABAL DE HECHICEROS</Text>
          <Text style={styles.desc}>
            Si la facción de tu ejército es Thousand Sons, al final de tu fase de
            Mando, cada modelo con esta habilidad genera puntos de Cabal, excepto
            los que están en estado de Choque de Batalla. La cantidad total de
            puntos conforma tu reserva de Cabal. Puedes usar Rituales durante la
            ronda de batalla, descontando su coste de la reserva de Cabal. Si no
            tienes suficientes puntos, no podrás usarlos. Cada Ritual solo puede
            activarse una vez por fase, y la reserva se reinicia en tu siguiente
            fase de Mando.
          </Text>
    
          <Text style={styles.maintitle}>DETACHMENT RULE: CULT OF MAGIC</Text>
          <Text style={styles.desc}>
            Si tu facción es Thousand Sons, puedes usar esta regla de destacamento.
          </Text>
    
          <Text style={styles.subtitle}>HECHICERÍA AFÍN</Text>
          <Text style={styles.desc}>
            En tu fase de Mando, selecciona una de las siguientes habilidades para
            que esté activa hasta el inicio de tu próxima fase de Mando:
            {"\n\n"}- <Text style={styles.bold}>Carga Malevolente</Text>: Las armas
            psíquicas de tus modelos tienen [IMPACTOS LETALES].
            {"\n"}- <Text style={styles.bold}>Maelstrom Psíquico</Text>: Las armas
            psíquicas tienen [IMPACTOS SOSTENIDOS 1].
            {"\n"}- <Text style={styles.bold}>Ira del Inmaterium</Text>: Las armas
            psíquicas obtienen [HERIDAS DEVASTADORAS].
          </Text>
    
          <Text style={styles.maintitle}>STRATAGEMS</Text>
    
          <Text style={styles.subtitle}>DOMINIO PSÍQUICO</Text>
          <Text style={styles.desc}>
            <Text style={styles.bold}>CUÁNDO:</Text> En cualquier fase, justo
            después de que una unidad enemiga haya seleccionado sus objetivos.
            {"\n"}
            <Text style={styles.bold}>OBJETIVO:</Text> Una unidad Thousand Sons
            seleccionada como objetivo.
            {"\n"}
            <Text style={styles.bold}>EFECTO:</Text> Hasta el final de la fase,
            todas las armas psíquicas que apunten a tu unidad ganan [PELIGROSA] y
            los modelos en tu unidad obtienen [NO SENTIR DOLOR 4+] contra esos
            ataques psíquicos.
          </Text>
    
          <Text style={styles.subtitle}>DESTINADO POR EL DESTINO</Text>
          <Text style={styles.desc}>
            <Text style={styles.bold}>CUÁNDO:</Text> En cualquier fase, cuando una
            tirada de salvación falle para un Psíquico Thousand Sons.
            {"\n"}
            <Text style={styles.bold}>OBJETIVO:</Text> Ese modelo psíquico.
            {"\n"}
            <Text style={styles.bold}>EFECTO:</Text> Cambia la característica de
            Daño del ataque a 0.
          </Text>
    
          <Text style={styles.subtitle}>BRUJERÍA DEVASTADORA</Text>
          <Text style={styles.desc}>
            <Text style={styles.bold}>CUÁNDO:</Text> En tu fase de Disparo.
            {"\n"}
            <Text style={styles.bold}>OBJETIVO:</Text> Una unidad Psíquica Thousand
            Sons que aún no haya disparado.
            {"\n"}
            <Text style={styles.bold}>EFECTO:</Text> Hasta el final de la fase,
            puedes repetir las tiradas para Impactar y Herir de los ataques
            psíquicos realizados por esa unidad.
          </Text>
    
          <Text style={styles.subtitle}>INFUSIÓN ENSORCELADA</Text>
          <Text style={styles.desc}>
            <Text style={styles.bold}>CUÁNDO:</Text> En tu fase de Disparo.
            {"\n"}
            <Text style={styles.bold}>OBJETIVO:</Text> Una unidad Psíquica Thousand
            Sons que aún no haya disparado.
            {"\n"}
            <Text style={styles.bold}>EFECTO:</Text> Hasta el final de la fase, las
            pistolas de bólter, combi-bólteres y combi-armas inferno de esa unidad
            ganan la habilidad [PSÍQUICA] y Fuerza 5.
          </Text>
    
          <Text style={styles.maintitle}>ENHANCEMENTS</Text>
    
          <Text style={styles.subtitle}>SEÑOR DEL CONOCIMIENTO PROHIBIDO</Text>
          <Text style={styles.desc}>
            Solo para modelos Psíquicos Thousand Sons. El portador puede usar un
            Ritual incluso si otro Psíquico ya ha usado uno esta fase.
          </Text>
    
          <Text style={styles.subtitle}>PERGAMINOS ATHENAEAN</Text>
          <Text style={styles.desc}>
            Solo para modelos Psíquicos Thousand Sons. En tu fase de Mando, si el
            portador no está bajo Choque de Batalla, genera 1 punto de Cabal
            adicional.
          </Text>
    
          <Text style={styles.subtitle}>CRISTAL UMBRALEFIC</Text>
          <Text style={styles.desc}>
            Solo para modelos Thousand Sons. Una vez por batalla, en tu fase de
            Mando, puedes retirar la unidad del portador del campo de batalla. En la
            fase de Refuerzos de tu siguiente fase de Movimiento, colócala en
            cualquier lugar a más de 9" de enemigos.
          </Text>
    
          <Text style={styles.subtitle}>VÓRTICE ARCANO</Text>
          <Text style={styles.desc}>
            Solo para modelos Thousand Sons. Suma 1 a la Fuerza y al Daño de las
            armas psíquicas del portador.
          </Text>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      maintitle: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#4A0072",
        fontSize: 25,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
      },
      subtitle: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#6A1B9A",
        fontSize: 20,
        padding: 8,
        borderRadius: 10,
        marginVertical: 5,
      },
      desc: {
        fontSize: 16,
        backgroundColor: "#E1BEE7",
        color: "#000",
        padding: 8,
        borderRadius: 10,
        marginVertical: 3,
      },
      bold: {
        fontWeight: "bold",
      },
      scroll: {
        flex: 1,
        backgroundColor: "#311B92",
        padding: 10,
      },
    });