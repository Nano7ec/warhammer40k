import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function Orks() {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.desc}>
        El infame grito de guerra de los Orkos es conocido y temido en toda la galaxia. 
        Cuando resuena en el campo de batalla, bramado por cientos o incluso miles de gargantas pielesverdes, 
        incluso los guerreros más valientes temen la avalancha que se avecina.
      </Text>
      <Text style={styles.subtitle}>WAAAGH!</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Orks, una vez por batalla, al inicio de una ronda de batalla, 
        puedes declarar un Waaagh!. Si lo haces, hasta el inicio de la siguiente ronda de batalla:
        {'\n'}■ Las unidades Orks de tu ejército pueden declarar una carga en un turno en el que Avanzaron.
        {'\n'}■ Suma 1 a las características de Fuerza y Ataques de las armas cuerpo a cuerpo equipadas por modelos Orks de tu ejército.
        {'\n'}■ Los modelos Orks de tu ejército tienen una salvación invulnerable de 5+.
      </Text>

      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción es Orks, puedes usar esta regla del Destacamento de la Tribu Waaagh!
      </Text>
      <Text style={styles.subtitle}>¡VAMOS A PELEAR!</Text>
      <Text style={styles.desc}>
        Una vez que un Ork entra en combate cuerpo a cuerpo, rápidamente abruma a sus enemigos con pura ferocidad. 
        Las armas cuerpo a cuerpo equipadas por los modelos Orks de tu ejército ganan la habilidad [SUSTAINED HITS 1].
      </Text>

      <Text style={styles.maintitle}>ESTRATAGEMAS</Text>
      <Text style={styles.title}>¡CAREAR!</Text>
      <Text style={styles.desc}>
        CUÁNDO: Cualquier fase, justo después de que una unidad de Vehículos Orks de tu ejército con la habilidad Muerte Letal sea destruida.
        {'\n'}OBJETIVO: Esa unidad de Vehículos Orks destruida, si sacas un 6 en su habilidad Muerte Letal.
        {'\n'}EFECTO: Tu unidad puede realizar un Movimiento Normal o Retirada antes de que se resuelva su habilidad Muerte Letal, 
        y antes de que las unidades embarcadas realicen una Desembarco de Emergencia. Durante este movimiento, tu unidad puede moverse sobre unidades enemigas (excepto Monstruos y Vehículos) como si no estuvieran allí.
      </Text>

      <Text style={styles.title}>LOS ORKS NUNCA PIERDEN</Text>
      <Text style={styles.desc}>
        CUÁNDO: Fase de combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
        {'\n'}OBJETIVO: Una unidad de Orks de tu ejército seleccionada como objetivo de uno o más de los ataques de la unidad atacante.
        {'\n'}EFECTO: Hasta el final de la fase, cada vez que un modelo en tu unidad sea destruido, si ese modelo no ha combatido en esta fase, 
        no lo retires del campo de batalla. El modelo destruido puede combatir después de que la unidad atacante haya terminado de hacer sus ataques, y luego es retirado.
      </Text>

      <Text style={styles.maintitle}>MEJORAS</Text>
      <Text style={styles.title}>¡SÍGUEME MUCHACHOS!</Text>
      <Text style={styles.desc}>
        Solo para modelos Orks. Mientras el portador esté liderando una unidad, suma 2" a la característica de Movimiento de los modelos de esa unidad.
      </Text>
      <Text style={styles.title}>HEADWOPPA'S KILLCHOPPA</Text>
      <Text style={styles.desc}>
        Solo para modelos Orks. Las armas cuerpo a cuerpo equipadas por el portador que no tengan la habilidad [EXTRA ATTACKS] ganan la habilidad [DEVASTATING WOUNDS].
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

