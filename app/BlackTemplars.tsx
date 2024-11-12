import * as React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function BlackTemplars()  {
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.maintitle}>REGLA DEL EJÉRCITO</Text>
      <Text style={styles.italicdesc}>
        Los Templarios Negros son los Capítulos de Marines Espaciales más
        fervientes de todos. Para ellos, el Emperador es una deidad literal y no
        hay juramento que no hagan, promesa que no hagan ni acto sangriento de
        adoración en el campo de batalla que no realicen en su nombre.
      </Text>
      <Text style={styles.desc}>
        Si tu facción de ejército es Adeptus Astartes, puedes usar esta regla
        del Destacamento de Cruzados Justos.
      </Text>
      <Text style={styles.subtitle}>RESTRICCIONES</Text>
      <Text style={styles.desc}>
        ■ Tu ejército no puede incluir ningún modelo Psíquico de los Adeptus
        Astartes, ni ninguno de los siguientes modelos que no tengan la palabra
        clave Templarios Negros: Gladiador Lancero; Gladiador Segador; Gladiador
        Valiente; Impulsor; Repulsor; Repulsor Verdugo.
        {"\n"}■ Tu ejército puede incluir unidades de los Templarios Negros,
        pero no puede incluir ninguna unidad de los Adeptus Astartes extraída de
        ningún otro Capítulo.
      </Text>
      <Text style={styles.title}>VOTOS TEMPLARIOS</Text>
      <Text style={styles.italicdesc}>
        En vísperas de la batalla, los guerreros de una cruzada de los
        Templarios Negros se reúnen para que sus capellanes los guíen en oración
        y contemplación. En su justo celo, unidos en su odio al enemigo, juran
        un poderoso juramento que mantendrán en la batalla que se avecina.
      </Text>
      <Text style={styles.desc}>
        Al comienzo de la primera ronda de batalla, selecciona uno de los cuatro
        votos templarios que aparecen a continuación para que estén activos para
        las unidades de Adeptus Astartes de tu ejército hasta el final de la
        batalla.
        {"\n"}
        {"\n"}■ No permitas que lo impuro viva: las armas cuerpo a cuerpo
        equipadas por las miniaturas de esta unidad tienen la habilidad [GOLPE
        LETAL].
        {"\n"}
        {"\n"}■ Defender el honor del Emperador: las miniaturas de esta unidad
        tienen la habilidad No sentir dolor 6+ y un atributo de Liderazgo de 5+.
        {"\n"}
        {"\n"}■ Aborrecer a la bruja, destruir a la bruja: las miniaturas de
        esta unidad tienen una salvación invulnerable de 4+ contra ataques
        psíquicos y las armas cuerpo a cuerpo equipadas por las miniaturas de
        esta unidad tienen la habilidad [ANTIPSÍQUICO 4+].
        {"\n"}
        {"\n"}■ Acepta cualquier desafío, sin importar las probabilidades: las
        armas cuerpo a cuerpo equipadas por las miniaturas de esta unidad tienen
        la habilidad [GOLPE SOSTENTADO 1].
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
