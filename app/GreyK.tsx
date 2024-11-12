import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const GreyK = () => {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.desc}>
        El alma de los Grey Knights es sacrosanta, y su pureza es incorruptible. La armadura plateada de estos guerreros está grabada con sigilos protectores, y sus espadas brillan con la luz interior de su santidad. Cada uno de estos Marines Espaciales es un guerrero psíquico en comunión con sus hermanos de batalla, capaces de cortar acero con las manos desnudas y cuyas palabras desgarran la piel de los demonios. Son la espada y el escudo del Imperio contra lo demoníaco.
      </Text>

      <Text style={styles.subtitle}>ASALTO TELETRANSPORTADO</Text>
      <Text style={styles.desc}>
        Si tu facción es Grey Knights, al final del turno de tu oponente, puedes seleccionar un número de unidades Grey Knights con esta habilidad. El número máximo depende del tamaño de la batalla:
        {'\n'}■ Patrulla de combate: hasta 1 unidad.
        {'\n'}■ Incursión: hasta 2 unidades.
        {'\n'}■ Fuerza de ataque: hasta 3 unidades.
        {'\n'}■ Embestida: hasta 4 unidades.
        {'\n'}Luego, retira esas unidades del campo de batalla. En la fase de Refuerzos de tu próxima fase de Movimiento, coloca esas unidades a más de 9" de cualquier modelo enemigo.
      </Text>

      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción es Grey Knights, puedes usar esta regla del destacamento de la Fuerza de Ataque Teleportada.
      </Text>
      <Text style={styles.subtitle}>TELEPORT SHUNT</Text>
      <Text style={styles.desc}>
        Los Grey Knights pueden soportar teletransportaciones repetidas y rápidas, lo que les permite maniobrar excepcionalmente. Cada vez que una unidad Grey Knights con la habilidad Despliegue Rápido avanza, suma 6" a su movimiento y puede volar.
      </Text>

      <Text style={styles.maintitle}>ESTRATAGEMAS</Text>
      <Text style={styles.title}>GOLPE RADIANTE</Text>
      <Text style={styles.desc}>
        La furia psíquica envuelve las espadas de los Grey Knights mientras cargan contra el enemigo.
        {'\n'}CUÁNDO: Fase de combate.
        {'\n'}OBJETIVO: Una unidad de Psíquicos Grey Knights.
        {'\n'}EFECTO: Hasta el final de la fase, las armas cuerpo a cuerpo de esa unidad ganan la habilidad [DEVASTATING WOUNDS].
      </Text>

      <Text style={styles.title}>LLEGADA PROGNOSTICADA</Text>
      <Text style={styles.desc}>
        Accediendo a una visión concedida por los Prognosticars del Capítulo, los Grey Knights perciben los caminos ocultos del campo de batalla.
        {'\n'}CUÁNDO: Fase de Movimiento.
        {'\n'}OBJETIVO: Una unidad Psíquica de Grey Knights que esté usando la habilidad de Despliegue Rápido o Asalto Teleportado.
        {'\n'}EFECTO: Coloca la unidad a más de 3" de los modelos enemigos. No puede declarar una carga ese turno.
      </Text>

      <Text style={styles.maintitle}>MEJORAS</Text>
      <Text style={styles.title}>PRIMERO EN LA BATALLA</Text>
      <Text style={styles.desc}>
        Este comandante sagrado suele ser el primero en la batalla. Los hermanos de batalla lo siguen con inspiración.
        {'\n'}Solo modelos Grey Knights con la habilidad de Despliegue Rápido. La unidad del portador debe comenzar en Reservas, pero no cuenta para los límites de Reservas estratégicas.
      </Text>
      <Text style={styles.title}>DOMINA LIBER DAEMONICA</Text>
      <Text style={styles.desc}>
        Un tomo relicario que repele entidades warp y envía a los demonios de regreso al warp.
        {'\n'}Solo para Grey Knights. Cada vez que el portador realice un ataque cuerpo a cuerpo, suma 1 a la tirada de Heridas. Si ataca a una unidad Demonio, suma 1 al Daño.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maintitle: { color: '#fff', 
    fontWeight: 'bold', 
    backgroundColor: '#2C0069', 
    fontSize: 25, 
    padding: 5, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    marginTop: 5 },
  title: { color: '#fff', 
    fontWeight: 'bold', 
    backgroundColor: '#2C0069', 
    fontSize: 20, 
    padding: 5, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    marginTop: 5 },
  subtitle: { color: '#fff', 
    fontWeight: 'bold', 
    fontStyle: 'italic', 
    backgroundColor: '#2C0069', 
    fontSize: 15, 
    padding: 5, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    marginTop: 5 },
  desc: { fontSize: 15, 
    backgroundColor: '#C5ACE3', 
    color: '#000000', 
    paddingLeft: 3, 
    paddingRight: 3, 
    paddingBottom: 3, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10 },
  scroll: { flex: 1, 
    backgroundColor: '#E5E6E8', 
    padding: 5 },
});


export default GreyK;