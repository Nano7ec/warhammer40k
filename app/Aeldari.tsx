import * as React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function Aeldari () {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.italicdesc}>
        Los Aeldari viven al borde de la extinción. Por ello, sus videntes se
        han vuelto expertos en leer los acontecimientos futuros, ver los muchos
        hilos del destino que se avecinan para su pueblo y las consecuencias de
        seguir cada uno de ellos. Si se toma en el momento adecuado, una simple
        acción puede evitar resultados calamitosos y ayudar a los Aeldari en su
        continua lucha por la supervivencia.
      </Text>
      <Text style={styles.title}>HILOS DEL DESTINO</Text>
      <Text style={styles.desc}>
        Si tu Facción del Ejército es Aeldari, al comienzo de la batalla, haz
        una tirada de Hebras del Destino lanzando doce D6.
        {"\n"}
        {"\n"}Si lo deseas, puedes volver a lanzar todos estos dados, pero si lo
        haces, tira un D6 menos. Puedes seguir tirando todos los dados de esta
        manera, tirando un D6 menos cada vez que lo hagas, hasta que estés
        satisfecho con los resultados obtenidos (o hasta que solo te quede un D6
        restante).
        {"\n"}
        {"\n"}Cuando estés satisfecho con los resultados obtenidos, los dados
        restantes se convertirán en tus dados de destino para la batalla. Estos
        resultados no se pueden cambiar ni volver a lanzar, a menos que una
        regla indique específicamente lo contrario. Mantén tus dados de Destino
        a un lado: esta es tu reserva de dados de Destino
        {"\n"}
        {"\n"}Antes de realizar una tirada de dados para una miniatura o unidad
        de tu ejército con la habilidad Strands of Fate, si tienes uno o más
        dados en tu reserva de dados de Fate, puedes usar uno de esos dados de
        Fate. Para ello, selecciona uno de esos dados de Fate para sustituir esa
        tirada de dados. El dado que se está sustituyendo no se tira; en su
        lugar, se usa el valor del dado de Fate seleccionado como si se hubiera
        tirado (esto cuenta como una tirada de dados sin modificar de ese valor
        para todos los propósitos de las reglas). Cada dado de Fate solo se
        puede usar de esta manera una vez. Después de usar un dado de Fate,
        retíralo de tu reserva de dados de Fate y tira todos los dados restantes
        que forman parte de esa tirada de dados (si los hay). Puedes usar dados
        de Fate para cualquiera de los siguientes tipos de tiradas de dados:
        {"\n"}
        {"\n"}■ Tirada de avance
        {"\n"}■ Prueba de choque de batalla
        {"\n"}■ Tirada de carga
        {"\n"}■ Tirada de daño
        {"\n"}■ Tirada de impacto
        {"\n"}■ Tirada de salvación
        {"\n"}■ Tirada de herida
      </Text>
      <Text style={styles.maintitle}>REGLA DE DESTACAMENTO</Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Aeldari, puedes usar esta regla del
        Destacamento de Hueste de Batalla.
      </Text>
      <Text style={styles.title}>PREVISIÓN INIGUALABLE</Text>
      <Text style={styles.italicdesc}>
        Cuando los Aeldari entran al campo de batalla, cualquiera que se les
        oponga queda desconcertado por su gracia, elegancia y habilidad marcial.
        Donde los seres inferiores flaquearían, los Aeldari se mueven con una
        seguridad de propósito que solo puede percibirse como predestinada.
      </Text>
      <Text style={styles.desc}>
        Cada vez que una unidad Aeldari de tu ejército es seleccionada para
        disparar o luchar, puedes repetir una tirada de Golpe y una tirada de
        Herida al resolver esos ataques.
      </Text>
      <Text style={styles.subtitle}>CORSARIOS Y JUGADORES VIAJEROS</Text>
      <Text style={styles.italicdesc}>
        La Ciudad Oscura es frecuentada por mercenarios despiadados y guerreros
        nómadas de otras ramas de la antigua raza. Grupos de Arlequines y bandas
        piratas de Corsarios acompañan a muchas incursiones de los Drukhari,
        libres de caminos restrictivos para buscar ganancias y agendas
        predestinadas en toda la galaxia.
      </Text>
      <Text style={styles.desc}>
        Si tu facción del ejército es Drukhari, puedes incluir unidades
        Arlequines y Anhrathe en tu ejército, incluso aunque no tengan la
        palabra clave Facción Drukhari. El valor en puntos combinado de las
        unidades Arlequines y/o Anhrathe que puedes incluir en tu ejército
        depende del tamaño de la batalla, de la siguiente manera:
        {"\n"}
        {"\n"}■ Incursión: hasta 250 pts
        {"\n"}■ Fuerza de ataque: hasta 500 pts
        {"\n"}■ Embestida: hasta 750 pts
        {"\n"}
        {"\n"}Ningún modelo Arlequines o Anhrathe incluido en tu ejército de
        esta manera puede ser tu Señor de la guerra, y no se les pueden dar
        Mejoras
      </Text>
      <Text style={styles.subtitle}>YNNARI</Text>
      <Text style={styles.desc}>
        Yvraine es tanto una divisoria como una unificadora entre la raza
        Aeldari, atrayendo tanto odio como admiración. Para algunos que alguna
        vez fueron aliados, ella y sus ideales se han convertido en una grieta
        inamovible, pero entre algunos que alguna vez fueron enemigos su
        influencia ha tendido lazos de camaradería que alguna vez se creyeron
        imposibles.
        {"\n"}
        {"\n"}Si tu facción del ejército es Aeldari y tu señor de la guerra es
        Yvraine, puedes incluir unidades Drukhari en tu ejército, incluso aunque
        no tengan la palabra clave Facción Aeldari. El valor de puntos combinado
        de dichas unidades que puedes incluir en tu ejército depende del tamaño
        de la batalla, de la siguiente manera:
        {"\n"}
        {"\n"}■ Incursión: hasta 500 pts
        {"\n"}■ Fuerza de ataque: hasta 1000 pts
        {"\n"}■ Embestida: hasta 1500 pts
        {"\n"}
        {"\n"}Ningún modelo Drukhari incluido en tu ejército de esta manera
        puede recibir Mejoras. No puedes incluir unidades con ninguna de las
        siguientes palabras clave en tu ejército usando estas reglas: Señores
        del Fénix; Anhrathe; Avatar de Khaine; Solitario; Covens de Haemonculus
      </Text>
      <Text style={styles.maintitle}>MEJORAS</Text>
      <Text style={styles.desc}>
        Si estás usando la regla de Destacamento de Anfitrión de Batalla, puedes
        usar estas Mejoras de Anfitrión de Batalla
      </Text>
      <Text style={styles.subtitle}>LA GEMA DEL FÉNIX</Text>
      <Text style={styles.italicdesc}>
        En el apogeo de la Guerra en el Cielo, Isha atrajo el calor de cien
        estrellas hacia una gema brillante para salvar a Asuryan. Se dice que la
        Gema del Fénix es el único fragmento sobreviviente de esta antigua
        piedra y aún conserva el poder de devolver la vida a los caídos.
      </Text>
      <Text style={styles.desc}>
        Solo para modelos Aeldari. La primera vez que se destruya al portador,
        tira un D6: con un 2+, déjalo a un lado. Al final de la fase, vuelve a
        colocar al portador en su lugar, lo más cerca posible de su posición
        anterior y fuera del alcance de combate de ningún modelo enemigo, con
        todas sus heridas restantes.
      </Text>
      <Text style={styles.subtitle}>LAS PIEDRAS QUE LLORAN</Text>
      <Text style={styles.italicdesc}>
        Estas piedras rúnicas, talladas en rubíes psicoactivos, se asemejan a
        las gotas de sangre que gotean de la mano de Khaine. En la batalla,
        estas piedras se reorganizan y revelan elementos del futuro.
      </Text>
      <Text style={styles.desc}>
        Solo para el modelo Aeldari. Cada vez que la unidad del portador
        destruya una unidad enemiga, tira un D6 y añádelo a tu reserva de dados
        de Destino, mostrando el resultado que acabas de obtener.
      </Text>
      <Text style={styles.subtitle}>LECTOR DE LAS RUNAS</Text>
      <Text style={styles.italicdesc}>
        Usando su presciencia para discernir las intenciones del comandante
        enemigo, este psíquico puede reaccionar incluso antes de que los planes
        del enemigo entren en acción.
      </Text>
      <Text style={styles.desc}>
        Solo modelo Aeldari Psyker. En tu fase de Mando, puedes seleccionar un
        dado de tu reserva de dados de Fate, volver a tirarlo y luego agregarlo
        nuevamente a tu reserva de dados de Fate mostrando el resultado que
        acabas de tirar.
      </Text>
      <Text style={styles.subtitle}>MENSAJERO DEL DESTINO</Text>
      <Text style={styles.italicdesc}>
        Los hilos del destino se enroscan y retuercen alrededor de este
        guerrero, los caminos del destino están manipulados para protegerlo del
        daño y así poder contraatacar a sus enemigos.
      </Text>
      <Text style={styles.desc}>
        Solo para el modelo Aeldari. Una vez por turno, justo después de
        realizar una tirada para Golpear, una tirada para Herir o una tirada de
        salvación para el modo en la unidad del portador, puedes tratar el
        resultado como una tirada sin modificar de 6 en lugar de
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

