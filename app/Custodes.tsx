import * as React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function CustodesRulesScreen () {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.italicdesc}>
        Creados en las profundidades del Palacio del Emperador mediante
        alquimias genéticas esotéricas y otros procesos aún más misteriosos, los
        guerreros del Adeptus Custodes son los guardaespaldas personales del
        Emperador. Conocidos como los Diez Mil, son los guerreros de élite de
        todo el Imperio, y están armados y blindados a la altura. En la batalla,
        despliegan fuerzas de combate muy flexibles, desde infantería sin igual
        y motos a reacción ultrarrápidas hasta indomables caminantes de combate
        y tanques de batalla que rompen líneas. Sin embargo, es en el combate
        cuerpo a cuerpo donde realmente sobresalen, ya que cada guerrero domina
        las sutiles y matizadas posturas de combate diseñadas para dominar a los
        numerosos enemigos de los Custodios.
      </Text>
      <Text style={styles.title}>MARTIAL KA’TAH</Text>
      <Text style={styles.desc}>
        Al comienzo de la fase de combate, selecciona una postura de Ka'tah de
        la lista que aparece a continuación para que esté activa en tu ejército
        hasta el final de la fase. Mientras una postura de Ka'tah esté activa en
        tu ejército, cada unidad de tu ejército con esta habilidad obtiene la
        habilidad correspondiente.
      </Text>
      <Text style={styles.subtitle}>POSTURA KAPTARIS</Text>
      <Text style={styles.italicdesc}>
        Kaptaris está optimizado para atrapar unidades enemigas en combate
        cuerpo a cuerpo con los Custodios, donde los guerreros de élite pueden
        eliminarlos.
      </Text>
      <Text style={styles.desc}>
        Cada vez que un ataque cuerpo a cuerpo tenga como objetivo a esta
        unidad, resta 1 del Hit roll
      </Text>
      <Text style={styles.subtitle}>POSTURA DACATARAI</Text>
      <Text style={styles.italicdesc}>
        Su estilo de lucha agresivo ha sido adaptado para que los Custodios
        puedan enfrentarse a hordas de enemigos que los superan ampliamente en
        número.
      </Text>
      <Text style={styles.desc}>
        Las armas cuerpo a cuerpo equipadas por los modelos de esta unidad
        tienen la habilidad de [GOLPES SOSTENIDOS 1].
      </Text>
      <Text style={styles.subtitle}>POSTURA RENDAX</Text>
      <Text style={styles.italicdesc}>
        Los Maestros de Rendax son cazadores superlativos de monstruos y
        máquinas de guerra.
      </Text>
      <Text style={styles.desc}>
        Las armas cuerpo a cuerpo equipadas por los modelos de esta unidad
        tienen la habilidad de [GOLPES LETALES].
      </Text>
      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Adeptus Custodes, puedes usar esta regla
        de destacamento de ejército escudo
      </Text>
      <Text style={styles.title}>ÉGIDA DEL EMPERADOR</Text>
      <Text style={styles.italicdesc}>
        La alquimia celular que crea a los guerreros del Adeptus Custodes los
        deja para siempre tocados por una chispa de la grandeza del Emperador.
        Más allá de su poderío marcial y su nobleza incorruptible, esta energía
        se manifiesta como una protección casi sobrenatural, como si los
        Custodios estuvieran protegidos por la mano del Emperador.
      </Text>
      <Text style={styles.desc}>
        Los modelos de Adeptus Custodes de tu ejército tienen la habilidad [No
        Sentir Dolor 4+] contra heridas mortales.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maintitle: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#2C0069",
    fontSize: 25,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 5,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#2C0069",
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
    backgroundColor: "#2C0069",
    fontSize: 15,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 5,
  },
  desc: {
    fontSize: 15,
    backgroundColor: "#C5ACE3",
    color: "#000000",
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  italicdesc: {
    fontSize: 15,
    backgroundColor: "#C5ACE3",
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

