import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Personaje from "../app/GenestealerCultsPersonajes"; // Importa el componente Personaje

export default function MinGenestealerCults() {
  // Datos de los personajes
  const personajes = [
    {
      nombre: "Aberrants",
      imagen: require("../assets/images/AberrantsGenestealer.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            "La unidad puede ser desplegada fuera del campo de batalla y entrar en el combate en un turno posterior.",
        },
        {
          nombre: "Feel No Pain 4+",
          descripcion:
            "La unidad ignora 4+ los efectos de daño que recibe, al hacer una tirada de salvación.",
        },
        {
          nombre: "Cult Ambush",
          descripcion:
            "La unidad puede ser desplegada secretamente en el campo de batalla, revelando su posición más tarde.",
        },
        {
          nombre: "Hulking Bodyguards",
          descripcion:
            "Mientras una unidad de Personaje lidera a los Aberrants, si un ataque dirigido a esta unidad tiene una Fuerza mayor que la Resistencia de los Aberrants, el atacante debe restar 1 al resultado de la tirada para Herir.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Heavy improvised weapon", "Melee", "5", "3+", "6", "0", "2"],
          ["Heavy power weapon", "Melee", "3", "3+", "8", "-2", "3"],
          ["Hypermorph tail", "Melee", "1", "3+", "5", "0", "1"],
        ],
      },
      faccion: "Genestealer Cults",
      invulnerableSave: "N/A", // No hay una salvación invulnerable específica para los Aberrants
      stats: {
        movimiento: '6"',
        fuerza: "6",
        salvacion: "5+",
        heridas: "3",
        liderazgo: "7+",
        OC: "1",
      },
      equipo: {
        opciones: [
          "El arma de poder pesada de Hypermorph puede ser reemplazada por un arma improvisada pesada.",
        ],
      },
      unidadComposicion: ["1 Aberrant Hypermorph", "4-9 Aberrants"],
      descripcion:
        "Los Aberrants son grandes mutantes genéticamente alterados, poseedores de una fuerza inmensa y resistencia mejorada, que sirven como rompe-líneas o guardianes de los líderes de los cultos. Su lealtad simple y su brutalidad los convierten en valiosos soldados de choque, arrojados a la batalla sin remordimientos y dispuestos a ser sacrificados para la causa.",
    }, //Deep Strike
    {
      nombre: "Abominant",
      imagen: require("../assets/images/AbominantGenestealer.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            "La unidad puede ser desplegada fuera del campo de batalla y entrar en el combate en un turno posterior.",
        },
        {
          nombre: "Feel No Pain 4+",
          descripcion:
            "La unidad ignora 4+ los efectos de daño que recibe, al hacer una tirada de salvación.",
        },
        {
          nombre: "The Chosen One",
          descripcion:
            "Mientras este modelo esté liderando una unidad, las armas cuerpo a cuerpo de los modelos en esa unidad tienen la habilidad [SUSTAINED HITS 1].",
        },
        {
          nombre: "Regenerating Gene-mass",
          descripcion:
            "La primera vez que este modelo sea destruido, al final de la fase realiza una tirada de un D6. Si el resultado es 2+ se coloca nuevamente en el campo de batalla con todas sus heridas restauradas, tan cerca como sea posible del lugar donde fue destruido, sin estar dentro del Rango de Combate de unidades enemigas.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Power sledgehammer", "Melee", "3", "3+", "12", "-2", "D6+1"]],
      },
      faccion: "Genestealer Cults",
      invulnerableSave: "N/A", // No hay una salvación invulnerable específica para el Abominant
      stats: {
        movimiento: '6"',
        fuerza: "6",
        salvacion: "5+",
        heridas: "5",
        liderazgo: "7+",
        OC: "1",
      },
      equipo: {
        opciones: [],
      },
      unidadComposicion: ["1 Abominant"],
      descripcion:
        "Nacido del aguijón de un familiar Mindwyrm, el Abominant es un Aberrant contaminado con la propia masa genética del Patriarca. Esto transforma a la bestia en una montaña de quitina y músculo mutados, capaz de regenerarse tan rápido como sus enemigos pueden dañarlo, y cuya fuerza bruta es un activo letal en el campo de batalla.",
    }, //Abominant
    {
      nombre: "Achilles Ridgerunners",
      imagen: require("../assets/images/AchillesRidgerunnersGenestealer.png"),
      habilidades: [
        {
          nombre: "Deadly Demise 1",
          descripcion:
            "Cuando este modelo sea destruido, realiza una tirada de un D6. En un 1, causa una herida mortal a una unidad amiga cercana.",
        },
        {
          nombre: 'Scouts 9"',
          descripcion:
            'Este modelo puede mover hasta 9" antes de la fase de Movimiento en la fase de Iniciativa.',
        },
        {
          nombre: "Crossfire",
          descripcion:
            "Cada vez que esta unidad haya disparado, selecciona una unidad enemiga que haya sido alcanzada por uno o más ataques de esta unidad en esa fase. Hasta el final de la fase, cada vez que una unidad amiga de Genestealer Cults ataque a esa unidad enemiga, mejora la característica de Penetración de Armadura de ese ataque en 1. La misma unidad enemiga solo puede verse afectada por esta habilidad una vez por fase.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Achilles missile launcher", '36"', "3", "4+", "9", "-2", "3"],
          ["Heavy mining laser [BLAST]", '36"', "D3", "4+", "12", "-3", "D6+1"],
          [
            "Heavy mortar [BLAST, INDIRECT FIRE]",
            '48"',
            "D6+3",
            "4+",
            "6",
            "0",
            "1",
          ],
          [
            "Twin heavy stubber [TWIN-LINKED, RAPID FIRE 3]",
            '36"',
            "3",
            "4+",
            "4",
            "0",
            "1",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Ridgerunner wheels", "Melee", "3", "4+", "5", "0", "1"]],
      },
      faccion: "Genestealer Cults",
      invulnerableSave: "N/A", // No hay una salvación invulnerable específica
      stats: {
        movimiento: '12"',
        fuerza: "7",
        salvacion: "3+",
        heridas: "8",
        liderazgo: "7+",
        OC: "3",
      },
      equipo: {
        opciones: [
          "Cualquier número de modelos puede reemplazar su heavy mining laser con 1 Achilles missile launcher o 1 heavy mortar.",
          "Cualquier número de modelos puede reemplazar su flare launcher con 1 spotter o 1 survey augur.",
        ],
      },
      unidadComposicion: ["1-2 Achilles Ridgerunners"],
      descripcion:
        "Estos ligeros pero resistentes vehículos de exploración sirven como los ojos y oídos de la rebelión, así como coordinando emboscadas blindadas letales que eliminan a enemigos aislados o cortan líneas de comunicación y suministro. Pueden montar una versátil gama de armas pesadas, lo que les permite cumplir con las necesidades del Patriarca.",
    }, //Achilles Ridgerunners
    {
      nombre: "Acolyte Hybrids",
      imagen: require("../assets/images/AcolyteHybridsGenestealer.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            'Este modelo puede ser desplegado en el campo de batalla después de la fase de Movimiento, dentro de un área del campo de batalla que esté a más de 9" de cualquier unidad enemiga.',
        },
        {
          nombre: "Cult Ambush",
          descripcion:
            "Al comienzo de cada fase de Movimiento, puedes mover una unidad de Culto Genestealer de este tipo como si fuera una unidad con la habilidad de movimiento oculto.",
        },
        {
          nombre: "Vile Insurrectionists",
          descripcion:
            "Cada vez que un modelo de esta unidad haga un ataque, vuelve a tirar cualquier tirada de Impacto de 1. Si el objetivo de ese ataque es una unidad enemiga dentro del rango de un marcador de objetivo, también vuelve a tirar cualquier tirada de Herir de 1.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Autopistol [PISTOL]", '12"', "1", "4+", "3", "0", "1"],
          [
            "Demolition charges [ASSAULT, BLAST, HAZARDOUS, ONE SHOT]",
            '6"',
            "D6+3",
            "5+",
            "12",
            "-2",
            "2",
          ],
          [
            "Hand flamer [IGNORES COVER, PISTOL, TORRENT]",
            '12"',
            "D6",
            "N/A",
            "3",
            "0",
            "1",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Cult claws and knife", "Melee", "3", "3+", "4", "-1", "1"],
          ["Heavy mining tool", "Melee", "2", "3+", "10", "-2", "3"],
          ["Leader’s cult weapons", "Melee", "5", "3+", "5", "-2", "1"],
        ],
      },
      faccion: "Genestealer Cults",
      invulnerableSave: "N/A", // No se menciona una salvación invulnerable
      stats: {
        movimiento: '6"',
        fuerza: "4",
        salvacion: "5+",
        heridas: "1",
        liderazgo: "7+",
        OC: "2",
      },
      equipo: {
        opciones: [
          "Cualquier número de modelos puede reemplazar su autopistol con 1 hand flamer.",
          "Un Acolyte Hybrid puede reemplazar su autopistol con 1 cult icon.",
          "Por cada 5 modelos en esta unidad, hasta 2 Acolyte Hybrids pueden reemplazar su autopistol y cult claws and knife con: 1 demolition charges y 1 cult claws and knife, o 1 heavy mining tool.",
          "El cult claws and knife del Acolyte Leader puede ser reemplazado por 1 Leader’s cult weapons.",
        ],
      },
      unidadComposicion: ["1 Acolyte Leader", "4-9 Acolyte Hybrids"],
      descripcion:
        "Los Acolyte Hybrids son los descendientes de los primeros anfitriones infectados por la Maldición Genestealer, y son monstruosos tanto en cuerpo como en mente. Poseen una fuerza colosal y la habilidad para manipular mecanismos complejos, llevando herramientas industriales reutilizadas y letales armas de combate cercano a la batalla.",
    }, //Acolyte Hybrids
    {
      nombre: "Acolyte Iconward",
      imagen: require("../assets/images/AcolyteIconwardGenestealer.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            'Este modelo puede ser desplegado en el campo de batalla después de la fase de Movimiento, dentro de un área del campo de batalla que esté a más de 9" de cualquier unidad enemiga.',
        },
        {
          nombre: "Leader",
          descripcion:
            "Este modelo puede liderar unidades aliadas, otorgándoles habilidades y ventajas propias.",
        },
        {
          nombre: "Nexus of Devotion",
          descripcion:
            "Mientras este modelo esté liderando una unidad, los modelos de esa unidad tienen la habilidad Feel No Pain 5+.",
        },
        {
          nombre: "Summon the Cult",
          descripcion:
            'Una vez por batalla, cuando tengas que remover un marcador de Culto Ambush porque tu oponente se ha acercado demasiado, puedes usar esta habilidad. En vez de remover el marcador, puedes colocarlo en cualquier lugar del campo de batalla que esté dentro de 12" de un modelo de tu ejército con esta habilidad y más de 9" de distancia de cualquier unidad enemiga. Si esto no es posible, la habilidad no se considera usada y el marcador se remueve normalmente.',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Autopistol [PISTOL]", '12"', "1", "3+", "3", "0", "1"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Cult claws", "Melee", "4", "3+", "4", "-1", "1"]],
      },
      faccion: "Genestealer Cults",
      invulnerableSave: "N/A", // No se menciona una salvación invulnerable
      stats: {
        movimiento: '6"',
        fuerza: "4",
        salvacion: "5+",
        heridas: "3",
        liderazgo: "6+",
        OC: "1",
      },
      equipo: {
        opciones: ["Ninguna opción de equipo adicional."],
      },
      unidadComposicion: ["1 Acolyte Iconward"],
      descripcion:
        "Es un gran honor llevar el sigilo del culto al descubierto para que todos lo vean. Estos estandartes están adornados con artefactos pseudo-sagrados, algunos provenientes de las secreciones o del propio cuerpo del Patriarca. El efecto de la presencia del Acolyte Iconward sobre los guerreros cercanos del culto es electrificante, impulsándolos a nuevas alturas de violencia.",
    }, //Acolyte Iconward
    {
      nombre: "Atalan Jackals",
      imagen: require("../assets/images/AtalanJackalsGenestealer.png"),
      habilidades: [
        {
          nombre: 'Scouts 9"',
          descripcion:
            'Esta unidad puede mover hasta 9" más allá de su posición inicial antes de la primera fase de Movimiento, siempre y cuando no se encuentren a menos de 9" de ninguna unidad enemiga.',
        },
        {
          nombre: "Cult Ambush",
          descripcion:
            "Permite colocar la unidad en el campo de batalla a partir de una reserva mediante el uso de marcadores de Culto Ambush. La unidad puede ser desplegada cuando el marcador es activado.",
        },
        {
          nombre: "Outrider Gangs",
          descripcion:
            'Cada vez que uses la habilidad Cult Ambush para desplegar esta unidad en el campo de batalla, todos sus modelos deben ser colocados dentro de un área de 6" del borde del campo de batalla y al menos uno de sus modelos debe estar tocando uno de tus marcadores de Culto Ambush. Ese marcador se elimina de la mesa después del despliegue.',
        },
        {
          nombre: "Demolition Run",
          descripcion:
            'Cada vez que esta unidad termine un movimiento normal, puedes seleccionar una unidad enemiga dentro de 6" y visible para esta unidad. Lanza un dado por cada modelo en esta unidad: por cada 4+, esa unidad enemiga sufre una herida mortal.',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          [
            "Atalan incinerator [IGNORES COVER, TORRENT]",
            '12"',
            "D6",
            "N/A",
            "5",
            "-1",
            "1",
          ],
          ["Atalan small arms [PISTOL]", '12"', "2", "4+", "4", "0", "1"],
          ["Grenade launcher – frag [BLAST]", '24"', "D3", "4+", "4", "0", "1"],
          ["Grenade launcher – krak", '24"', "1", "4+", "9", "-2", "D3"],
          ["Heavy stubber [RAPID FIRE 3]", '36"', "3", "4+", "4", "0", "1"],
          ["Mining laser", '24"', "1", "4+", "12", "-3", "D6+1"],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Atalan power weapon", "Melee", "2", "4+", "4", "-2", "1"],
          ["Close combat weapon", "Melee", "2", "4+", "3", "0", "1"],
        ],
      },
      faccion: "Genestealer Cults",
      invulnerableSave: "N/A", // No se menciona una salvación invulnerable
      stats: {
        movimiento: '12"',
        fuerza: "4",
        salvacion: "5+",
        heridas: "2",
        liderazgo: "7+",
        OC: "1",
      },
      equipo: {
        opciones: [
          "Cualquier número de Atalan Jackals puede reemplazar su close combat weapon con 1 Atalan power weapon.",
          "Por cada 4 Atalan Jackals en esta unidad, 1 Atalan Jackal puede reemplazar su Atalan small arms con 1 grenade launcher.",
          "Cualquier número de Atalan Wolfquads puede reemplazar su heavy stubber con 1 Atalan incinerator o 1 mining laser.",
        ],
      },
      unidadComposicion: [
        "4-8 Atalan Jackals",
        "1-2 Atalan Wolfquads (solo si la unidad tiene 8 Atalan Jackals)",
      ],
      descripcion:
        "Los Atalan Jackals comparten un vínculo mental que les permite coordinarse en manadas de caza y desplazarse en formaciones ajustadas a alta velocidad sin riesgo de accidentes. Hostigan al enemigo con ataques rápidos, mientras sus Wolfquads desatan un fuego pesado para complementar las armas, garfios y cargas mineras de sus compañeros de manada.",
    }, //Atalan Jackals
    {
      nombre: "Biophagus",
      imagen: require("../assets/images/BiophagusGenestealer.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            "Este modelo puede ser colocado en reserva y desplegado en cualquier punto del campo de batalla durante la fase de movimiento de tu turno.",
        },
        {
          nombre: "Leader",
          descripcion:
            "Este modelo puede liderar una unidad de Genestealer Cults y proporcionar sus habilidades a la unidad que lidera.",
        },
        {
          nombre: "Twisted Science",
          descripcion:
            "Mientras este modelo esté liderando una unidad, las armas cuerpo a cuerpo equipadas por los modelos en esa unidad tienen la habilidad [LETHAL HITS].",
        },
        {
          nombre: "Biological Warfare",
          descripcion:
            "Una vez por batalla, cuando la unidad de este modelo sea seleccionada para luchar, puedes usar esta habilidad. Si lo haces, hasta el final de la fase, mejora las características de Ataques y Daño del *injector goad* en 3.",
        },
        {
          nombre: "Alchemicus Familiar",
          descripcion:
            "Una vez por batalla, cuando la unidad del portador sea seleccionada para luchar, el portador puede usar su alchemicus familiar. Si lo hace, hasta el final de la fase, las armas cuerpo a cuerpo equipadas por los modelos en esa unidad tienen la habilidad [ANTI-INFANTRY 2+]. Coloca un token de Alchemicus Familiar junto al portador, eliminándolo una vez que esta habilidad haya sido usada.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Autopistol [PISTOL]", '12"', "1", "3+", "3", "0", "1"],
          [
            "Chemical vials [ANTI-INFANTRY 2+]",
            '6"',
            "1",
            "3+",
            "1",
            "-1",
            "2",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          [
            "Injector goad [ANTI-INFANTRY 2+]",
            "Melee",
            "1",
            "3+",
            "2",
            "0",
            "D3",
          ],
        ],
      },
      faccion: "Genestealer Cults",
      invulnerableSave: "N/A", // No se menciona una salvación invulnerable
      stats: {
        movimiento: '6"',
        fuerza: "3",
        salvacion: "5+",
        heridas: "3",
        liderazgo: "7+",
        OC: "1",
      },
      equipo: {
        opciones: [
          "Este modelo puede estar equipado con 1 alchemicus familiar.",
        ],
      },
      unidadComposicion: ["1 Biophagus"],
      descripcion:
        "El Biophagus es un científico-cirujano cuyo *injector goad* puede ser utilizado para mejorar la fuerza profana de los Aberrants y otros cultistas favorecidos, o para dosificar a los enemigos con un cóctel mutagénico que los disuelve rápidamente desde dentro. Junto con los frascos de ácido biológico que lanza, este arsenal convierte al Biophagus en un mortal agente de la guerra biológica.",
    }, //Biophagus
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
    backgroundColor: "#2c3e50",
  },
});
