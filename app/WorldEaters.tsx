import {Text, ScrollView, StyleSheet} from 'react-native';

export default function WorldEaters (){
    return (
<ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.desc}>
        Khorne es el dios de la guerra y la matanza, y ofrece grandes
        bendiciones a aquellos que consagran el campo de batalla en su nombre.
      </Text>

      <Text style={styles.title}>BENDICIONES DE KHORNE</Text>
      <Text style={styles.desc}>
        Si la facción de tu ejército es Devoradores de Mundos, al comienzo de la
        ronda de batalla, puedes realizar una tirada de Bendiciones de Khorne.
        Tira ocho D6 y usa los resultados para activar hasta dos bendiciones de
        la lista de Bendiciones de Khorne. Cada bendición especifica los
        resultados requeridos (puede necesitar dobles, triples o valores
        específicos). Solo puedes activar cada bendición una vez por ronda de
        batalla. Los dados no utilizados se descartan.
      </Text>

      <Text style={styles.subtitle}>EJEMPLO DE ACTIVACIÓN</Text>
      <Text style={styles.desc}>
        Ash obtiene los siguientes resultados: 1, 2, 2, 2, 3, 4, 6, 6. Usa dos 6
        para activar "Hojas Warp", dejando 1, 2, 2, 2, 3, 4. Luego, usa dos 2
        para "Devoción iracunda". Como ya activó dos bendiciones, los demás
        dados se descartan.
      </Text>

      <Text style={styles.subtitle}>
        DEVOCIÓN IRACUNDA {"\n"}(CUALQUIER DOBLE)
      </Text>
      <Text style={styles.desc}>
        Las miniaturas de esta unidad ganan la habilidad No sentir dolor 6+. Si
        ya tienen esta habilidad, suman 1 a sus tiradas.
      </Text>

      <Text style={styles.subtitle}>EXCELENCIA MARCIAL {"\n"}(DOBLE 3+)</Text>
      <Text style={styles.desc}>
        Las armas cuerpo a cuerpo de esta unidad ganan la habilidad [GOLPES
        SOSTENIDOS 1].
      </Text>

      <Text style={styles.subtitle}>
        CARNICERÍA TOTAL {"\n"}(DOBLE 4+ O CUALQUIER TRIPLE)
      </Text>
      <Text style={styles.desc}>
        Cada vez que una miniatura de esta unidad es destruida en combate cuerpo
        a cuerpo y no ha atacado, tira un D6: con un 4+, puede atacar antes de
        ser removida del juego.
      </Text>

      <Text style={styles.maintitle}>
        REGLA DEL DESTACAMENTO: GUERRA ETERNA
      </Text>
      <Text style={styles.desc}>
        Los Devoradores de Mundos combaten con furia perpetua. Cada vez que una
        unidad carga en este turno, suma 1 a la Fuerza y a los Ataques de sus
        armas cuerpo a cuerpo hasta el final de la fase.
      </Text>

      <Text style={styles.maintitle}>ESTRATAGEMAS</Text>

      <Text style={styles.title}>MASACRE SANGRIENTA</Text>
      <Text style={styles.desc}>
        <Text style={styles.subtitle}>
          BERZERKER WARBAND – ESTRATEGIA DE JUGADA ESTRATÉGICA
        </Text>
        {"\n\n"}Aquellos que presencian las masacres de los Devoradores de
        Mundos huyen para evitar convertirse en sus próximas víctimas.
        {"\n\n"}
        <Text style={styles.bold}>CUÁNDO:</Text> Fase de combate.
        {"\n"}
        <Text style={styles.bold}>OBJETIVO:</Text> Una unidad de Devoradores de
        Mundos que haya realizado un movimiento de carga y destruido una o más
        unidades enemigas esta fase.
        {"\n"}
        <Text style={styles.bold}>EFECTO:</Text> En la siguiente fase de mando
        del oponente, cada unidad enemiga a 6" de la unidad objetivo debe
        realizar una prueba de Moral. Si la unidad está por debajo de la mitad
        de su fuerza, resta 1 a esa prueba. Estas unidades no deberán hacer más
        pruebas de Moral en la misma fase.
      </Text>

      <Text style={styles.title}>POR EL TRONO DE CRÁNEOS</Text>
      <Text style={styles.desc}>
        <Text style={styles.subtitle}>
          BERZERKER WARBAND – ESTRATEGIA DE TÁCTICA DE BATALLA
        </Text>
        {"\n\n"}Khorne recompensa a aquellos que se enfrentan a los enemigos más
        fuertes, bendiciendo a los mejores guerreros con su favor.
        {"\n\n"}
        <Text style={styles.bold}>CUÁNDO:</Text> Fase de combate.
        {"\n"}
        <Text style={styles.bold}>OBJETIVO:</Text> Una unidad de Devoradores de
        Mundos que no haya sido seleccionada para combatir esta fase.
        {"\n"}
        <Text style={styles.bold}>EFECTO:</Text> Hasta el final de la fase, cada
        vez que una miniatura de la unidad realice un ataque cuerpo a cuerpo
        contra un Personaje, Monstruo o Vehículo, suma 1 a la tirada para herir.
      </Text>

      <Text style={styles.title}>¡POR EL DIOS DE LA SANGRE!</Text>
      <Text style={styles.desc}>
        <Text style={styles.subtitle}>
          BERZERKER WARBAND – ESTRATEGIA DE TÁCTICA DE BATALLA
        </Text>
        {"\n\n"}Cuando la sangre corre, las bendiciones de Khorne son
        abundantes.
        {"\n\n"}
        <Text style={styles.bold}>CUÁNDO:</Text> Fase de combate, justo después
        de que una unidad de Devoradores de Mundos destruya una unidad enemiga.
        {"\n"}
        <Text style={styles.bold}>OBJETIVO:</Text> La unidad de Devoradores de
        Mundos que destruyó la unidad.
        {"\n"}
        <Text style={styles.bold}>EFECTO:</Text> Realiza una tirada de
        Bendiciones de Khorne. Puedes usar los resultados de esta tirada para
        activar una bendición adicional, que no contará para el límite de
        bendiciones activadas en esa ronda.
      </Text>

      <Text style={styles.title}>A KHORNE NO LE IMPORTA...</Text>
      <Text style={styles.desc}>
        <Text style={styles.subtitle}>
          BERZERKER WARBAND – ESTRATEGIA DE JUGADA ESTRATÉGICA
        </Text>
        {"\n\n"}A Khorne no le importa de dónde fluye la sangre, siempre y
        cuando fluya, y las heridas superficiales no detendrán a los Devoradores
        de Mundos.
        {"\n\n"}
        <Text style={styles.bold}>CUÁNDO:</Text> Fase de combate, justo después
        de que una unidad enemiga seleccione sus objetivos.
        {"\n"}
        <Text style={styles.bold}>OBJETIVO:</Text> Una unidad de Devoradores de
        Mundos seleccionada como objetivo de los ataques de esa unidad enemiga.
        {"\n"}
        <Text style={styles.bold}>EFECTO:</Text> Hasta el final de la fase, cada
        vez que un ataque apunte a tu unidad, resta 1 a la característica de
        Daño de ese ataque.
      </Text>

      <Text style={styles.maintitle}>MEJORAS (ENHANCEMENTS)</Text>

      <Text style={styles.title}>FAVORECIDO DE KHORNE</Text>
      <Text style={styles.desc}>
        Este guerrero cuenta con el favor de Khorne; el Dios de la Sangre parece
        asistirle en su matanza con parte de su poder.
        {"\n\n"}
        <Text style={styles.bold}>REGLA:</Text> Solo para miniaturas de
        Devoradores de Mundos. Cada vez que realices una tirada de Bendiciones
        de Khorne, antes de hacer nada más, puedes usar esta mejora para
        descartar todos los dados y realizar una nueva tirada. Esta tirada no
        cuenta como repetición, por lo que aún puedes usar reglas que permitan
        volver a tirar o manipular dados.
      </Text>

      <Text style={styles.title}>GLAIVE BERZERKER</Text>
      <Text style={styles.desc}>
        El portador de esta arma, infestada por un demonio, entra en un estado
        de frenesí apoplético al acercarse al acero candente.
        {"\n\n"}
        <Text style={styles.bold}>REGLA:</Text> Solo para miniaturas de
        Devoradores de Mundos. Suma 1 a las características de Ataques y Daño de
        las armas cuerpo a cuerpo del portador. Al final de un movimiento de
        carga, tira un D3; suma el resultado a los Ataques y al Daño hasta el
        final del turno.
      </Text>

      <Text style={styles.title}>LUJURIA POR LA BATALLA</Text>
      <Text style={styles.desc}>
        Este asesino veterano es impulsado a participar en cualquier combate,
        llevando su sed de sangre a nuevas alturas.
        {"\n\n"}
        <Text style={styles.bold}>REGLA:</Text> Solo para miniaturas de
        Devoradores de Mundos. Puedes seleccionar la unidad del portador para la
        Estratagema de Intervención Heroica por 0CP, incluso si ya has
        seleccionado otra unidad para esa estratagema en esta fase.
      </Text>

      <Text style={styles.title}>YELMO DE IRA DE LATÓN</Text>
      <Text style={styles.desc}>
        Este yelmo está forjado con latón inquebrantable del propio trono del
        Dios de la Sangre. Cualquier que busque decapitar al portador encontrará
        que sus armas se rompen contra él.
        {"\n\n"}
        <Text style={styles.bold}>REGLA:</Text> Solo para miniaturas de
        Devoradores de Mundos. Cada vez que se le asigne un ataque al portador,
        divide a la mitad la característica de Daño de ese ataque.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maintitle: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#7D0000",
    fontSize: 25,
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#B30000",
    fontSize: 20,
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: "#7D0000",
    fontSize: 18,
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  desc: {
    fontSize: 16,
    backgroundColor: "#FFCCCC",
    color: "#000",
    padding: 5,
    borderRadius: 10,
    marginVertical: 3,
  },
  bold: {
    fontWeight: "bold",
  },
  scroll: {
    flex: 1,
    backgroundColor: "#2C2C2C",
    padding: 10,
  },
});