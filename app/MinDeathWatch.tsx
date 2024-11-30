import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Personaje from "../app/DeathWatchPersonajes"; // Importa el componente Personaje

export default function MinDeathWatch() {
  // Datos de los personajes
  const personajes = [
    {
      nombre: "Watch Master",
      imagen: require("../assets/images/WatchMasterDeathWatch.png"),
      habilidades: [
        {
          nombre: "Strategic Knowledge",
          descripcion:
            "Mientras este modelo esté liderando una unidad, esa unidad es elegible para disparar y declarar un asalto en un turno en el que haya avanzado o retrocedido.",
        },
        {
          nombre: "Watch Master",
          descripcion:
            "Una vez por batalla, después de que tu oponente use una Estratagema, si este modelo es tu Señor de la Guerra y está en el campo de batalla, puede usar esta habilidad. Si lo hace, hasta el final de la batalla, aumenta el costo de esa Estratagema para tu oponente en 1 CP.",
        },
      ],
      armasDistancia: {
        headers: ["Arma", "Alcance", "A", "BS", "F", "AP", "DAÑO"],
        rows: [["Vigil Spear", '24"', "2", "2+", "4", "0", "2"]],
      },
      armasCuerpo: {
        headers: ["Arma", "Alcance", "A", "WS", "F", "AP", "DAÑO"],
        rows: [
          [
            "Vigil Spear (Lanza)",
            "Cuerpo a Cuerpo",
            "6",
            "2+",
            "6",
            "-2",
            "D3",
          ],
        ],
      },
      opcionesLiderazgo: ["Deathwatch Veterans", "Proteus Kill Team"],
    }, //Watch Master
    {
      nombre: "Watch Captain Artemis",
      imagen: require("../assets/images/WatchCaptainArtemisDeathWatch.png"),
      habilidades: [
        {
          nombre: "Feel No Pain",
          descripcion: "Este modelo tiene una salvación invulnerable de 6+.",
        },
        { nombre: "Facción", descripcion: "Adeptus Astartes, Deathwatch" },
        {
          nombre: "Tactical Instinct",
          descripcion:
            "Mientras este modelo esté liderando una unidad, puedes usar un Estratagem en esa unidad incluso si ya se usó en otra unidad de tu ejército este turno.",
        },
        {
          nombre: "Unstoppable Champion",
          descripcion:
            "La primera vez que este modelo sea destruido, tira un D6 al final de la fase. Con un 2+, vuelve al campo de batalla con 1 herida restante.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          [
            "Hellfire Extremis [ANTI-INFANTRY 4+, DEVASTATING WOUNDS, IGNORES COVER, TORRENT]",
            '12"',
            "D6",
            "N/A",
            "4",
            "-1",
            "1",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Master-crafted power weapon", "MELEE", "6", "2+", "5", "-2", "2"],
        ],
      },
    }, //Watch Captain
    {
      nombre: "Kill Team Cassius",
      imagen: require("../assets/images/KillTeamCassiusDeathWatch.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            "Este modelo puede ser desplegado directamente en el campo de batalla durante el turno 2 o en turnos posteriores.",
        },
        { nombre: "Facción", descripcion: "Adeptus Astartes, Deathwatch" },
        {
          nombre: "Catechism of Death",
          descripcion:
            "Mientras esta unidad contiene al Capellán Cassius, las armas cuerpo a cuerpo de los modelos en esta unidad tienen la habilidad [DEVASTATING WOUNDS].",
        },
        {
          nombre: "Unflinching",
          descripcion:
            "Cada vez que esta unidad realice una prueba de Battle-shock o de Liderazgo, puede repetir esa prueba.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Bolt pistol", '12"', "1", "3+", "4", "0", "1"],
          ["Boltgun", '24"', "2", "3+", "4", "0", "1"],
          ["Deathwatch twin boltgun", '24"', "4", "3+", "4", "0", "1"],
          [
            "Frag cannon [BLAST, HEAVY, RAPID FIRE D3]",
            '18"',
            "D3",
            "4+",
            "7",
            "-1",
            "2",
          ],
          [
            "Heavy flamer [IGNORES COVER, TORRENT]",
            '12"',
            "D6",
            "N/A",
            "2",
            "0",
            "1",
          ],
          [
            "Long Vigil ranged weapon [ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1]",
            '24"',
            "1",
            "4+",
            "4",
            "0",
            "1",
          ],
          ["Psychic Cleanse [PSYCHIC]", '24"', "D6", "3+", "5", "-1", "D3"],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Artificer crozius", "MELEE", "5", "2+", "6", "-1", "2"],
          ["Close combat weapon", "MELEE", "3", "3+", "5", "-2", "1"],
          ["Force weapon [PSYCHIC]", "MELEE", "5", "2+", "5", "-3", "D3"],
          ["Long Vigil melee weapon", "MELEE", "4", "3+", "4", "-1", "1"],
          ["Power fist", "MELEE", "3", "3+", "8", "-2", "2"],
          [
            "Twin lightning claws [TWIN-LINKED]",
            "MELEE",
            "4",
            "3+",
            "5",
            "-2",
            "1",
          ],
        ],
      },
    }, //Kill Team Cassius
    {
      nombre: "Deathwatch Veterans",
      imagen: require("../assets/images/DeathWatchVeteransDeathWatch.png"),
      habilidades: [
        { nombre: "Facción", descripcion: "Adeptus Astartes, Deathwatch" },
        {
          nombre: "Death to the Alien",
          descripcion:
            "Cada vez que un modelo en esta unidad realice un ataque, vuelve a tirar un rollo de Impacto de 1. Si el objetivo de ese ataque no tiene las palabras clave Imperium o Chaos, puedes volver a tirar el rollo de Impacto.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Boltgun", '24"', "2", "3+", "4", "0", "1"],
          [
            "Frag cannon [BLAST, HEAVY, RAPID FIRE D3]",
            '18"',
            "D3",
            "4+",
            "7",
            "-1",
            "2",
          ],
          [
            "Infernus heavy bolter – heavy bolter [HEAVY, SUSTAINED HITS 1]",
            '36"',
            "3",
            "4+",
            "5",
            "-1",
            "2",
          ],
          [
            "Infernus heavy bolter – heavy flamer [IGNORES COVER, TORRENT]",
            '12"',
            "D6",
            "N/A",
            "5",
            "-1",
            "1",
          ],
          [
            "Long Vigil ranged weapon [ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1]",
            '24"',
            "1",
            "4+",
            "4",
            "0",
            "1",
          ],
          [
            "Missile launcher – frag [BLAST, HEAVY]",
            '48"',
            "D6",
            "4+",
            "4",
            "0",
            "1",
          ],
          [
            "Missile launcher – krak [HEAVY]",
            '48"',
            "1",
            "4+",
            "9",
            "-2",
            "D6",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Close combat weapon", "MELEE", "3", "3+", "4", "0", "1"],
          [
            "Deathwatch thunder hammer [DEVASTATING WOUNDS]",
            "MELEE",
            "3",
            "4+",
            "10",
            "-2",
            "3",
          ],
          ["Long Vigil melee weapon", "MELEE", "3", "3+", "5", "-2", "1"],
          [
            "Xenophase blade [DEVASTATING WOUNDS]",
            "MELEE",
            "4",
            "3+",
            "5",
            "-2",
            "1",
          ],
        ],
      },
      equipo: [
        "Cualquier número de modelos puede reemplazar su boltgun y Long Vigil melee weapon con:",
        "1 Long Vigil ranged weapon y 1 close combat weapon",
        "1 Astartes shield, 1 boltgun y 1 close combat weapon",
        "1 Astartes shield y 1 Long Vigil melee weapon",
        "Por cada 5 modelos en esta unidad, hasta 2 modelos pueden reemplazar su boltgun y Long Vigil melee weapon con 1 Deathwatch thunder hammer",
        "Por cada 5 modelos en esta unidad, hasta 2 modelos pueden reemplazar su boltgun y Long Vigil melee weapon con uno de los siguientes:",
        "1 frag cannon y 1 close combat weapon",
        "1 infernus heavy bolter y 1 close combat weapon",
        "1 missile launcher y 1 close combat weapon",
        "El Long Vigil melee weapon del Watch Sergeant puede ser reemplazado con 1 xenophase blade",
        "El boltgun del Watch Sergeant puede ser reemplazado con 1 Long Vigil ranged weapon",
      ],
    }, //Deathwatch Veterans
    {
      nombre: "Deathwatch Terminator Squad",
      imagen: require("../assets/images/DeathwatchTerminatorSquadDeathWatch.png"),
      habilidades: [
        { nombre: "Facción", descripcion: "Adeptus Astartes, Deathwatch" },
        {
          nombre: "Deep Strike",
          descripcion:
            "Este modelo puede ser colocado en cualquier parte del campo de batalla que no esté en la zona de despliegue enemiga al inicio del juego.",
        },
        {
          nombre: "Terminatus Assault",
          descripcion:
            "Cada vez que esta unidad termine un movimiento de carga, cada unidad enemiga dentro del Rango de Compromiso de esta unidad debe hacer una prueba de Impacto de Batalla.",
        },
        {
          nombre: "Teleport Homer",
          descripcion:
            'Al inicio de la batalla, puedes colocar un marcador de Teleport Homer en cualquier parte del campo de batalla. Una vez por batalla, puedes usar la Estratagema de Ingreso Rápido para colocar esta unidad dentro de 3" del marcador.',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          [
            "Assault cannon [DEVASTATING WOUNDS]",
            '24"',
            "6",
            "3+",
            "6",
            "0",
            "1",
          ],
          [
            "Cyclone missile launcher – frag [BLAST]",
            '36"',
            "2D6",
            "3+",
            "4",
            "0",
            "1",
          ],
          [
            "Cyclone missile launcher – krak",
            '36"',
            "2",
            "3+",
            "9",
            "-2",
            "D6",
          ],
          [
            "Heavy flamer [IGNORES COVER, TORRENT]",
            '12"',
            "D6",
            "N/A",
            "5",
            "-1",
            "1",
          ],
          [
            "Plasma cannon – standard [BLAST]",
            '36"',
            "D3",
            "3+",
            "7",
            "-2",
            "1",
          ],
          [
            "Plasma cannon – supercharge [BLAST, HAZARDOUS]",
            '36"',
            "D3",
            "3+",
            "8",
            "-3",
            "2",
          ],
          ["Storm bolter [RAPID FIRE 2]", '24"', "2", "3+", "4", "0", "1"],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Chainfist [ANTI-VEHICLE 3+]", "MELEE", "3", "4+", "8", "-2", "2"],
          ["Power fist", "MELEE", "3", "3+", "8", "-2", "2"],
          ["Power weapon", "MELEE", "4", "3+", "5", "-2", "1"],
          [
            "Thunder hammer [DEVASTATING WOUNDS]",
            "MELEE",
            "3",
            "4+",
            "8",
            "-2",
            "2",
          ],
          [
            "Twin lightning claws [TWIN-LINKED]",
            "MELEE",
            "5",
            "3+",
            "5",
            "-2",
            "1",
          ],
        ],
      },
      equipo: [
        "Hasta 3 Deathwatch Terminators pueden reemplazar su storm bolter con uno de los siguientes:",
        "1 assault cannon",
        "1 heavy flamer",
        "1 plasma cannon",
        "1 cyclone missile launcher y 1 storm bolter (el storm bolter de este modelo no puede ser reemplazado)",
        "Cualquier número de modelos puede reemplazar su power fist y storm bolter con uno de los siguientes:",
        "1 storm bolter y 1 power weapon",
        "1 storm bolter y 1 chainfist",
        "1 twin lightning claws",
        "1 thunder hammer y 1 storm shield",
      ],
    }, //Deathwatch Terminator Squad
    {
      nombre: "Veteran Bike Squad",
      imagen: require("../assets/images/VeteranBikeSquadDeathWatch.png"),
      habilidades: [
        { nombre: "Facción", descripcion: "Adeptus Astartes, Deathwatch" },
        {
          nombre: "Turbo-boost",
          descripcion:
            'Cada vez que esta unidad Avance, no hagas una tirada de Avance para ella. En su lugar, hasta el final de la fase, agrega 6" a la característica de Movimiento de los modelos en esta unidad.',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Bolt pistol [PISTOL]", '12"', "1", "3+", "4", "0", "1"],
          [
            "Long Vigil ranged weapon [ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1]",
            '24"',
            "1",
            "4+",
            "4",
            "0",
            "1",
          ],
          ["Twin boltgun [TWIN-LINKED]", '24"', "2", "3+", "4", "0", "1"],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Close combat weapon", "MELEE", "3", "3+", "4", "0", "1"],
          ["Long Vigil melee weapon", "MELEE", "3", "3+", "5", "-2", "1"],
          [
            "Xenophase blade [DEVASTATING WOUNDS]",
            "MELEE",
            "4",
            "3+",
            "5",
            "-2",
            "1",
          ],
        ],
      },
      equipo: [
        "El Veteran Biker Sergeant puede estar equipado con uno de los siguientes:",
        "1 Long Vigil ranged weapon",
        "1 Long Vigil melee weapon",
        "1 xenophase blade",
        "1 Astartes shield",
        "Cualquier número de modelos Veteran Biker puede estar equipado con 1 Long Vigil melee weapon.",
      ],
    }, //Veteran Bike Squad
    {
      nombre: "Corvus Blackstar",
      imagen: require("../assets/images/CorvusBlackstarDeathWatch.png"),
      habilidades: [
        { nombre: "Facción", descripcion: "Adeptus Astartes, Deathwatch" },
        {
          nombre: "Deadly Demise D6",
          descripcion:
            "Cuando este modelo muere, realiza una tirada de D6. En 1-3, el modelo sufre D3 mortal wounds.",
        },
        {
          nombre: "Hover",
          descripcion:
            "Este modelo puede moverse como si tuviera la habilidad Fly.",
        },
        {
          nombre: "Stealth",
          descripcion:
            "Este modelo puede beneficiarse de la habilidad Stealth.",
        },
        {
          nombre: "Blackstar Cluster Launcher",
          descripcion:
            "Cada vez que este modelo termina un movimiento normal, puedes seleccionar una unidad enemiga sobre la que haya pasado durante ese movimiento y tirar 6D6. Por cada 5+, esa unidad sufre 1 herida mortal.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          [
            "Blackstar rocket launcher [BLAST]",
            '30"',
            "D6+1",
            "3+",
            "5",
            "0",
            "1",
          ],
          [
            "Hurricane bolter [RAPID FIRE 6, TWIN-LINKED]",
            '24"',
            "6",
            "3+",
            "4",
            "0",
            "1",
          ],
          ["Stormstrike missile launcher", '48"', "1", "3+", "10", "-2", "3"],
          [
            "Twin assault cannon [DEVASTATING WOUNDS, TWIN-LINKED]",
            '24"',
            "6",
            "3+",
            "6",
            "0",
            "1",
          ],
          [
            "Twin lascannon [TWIN-LINKED]",
            '48"',
            "1",
            "3+",
            "12",
            "-3",
            "D6+1",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Armoured hull", "MELEE", "3", "4+", "6", "0", "1"]],
      },
      equipo: [
        "Este modelo puede estar equipado con uno de los siguientes:",
        "1 auspex array",
        "1 infernum halo-launcher",
        "Este modelo puede reemplazar su cañón de asalto gemelo con 1 cañón láser gemelo.",
        "Este modelo puede reemplazar sus 2 lanzacohetes Blackstar con 2 lanzamisiles Stormstrike.",
        "Este modelo puede estar equipado con 1 hurricane bolter.",
      ],
      transporte: [
        "Este modelo tiene una capacidad de transporte de 12 modelos de Infantería Adeptus Astartes o una unidad Kill Team.",
        "Cada modelo con Jump Pack, Gravis o Terminator ocupa el espacio de 2 modelos.",
        "Cada modelo Mounted ocupa el espacio de 3 modelos.",
      ],
    }, //Corvus Blackstar

    // Agrega más personajes aquí siguiendo el mismo formato
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
    backgroundColor: "#1a1a1a",
  },
});
