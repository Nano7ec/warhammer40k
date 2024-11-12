import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function SpaceMarines () {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.desc}>
        Los Space Marines juran poderosos votos para destruir a los enemigos del Emperador y mantener el honor de su Capítulo. Estos juramentos son sacrosantos. Atacan con la precisión de un cirujano y la fuerza de un rayo. Su experiencia y pericia estratégica les permiten leer la batalla con claridad posthumana, dirigiendo su ira a un objetivo prioritario tras otro.
      </Text>

      <Text style={styles.subtitle}>JURAMENTO DEL MOMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Adeptus Astartes, al comienzo de tu fase de mando, selecciona una unidad del ejército enemigo. Hasta el comienzo de tu siguiente fase de mando, cada vez que un modelo de tu ejército con esta habilidad ataque a esa unidad, puedes repetir la tirada para Impactar y la tirada para Herir.
      </Text>

      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción es Adeptus Astartes, puedes usar esta regla del destacamento de la Fuerza de Tareas Gladius.
      </Text>
      <Text style={styles.subtitle}>DOCTRINAS DE COMBATE</Text>
      <Text style={styles.desc}>
        El Codex Astartes ha demostrado su valía como un tratado supremo sobre la guerra. Al comienzo de tu fase de mando, selecciona una de las Doctrinas de Combate. Sus efectos aplicarán a todas las unidades Adeptus Astartes de tu ejército hasta el comienzo de tu siguiente fase de mando.
      </Text>
      <Text style={styles.desc}>
        ■ **Doctrina Devastadora**: Esta unidad puede disparar en un turno en el que Avanzó.
        {'\n'}■ **Doctrina Táctica**: Esta unidad puede disparar y declarar una carga en un turno en el que Retrocedió.
        {'\n'}■ **Doctrina de Asalto**: Esta unidad puede declarar una carga en un turno en el que Avanzó.
      </Text>

      <Text style={styles.maintitle}>ESTRATAGEMAS</Text>
      <Text style={styles.title}>SÓLO EN LA MUERTE TERMINA EL DEBER</Text>
      <Text style={styles.desc}>
        CUÁNDO: Fase de combate, después de que una unidad enemiga haya seleccionado sus objetivos.
        {'\n'}OBJETIVO: Una unidad Adeptus Astartes que fue seleccionada como objetivo de los ataques.
        {'\n'}EFECTO: Hasta el final de la fase, cada vez que un modelo en tu unidad sea destruido, si no ha luchado en esta fase, puede luchar antes de ser retirado del campo de batalla.
      </Text>

      <Text style={styles.title}>HONRAR AL CAPÍTULO</Text>
      <Text style={styles.desc}>
        CUÁNDO: Fase de combate.
        {'\n'}OBJETIVO: Una unidad Adeptus Astartes.
        {'\n'}EFECTO: Las armas cuerpo a cuerpo ganan la habilidad [LANCE]. Si tu unidad está bajo los efectos de la Doctrina de Asalto, mejora la Penetración de Armadura en 1.
      </Text>

      <Text style={styles.maintitle}>MEJORAS</Text>
      <Text style={styles.title}>ARMADURA DE ARTIFICIERO</Text>
      <Text style={styles.desc}>
        Solo modelos Adeptus Astartes. El portador tiene una característica de Salvación de 2+ y la habilidad No Hay Dolor 5+.
      </Text>
      <Text style={styles.title}>EL HONOR VEHEMENTE</Text>
      <Text style={styles.desc}>
        Solo modelos Adeptus Astartes. Suma 1 a las características de Ataques y Fuerza de las armas cuerpo a cuerpo del portador. Mientras esté bajo los efectos de la Doctrina de Asalto, suma 2 en su lugar.
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


