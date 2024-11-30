import * as React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function AdeptaRulesScreen () {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.italicdesc}>
        Las Hermanas de Batalla de las Adepta Sororitas portan el armamento
        sagrado con el que conquistaron las legiones del Emperador la galaxia, e
        ilumina a los infieles con ráfagas letales de la santísima trinidad de
        armas bólter, lanzallamas y melta.
        {"\n"} Se dice que la bendición del Emperador toca a cada uno de estos
        guerreros, manifestándose como un nimbo de luz sagrada en cuyo poder se
        revela en hechos milagrosos de fortaleza y fuerza divina.
      </Text>
      <Text style={styles.title}>ACTOS DE FE</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Adepta Sororitas, cada unidad de tu
        ejército con esta habilidad puede realizar un acto de fe por fase. Esto
        se hace usando dados de milagro.
      </Text>
      <Text style={styles.subtitle}>COMO GANAR DADOS DE MILAGRO</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Adepta Sororitas, obtienes 1 dado de
        Milagro:
        {"\n"} ■ Al comienzo de cada turno.
        {"\n"} ■ Cada vez que una unidad de Adepta Sororitas de tu ejército sea
        destruida.
        {"\n"}Cada vez que obtengas un dado de Milagro, tira un D6. El número
        que obtengas será el valor de ese dado de Milagro. Este valor no se
        puede cambiar ni volver a tirar, a menos que una regla indique
        específicamente lo contrario. Deja tus dados de Milagro a un lado: esta
        es tu reserva de dados de Milagro.
      </Text>
      <Text style={styles.subtitle}>REALIZAR UN ACTO DE FE</Text>
      <Text style={styles.desc}>
        Antes de realizar una tirada de dados para una miniatura o unidad de tu
        ejército con la habilidad Actos de fe, si tienes uno o más dados en tu
        reserva de dados Milagrosos, esa unidad puede realizar un Acto de fe. Si
        es así, selecciona uno de los dados de tu reserva de dados Milagrosos
        para sustituir esa tirada de dados (si una tirada implica más de un
        dado, p. ej. una tirada de Carga o una prueba de Choque de batalla, solo
        se puede sustituir un único dado). El dado que se está sustituyendo no
        se tira; en su lugar, se utiliza el valor del dado Milagroso
        seleccionado como si se hubiera tirado (esto cuenta como una tirada de
        dados sin modificar de ese valor para todos los propósitos de las
        reglas). Cada dado Milagroso solo se puede seleccionar para sustitución
        una vez. Una vez que se hayan realizado todas las sustituciones de dados
        Milagrosos, retira el dado Milagroso elegido de tu reserva de dados
        Milagrosos y tira todos los dados restantes no sustituidos que formen
        parte de la tirada de dados. Puedes usar dados de Milagro cuando una
        unidad realiza un Acto de Fe para cualquiera de los siguientes tipos de
        tiradas de dados:
        {"\n"} ■ Tirada de avance
        {"\n"} ■ Prueba de choque de batalla
        {"\n"} ■ Tirada de carga
        {"\n"} ■ Tirada de daño
        {"\n"} ■ Tirada para impactar
        {"\n"} ■ Tirada de salvación
        {"\n"} ■ Tirada para herir
      </Text>
      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Adepta Sororitas, puedes usar esta regla
        del Destacamento de Mártires Santificados.
      </Text>
      <Text style={styles.title}>LA SANGRE DE LOS MÁRTIRES</Text>
      <Text style={styles.italicdesc}>
        La sangre de los mártires es la fuerza vital del Imperio. Así lo
        proclaman con júbilo los principios de esta Orden, y en la hora más
        oscura de sus guerreros brilla con más fuerza el sacrificio de sus
        Hermanas caídas.
      </Text>
      <Text style={styles.desc}>
        Cada vez que una miniatura de Adepta Sororitas de tu ejército realice un
        ataque, suma 1 a la tirada para Golpear si la unidad de esa miniatura
        está por debajo de su Fuerza Inicial, y suma 1 también a la tirada para
        Herir si la unidad de esa miniatura está por Debajo de la Mitad de su
        Fuerza. Para los propósitos de esta habilidad, si una unidad tiene una
        Fuerza Inicial de 1, se considera que está por debajo de su Fuerza
        Inicial mientras haya perdido una o más heridas.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maintitle: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#5D0300",
    fontSize: 25,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 5,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#5D0300",
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
    backgroundColor: "#5D0300",
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

