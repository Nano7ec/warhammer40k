import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function (){
    return (
        <ScrollView style={styles.scroll}>
          <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
          <Text style={styles.desc}>
            Los Space Wolves son un Capítulo de Marines Espaciales conocidos por su ferocidad salvaje. Proceden del mundo helado de Fenris y se esfuerzan por emular la fuerza y astucia de su Primarca, Leman Russ, el Rey Lobo. Al cazar a los enemigos de la humanidad, emplean tecnologías avanzadas bajo una fachada de barbarie feroz. Con alardes audaces y rugidos de guerreros nacidos para el combate, son héroes que luchan sin miedo ni duda, forjando sagas dignas de ser inmortalizadas.
          </Text>
    
          <Text style={styles.subtitle}>DETACHMENT RULE: CAMPEONES DE RUSS</Text>
          <Text style={styles.desc}>
            Si tu facción es Adeptus Astartes, puedes usar esta regla del destacamento de Campeones de Russ.
            {'\n'}■ Tu ejército puede incluir unidades de Space Wolves, pero no puede incluir unidades de Adeptus Astartes de otros capítulos.
            {'\n'}■ No puedes incluir unidades como Tactical Squad, Assault Squad, Devastator Squad, ni Primaris Apothecary.
          </Text>
    
          <Text style={styles.maintitle}>ESTRATAGEMAS</Text>
          <Text style={styles.title}>ARMADURA DEL DESDÉN</Text>
          <Text style={styles.desc}>
            La fisiología transhumana de los Adeptus Astartes los convierte en enemigos implacables.
            {'\n'}CUÁNDO: Fase de Disparo o de Combate del oponente.
            {'\n'}OBJETIVO: Una unidad de Adeptus Astartes de tu ejército seleccionada como objetivo de uno o más ataques.
            {'\n'}EFECTO: Hasta el final de la fase, cada vez que un ataque impacte a un modelo en tu unidad, empeora en 1 la Penetración de Armadura de ese ataque.
          </Text>
    
          <Text style={styles.title}>APUNTA AL CUELLO</Text>
          <Text style={styles.desc}>
            Con el olor a sangre en el aire y la emoción del combate, incluso la presa más grande puede ser derribada.
            {'\n'}CUÁNDO: Fase de combate.
            {'\n'}OBJETIVO: Una unidad Adeptus Astartes que no haya sido seleccionada para luchar en esa fase.
            {'\n'}EFECTO: Hasta el final de la fase, mejora en 1 la Penetración de Armadura de las armas cuerpo a cuerpo equipadas por los modelos en tu unidad.
          </Text>
    
          <Text style={styles.maintitle}>MEJORAS</Text>
          <Text style={styles.title}>LA PIEL DEL LOBO NEGRO</Text>
          <Text style={styles.desc}>
            Solo para modelos Adeptus Astartes. Al inicio de la fase de combate, cada unidad enemiga en rango de compromiso del portador debe hacer una prueba de Moral.
          </Text>
    
          <Text style={styles.title}>MUERTE NEGRA</Text>
          <Text style={styles.desc}>
            Solo para modelos Adeptus Astartes. Las armas cuerpo a cuerpo del portador ganan las habilidades [ANTI-MONSTER 4+] y [ANTI-VEHICLE 4+].
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