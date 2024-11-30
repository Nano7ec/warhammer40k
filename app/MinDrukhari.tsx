import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Personaje from "../app/DrukhariPersonajes"; // Importa el componente Personaje

export default function MinDrukhari() {
  // Datos de los personajes
  const personajes = [
    {
      nombre: "Archon",
      imagen: require("../assets/images/ArchonDrukhari.png"),
      habilidades: [
        {
          nombre: "Overlord",
          descripcion:
            "Mientras este modelo esté liderando una unidad, cada vez que un modelo de esa unidad haga un ataque, vuelve a tirar el resultado de Herir de 1. Mientras esa unidad esté Empoderada, puedes volver a tirar el resultado de Herir en lugar de solo el de 1.",
        },
        {
          nombre: "Devious Mastermind",
          descripcion:
            "Una vez por batalla, después de que tu oponente use una Estratagema, si este modelo es tu Señor de la Guerra y está en el campo de batalla, puede usar esta habilidad. Si lo hace, hasta el final de la batalla, aumenta el costo de esa Estratagema para tu oponente en 1 CP.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Blast pistol", '6"', "1", "2+", "8", "-3", "D3"],
          ["Splinter pistol", '12"', "1", "2+", "2", "0", "1"],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Huskblade", "Melee", "5", "2+", "3", "-2", "2"]],
      },
      faccion: "Drukhari",
      invulnerableSave: "2+",
      stats: {
        movimiento: '8"',
        fuerza: "3",
        salvacion: "4+",
        heridas: "4",
        liderazgo: "6+",
        OC: "1",
      },
      equipo: {
        opciones: [
          "El pistón de esquirlas de este modelo puede ser reemplazado por un pistón explosivo.",
        ],
      },
      unidadComposicion: ["1 Archon"],
      descripcion:
        "Los Archons aplican la misma malicia inventiva con la que gobiernan los Kabals fracturados a sus enemigos en el campo de batalla. Liderando muchas incursiones en el espacio real, los Archons desafían arrogantemente a sus enemigos a enfrentarse a su destreza marcial, su arsenal de armas eldritch y la astucia laberíntica que les ha permitido ascender al poder.",
    }, //Archon
    {
      nombre: "Beastmaster",
      imagen: require("../assets/images/BeastMasterDrukhari.png"),
      habilidades: [
        {
          nombre: "Beastmaster",
          descripcion:
            "Mientras esta unidad contiene un modelo de Beastmaster, puedes volver a tirar las tiradas de Carga realizadas por esta unidad, y cada vez que un modelo Bestia en esta unidad haga un ataque, vuelve a tirar el resultado de Impacto de 1.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Splinter pods", '18"', "2", "3+", "2", "0", "1"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Agoniser", "Melee", "3", "3+", "3", "-1", "1"],
          ["Clawed Fiend fists", "Melee", "5", "4+", "5", "-1", "2"],
          ["Khymerae talons", "Melee", "4", "4+", "5", "0", "1"],
          ["Razorwing feathers", "Melee", "6", "4+", "3", "0", "1"],
        ],
      },
      faccion: "Drukhari",
      invulnerableSave: "6+",
      stats: {
        movimiento: '12"',
        fuerza: "4",
        salvacion: "6+",
        heridas: "3",
        liderazgo: "6+",
        OC: "1",
      },
      equipo: {
        opciones: ["Ninguna"],
      },
      unidadComposicion: [
        "1 Beastmaster",
        "1 Clawed Fiends",
        "2 Khymerae",
        "3 Razorwing Flocks",
      ],
      descripcion:
        "Sobre los zócalos zumbantes que escupen fragmentos envenenados, los Beastmasters flotan por encima del frenesí sangriento de sus criaturas esclavas, incitándolas con los crueles latigazos de un agonizador que inflama los nervios. Muchos llevan máscaras chamánicas que aumentan el dominio natural del portador con emisiones sub-vocales y feromonas subyugantes.",
    }, //Beastmaster
    {
      nombre: "Court of the Archon",
      imagen: require("../assets/images/CourtOfTheArchonDrukhari.png"),
      habilidades: [
        {
          nombre: "Lhamaean",
          descripcion:
            "Mientras esta unidad contenga uno o más modelos Lhamaean, las armas equipadas por los modelos en esta unidad tienen la habilidad [LETHAL HITS].",
        },
        {
          nombre: "Medusae",
          descripcion:
            "En tu fase de Disparo, después de que esta unidad haya disparado, si cualquiera de esos ataques realizados con su Eyeburst ha impactado a una unidad de Infantería enemiga, esa unidad de Infantería debe realizar una prueba de Terror de Batalla.",
        },
        {
          nombre: "Sslyth",
          descripcion:
            "Mientras esta unidad contenga uno o más modelos Sslyth, cada vez que un ataque sea dirigido a esta unidad, resta 1 a la tirada para Herir.",
        },
        {
          nombre: "Ur-ghul",
          descripcion:
            "Mientras esta unidad contenga uno o más modelos Ur-ghul, esta unidad tiene la habilidad Fights First.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Eyeburst", '12"', "D6", "N/A", "6", "-2", "1"],
          ["Shardcarbine", '18"', "3", "3+", "2", "0", "1"],
          ["Splinter pistol", '12"', "1", "3+", "2", "0", "1"],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Close combat weapon", "Melee", "2", "3+", "3", "0", "1"],
          ["Shaimeshi blade", "Melee", "4", "3+", "4", "-2", "1"],
          ["Sslyth battle-blade", "Melee", "3", "3+", "5", "-2", "2"],
          ["Ur-ghul talons", "Melee", "6", "3+", "4", "0", "1"],
        ],
      },
      faccion: "Drukhari",
      invulnerableSave: "5+",
      stats: {
        movimiento: '8"',
        fuerza: "3",
        salvacion: "5+",
        heridas: "2",
        liderazgo: "6+",
        OC: "1",
      },
      equipo: {
        opciones: ["Ninguna"],
      },
      unidadComposicion: ["1 Lhamaean", "1 Medusae", "1 Sslyth", "1 Ur-ghul"],
      descripcion:
        "Nada más que la astucia manipuladora de un Archon podría exigir la lealtad de sus diversas Cortes. Reclutados de diversas facciones mercenarias que habitan Commorragh, Drukhari, alienígenas y otras horrores protegen a su señor con todo tipo de armas retorcidas, venenos carnívoros, colmillos afilados como agujas y drenaje empático.",
    }, //Court of the Archon
    {
      nombre: "Cronos",
      imagen: require("../assets/images/CronosDrukhari.png"),
      habilidades: [
        {
          nombre: "Deadly Demise 1",
          descripcion:
            "Cuando este modelo muere, cada unidad a 3” o menos de este modelo sufre 1 mortal wound.",
        },
        {
          nombre: "Feel No Pain 5+",
          descripcion:
            "Cada vez que este modelo reciba una herida o mortal wound, puedes realizar una tirada de salvación con 5+ para evitar la herida.",
        },
        {
          nombre: "Pain Parasite (Aura)",
          descripcion:
            "Cada vez que se elimine un token de Dolor de tu reserva de tokens para Empoderar una unidad, si esa unidad Empoderada está dentro de 9” de esta unidad, tira un D6: con un 4+ ganas 1 token de Dolor.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Spirit syphon", '12"', "D6", "N/A", "5", "-1", "1"],
          ["Spirit vortex", '18"', "D6", "3+", "5", "-1", "1"],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Spirit-leech tentacles", "Melee", "4", "4+", "5", "0", "1"]],
      },
      faccion: "Drukhari",
      invulnerableSave: "6+",
      stats: {
        movimiento: '7"',
        fuerza: "7",
        salvacion: "3+",
        heridas: "7",
        liderazgo: "6+",
        OC: "2",
      },
      equipo: {
        opciones: [
          "Cualquier número de modelos puede ser equipado con 1 Spirit vortex.",
        ],
      },
      unidadComposicion: ["1-2 Cronos"],
      descripcion:
        "Como otras Máquinas del Dolor, el Cronos es una amalgama espantosa de carne alimentada por esteroides e implementos biomecánicos protegidos por una coraza bruñida. Los Haemonculi crean el Cronos para que actúe como un parásito. Sus sifones esotéricos chupan la esencia vital de sus víctimas, dejándolas como cascarones antes de proyectar la vitalidad robada a otros Drukhari.",
    }, //Cronos
    {
      nombre: "Drazhar",
      imagen: require("../assets/images/DrazharDrukhari.png"),
      habilidades: [
        {
          nombre: "Leader",
          descripcion:
            "Este modelo puede unirse a unidades de Incubi, liderándolas en combate.",
        },
        {
          nombre: "Master of Blades",
          descripcion:
            "Mientras este modelo esté liderando una unidad, cada vez que un modelo de esa unidad haga un ataque cuerpo a cuerpo, se suma 1 al resultado de la tirada para Herir.",
        },
        {
          nombre: "Vicious Execution",
          descripcion:
            "Una vez por batalla, cuando la unidad de este modelo sea seleccionada para luchar, puede usar esta habilidad. Si lo hace, hasta el final de la fase, las armas cuerpo a cuerpo de este modelo tienen la habilidad [PRECISION] y cada vez que un modelo enemigo Character sea destruido por este modelo, ganas D3 tokens de Dolor. Si el modelo enemigo destruido era el Señor de la Guerra, ganas 3 tokens de Dolor en lugar de D3.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          [
            "The Executioner’s demiklaives – single blade",
            "Melee",
            "5",
            "2+",
            "6",
            "-2",
            "3",
          ],
          [
            "The Executioner’s demiklaives – dual blades",
            "Melee",
            "7",
            "2+",
            "5",
            "-2",
            "2",
          ],
        ],
      },
      faccion: "Drukhari",
      invulnerableSave: "4+",
      stats: {
        movimiento: '7"',
        fuerza: "3",
        salvacion: "2+",
        heridas: "5",
        liderazgo: "6+",
        OC: "1",
      },
      equipo: {
        opciones: ["Ninguna"],
      },
      unidadComposicion: ["1 Drazhar – Epic Hero"],
      descripcion:
        "Drazhar es el siniestro y silencioso Ejecutor de los Incubi. Un maestro de la espada implacable, sus rápidos ataques destruyen a las masas de guerreros menores. Aquellos elegidos como presa de Drazhar tienen solo segundos para vivir.",
    }, //Drazhar
    {
      nombre: "Grotesques",
      imagen: require("../assets/images/GrotesquesDrukhari.png"),
      habilidades: [
        {
          nombre: "Mindless Killing Machines",
          descripcion:
            "Cada vez que un modelo de esta unidad sea destruido por un ataque cuerpo a cuerpo, si ese modelo no ha luchado en esa fase, tira 1D6. En una tirada de 4+, no lo eliminas del juego; ese modelo destruido puede luchar después de que la unidad del modelo atacante haya terminado sus ataques, y luego se elimina del juego.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Liquifier gun", '12"', "D6", "N/A", "4", "-1", "1"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Monstrous weapons", "Melee", "4", "3+", "5", "-1", "2"]],
      },
      faccion: "Drukhari",
      invulnerableSave: "6+",
      stats: {
        movimiento: '7"',
        fuerza: "5",
        salvacion: "6+",
        heridas: "4",
        liderazgo: "6+",
        OC: "1",
      },
      equipo: {
        opciones: [
          "Cualquier número de modelos puede estar equipado con una pistola liquificadora.",
        ],
      },
      unidadComposicion: ["3-6 Grotesques"],
      descripcion:
        "Estos monstruos modificados están llenos de productos químicos dolorosos, elixires de crecimiento y macroesteroides. Con músculos hinchados, desmembran a los enemigos de su maestro con sus enormes hachas y garras injertadas, bañadas en toxinas. Son obedientes de manera irreflexiva e insensibles al dolor, persiguiendo a sus presas huidas por orden de su creador.",
    }, //Grotesques
    {
      nombre: "Haemonculus",
      imagen: require("../assets/images/HaemonculusDrukhari.png"),
      habilidades: [
        {
          nombre: "Master of Pain",
          descripcion:
            "Mientras este modelo esté liderando una unidad, los modelos en esa unidad tienen la habilidad Feel No Pain 4+.",
        },
        {
          nombre: "Fear Incarnate",
          descripcion:
            'Mientras una unidad enemiga esté a 6" de este modelo, cada vez que se haga una prueba de Battle-shock o Liderazgo para esa unidad enemiga, resta 1 a esa prueba.',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Stinger pistol", '12"', "1", "2+", "2", "-1", "D3"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          [
            "Haemonculus tools and scissorhands",
            "Melee",
            "5",
            "2+",
            "3",
            "-1",
            "D3",
          ],
        ],
      },
      faccion: "Drukhari",
      invulnerableSave: "6+",
      stats: {
        movimiento: '7"',
        fuerza: "4",
        salvacion: "6+",
        heridas: "5",
        liderazgo: "6+",
        OC: "1",
      },
      equipo: {
        opciones: ["Ninguna"],
      },
      unidadComposicion: ["1 Haemonculus"],
      descripcion:
        "Portadores de una variedad de horribles implementos extraídos de sus propios calabozos y laboratorios personales, los Haemonculi se desplazan como depredadores siniestros en el campo de batalla. Dirigen sus Coven de monstruosidades retorcidas y adeptos del dolor, mientras buscan con ansia nuevos sujetos para sus espantosas experimentaciones con carne.",
    }, //Haemonculus
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {personajes.map((personaje, index) => (
        <Personaje key={index} {...personaje} />
      ))}
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    backgroundColor: "#1b1b1b",
  },
});
