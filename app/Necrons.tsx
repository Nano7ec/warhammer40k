import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const Necrons = () => {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.desc}>
        Las dinastías dispersas de los Necrones siguen muchos caminos diferentes hacia la dominación, 
        abrazando sus propias tradiciones y doctrinas marciales. Todas las dinastías se benefician también 
        de las tecnologías casi sobrenaturales que alguna vez les permitieron dominar la galaxia, tal vez la 
        más inquietante de las cuales son sus protocolos de reanimación. Si un Necrón es abatido, su cuerpo 
        se envuelve en un resplandor inquietante. Extremidades desmembradas se vuelven a unir, torsos rotos 
        y cráneos aplastados se reforman, y el Necrón se levanta de nuevo, tambaleándose de regreso a la batalla.
      </Text>
      <Text style={styles.subtitle}>PROTOCOLOS DE REANIMACIÓN</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Necrones, al final de tu fase de mando, cada unidad de tu ejército con esta habilidad 
        activa sus Protocolos de Reanimación y reanima D3 heridas. Cada vez que una unidad reanime una herida:
        {'\n'}■ Si esa unidad tiene uno o más modelos con menos de sus heridas iniciales, selecciona uno de esos modelos; 
        ese modelo recupera una herida perdida.
        {'\n'}■ Si todos los modelos en esa unidad tienen su número inicial de heridas, pero esa unidad no está en su Fuerza Inicial, 
        un modelo destruido es devuelto a esa unidad con una herida restante.
      </Text>

      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Necrones, puedes usar esta regla del Destacamento de la Dinastía Despierta.
      </Text>
      <Text style={styles.subtitle}>PROTOCOLOS DE MANDO</Text>
      <Text style={styles.desc}>
        La nobleza Necrona hace la guerra de manera codificada y despiadada. Sus protocolos de mando se 
        transmiten a través de espectros multidimensionales desde proyectores de ondas portadoras, obligando 
        a sus soldados semi-sintientes a la batalla con una directiva primordial a la vez.
        {'\n'}Mientras un modelo de Personaje Necrón esté liderando esta unidad, cada vez que un modelo en esta 
        unidad realice un ataque, suma 1 a la tirada para Impactar.
      </Text>

      <Text style={styles.maintitle}>ESTRATAGEMAS</Text>
      <Text style={styles.desc}>
        Si estás usando la regla del destacamento de la Dinastía Despierta, puedes usar estas estratagemas.
      </Text>
      <Text style={styles.title}>PROTOCOLO DEL GUARDIÁN ETERNO</Text>
      <Text style={styles.desc}>
        Los gobernantes Necrones poseen sofisticados sistemas de auto-reparación que pueden recomponer 
        sus formas corporales y así volver a comandar sus legiones.
        {'\n'}CUÁNDO: Cualquier fase.
        {'\n'}OBJETIVO: Un modelo de Personaje de Infantería Necrona de tu ejército que acaba de ser destruido.
        {'\n'}EFECTO: Coloca nuevamente tu modelo en el campo de batalla tan cerca como sea posible de donde fue 
        destruido y a más de 1" de todos los modelos enemigos, con la mitad de sus heridas iniciales restantes.
        {'\n'}RESTRICCIONES: Cada modelo solo puede ser objetivo de esta Estratagema una vez por batalla.
      </Text>

      <Text style={styles.title}>PROTOCOLO DEL VACÍO HAMBRIENTO</Text>
      <Text style={styles.desc}>
        Los Necrones golpean con precisión aumentada por datos, sus ataques asesinos son tan ineludibles como 
        el frío mortal del espacio.
        {'\n'}CUÁNDO: Fase de combate.
        {'\n'}OBJETIVO: Una unidad Necrona de tu ejército que no haya sido seleccionada para combatir esta fase.
        {'\n'}EFECTO: Hasta el final de la fase, suma 1 a la Fuerza de las armas cuerpo a cuerpo equipadas por los 
        modelos en tu unidad. Además, si un Personaje Necrón está liderando tu unidad, hasta el final de la fase, mejora 
        la Penetración de Armadura de las armas cuerpo a cuerpo equipadas por modelos en tu unidad en 1.
      </Text>

      <Text style={styles.maintitle}>MEJORAS</Text>
      <Text style={styles.title}>VELO DE OSCURIDAD</Text>
      <Text style={styles.desc}>
        Este dispositivo fue forjado a partir de transpositanio, una sustancia tan rara que solo se encuentra en unos 
        pocos lugares de la galaxia. Activado con un pensamiento, el Velo distorsiona el espacio y el tiempo alrededor 
        de su usuario y aquellos cerca de él, envolviéndolos en una oscuridad arremolinada.
        {'\n'}Solo para Necrones. Una vez por batalla, al final del turno de tu oponente, si la unidad del portador no está en 
        rango de compromiso de ninguna unidad enemiga, el portador puede usar esta mejora. Si lo hace, retira esa 
        unidad del campo de batalla. Luego, en la fase de refuerzos de tu siguiente fase de Movimiento, coloca esa 
        unidad en cualquier lugar del campo de batalla que esté a más de 9" horizontalmente de todos los modelos enemigos.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maintitle: { color: '#fff', fontWeight: 'bold', backgroundColor: '#2C0069', fontSize: 25, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 5 },
  title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#2C0069', fontSize: 20, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 5 },
  subtitle: { color: '#fff', fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#2C0069', fontSize: 15, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 5 },
  desc: { fontSize: 15, backgroundColor: '#C5ACE3', color: '#000000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  scroll: { flex: 1, backgroundColor: '#E5E6E8', padding: 5 },
});

export default Necrons;