import * as React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function Mechanicus() {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.italicdesc}>
        Un ejército de Adeptus Mechanicus marchando a la guerra es una visión a
        la vez aterradora y gloriosa, cada guerrero sagrado es una inquietante
        fusión de humano y máquina. Mientras que los Tecnosacerdotes gobernantes
        y sus seguidores fanáticos alzan voces modificadas en alabanza al Dios
        Máquina, sus soldados Skitarii y sus creaciones de los Servidores están
        controlados por imperativos doctrinales cargados por sus amos para
        aumentar y adaptar las habilidades de los guerreros.
      </Text>
      <Text style={styles.title}>IMPERATIVOS DE LA DOCTRINA</Text>
      <Text style={styles.desc}>
        Al comienzo de la ronda de batalla, puedes seleccionar uno de los
        imperativos de doctrina que aparecen a continuación. Hasta el final de
        la ronda de batalla, ese imperativo de doctrina estará activo para tu
        ejército y todas las unidades de tu ejército que tengan la habilidad
        Imperativos de doctrina obtendrán las habilidades correspondientes que
        se muestran a continuación.
      </Text>
      <Text style={styles.subtitle}>IMPERATIVO PROTECTOR</Text>
      <Text style={styles.desc}>
        ■ Las armas a distancia equipadas por los modelos de esta unidad tienen
        la habilidad [PESADO].
        {"\n"}■ Cada vez que un ataque a distancia tiene como objetivo a esta
        unidad, si esta unidad está dentro de tu zona de despliegue, empeora la
        característica de penetración de armadura de ese ataque en 1
      </Text>
      <Text style={styles.subtitle}>IMPERATIVO DEL CONQUISTADOR</Text>
      <Text style={styles.desc}>
        ■ Las armas a distancia equipadas por las miniaturas de esta unidad
        tienen la habilidad [ASALTO].
        {"\n"}■ Cada vez que un modelo de esta unidad realiza un ataque a
        distancia, si el objetivo de ese ataque está dentro de la zona de
        despliegue de tu oponente, mejora la característica de Penetración de
        Armadura de ese ataque en 1.
      </Text>
      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Adeptus Mechanicus, puedes usar esta regla
        de Destacamento Rad-Cohort.
      </Text>
      <Text style={styles.title}>RAD-BOMBARDMENT</Text>
      <Text style={styles.italicdesc}>
        Ya sea como resultado de fenómenos naturales, conflictos apocalípticos o
        accidentes calamitosos, muchos mundos forja están fuertemente
        irradiados. Cuando se desatan guerras santas de requisición, los
        tecnosacerdotes no dudan en lanzar esta maldición invisible sobre sus
        enemigos y bombardean el campo de batalla con radiación letal antes de
        un asalto.
      </Text>
      <Text style={styles.subtitle}>RONDA DE BATALLA 1</Text>
      <Text style={styles.subtitle}>BOMBARDEO</Text>
      <Text style={styles.desc}>
        Al comienzo de la primera ronda de batalla, por cada unidad enemiga que
        se encuentre dentro de la zona de despliegue de tu oponente, este debe
        decidir si esa unidad se pondrá a cubierto o se mantendrá firme.
        {"\n"}Si una unidad se pone a cubierto, hasta el final de la ronda de
        batalla, esa unidad queda en estado de shock de batalla. Si una unidad
        se mantiene firme, tira un D6 por esa unidad: con un 3+, esa unidad
        sufre D3 heridas mortales.
      </Text>
      <Text style={styles.subtitle}>RONDA DE BATALLA 2</Text>
      <Text style={styles.subtitle}>FALLOUT</Text>
      <Text style={styles.desc}>
        Al comienzo de la segunda, tercera, cuarta y quinta ronda de batalla,
        tira un D6 por cada unidad enemiga que se encuentre dentro de la zona de
        despliegue de tu oponente. Con un resultado de 3+, esa unidad sufre 1
        herida mortal.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maintitle: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#9F322A",
    fontSize: 25,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 5,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#9F322A",
    fontSize: 20,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 5,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: "#9F322A",
    fontSize: 15,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 5,
  },
  desc: {
    fontSize: 15,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  italicdesc: {
    fontSize: 15,
    backgroundColor: "#FFFFFF",
    fontStyle: "italic",
    color: "#000000",
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  scroll: { flex: 1, backgroundColor: "#E5E6E8", padding: 5 },
});

