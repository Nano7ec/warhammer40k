import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Personaje from "../app/DeathGuardPersonajes";

export default function MiniDeathGuard() {
  // Datos de los personajes de Death Guard
  const personajes = [
    {
      nombre: "Typhus, Heraldo de Nurgle",
      imagen: require("../assets/images/TyphusDeathGuard.png"),
      habilidades: [
        {
          nombre: "Nurgle's Gift",
          descripcion:
            "Inflige -1 a la resistencia de las unidades enemigas cercanas.",
        },
        { nombre: "Facción", descripcion: "Plaga de la Ruina" },
        {
          nombre: "Lord of Contagion",
          descripcion:
            'Cada vez que esta unidad cause una herida mortal, gana la habilidad [PROPAGACIÓN] y afecta a unidades enemigas a 6" adicionales.',
        },
        {
          nombre: "Descomposición Imparable",
          descripcion: "Reduce en 1 el daño recibido por ataque (mínimo 1).",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Plague Spitter", '12"', "D6", "3+", "5", "-1", "1"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Manreaper", "MELEE", "5", "2+", "7", "-2", "2"]],
      },
    }, //Typhus
    {
      nombre: "Daemon Prince with Wings",
      imagen: require("../assets/images/DaemonPrinceWithWingsDeathGuard.png"), // Ajusta la ruta según tu archivo
      habilidades: [
        {
          nombre: "Deadly Demise D3",
          descripcion:
            "Cuando esta unidad es destruida, puede infligir daño mortal a unidades cercanas (D3).",
        },
        {
          nombre: "Nurgle’s Gift (Aura)",
          descripcion:
            "Reduce la Resistencia de las unidades enemigas cercanas en -1.",
        },
        {
          nombre: "Warp Horror (Psychic)",
          descripcion:
            "Cada vez que este modelo termine un movimiento de carga, una unidad enemiga en rango de combate debe realizar una prueba de Battle-shock.",
        },
        {
          nombre: "Devastating Assault",
          descripcion:
            "Cada vez que este modelo termine un movimiento de carga, sus armas Hellforged ganan la habilidad [DEVASTATING WOUNDS] hasta el final del turno.",
        },
        {
          nombre: "Invulnerable Save",
          descripcion: "Posee una salvación invulnerable de 4+.",
        },
      ],
      armasDistancia: {
        headers: ["Nombre", "Rango", "A", "BS", "S", "AP", "D"],
        rows: [["Plague Spewer", '12"', "D6", "N/A", "5", "-1", "1"]],
      },
      armasCuerpo: {
        headers: ["Nombre", "Rango", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Hellforged Weapons - Strike", "MELEE", "6", "2+", "8", "-2", "3"],
          ["Hellforged Weapons - Sweep", "MELEE", "14", "2+", "6", "0", "1"],
        ],
      },
    }, //DaemonPrince Whit Wings
    {
      nombre: "Daemon Prince",
      imagen: require("../assets/images/DaemonPrinceDeathGuard.png"),
      habilidades: [
        {
          nombre: "Deadly Demise D3",
          descripcion:
            "Cuando esta unidad es destruida, puede infligir daño mortal a unidades cercanas (D3).",
        },
        {
          nombre: "Nurgle’s Gift (Aura)",
          descripcion:
            "Reduce la Resistencia de las unidades enemigas cercanas en -1.",
        },
        {
          nombre: "Grandfather’s Blessing (Aura, Psychic)",
          descripcion:
            "Mientras una unidad de Infantería Death Guard esté dentro del rango de contagio de este modelo, los modelos de esa unidad tienen la habilidad *Feel No Pain 6+*.",
        },
        {
          nombre: "Invulnerable Save",
          descripcion: "Posee una salvación invulnerable de 4+.",
        },
      ],
      armasDistancia: {
        headers: ["Nombre", "Rango", "A", "BS", "S", "AP", "D"],
        rows: [["Plague Spewer", '12"', "D6", "N/A", "5", "-1", "1"]],
      },
      armasCuerpo: {
        headers: ["Nombre", "Rango", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Hellforged Weapons - Strike", "MELEE", "6", "2+", "8", "-2", "3"],
          ["Hellforged Weapons - Sweep", "MELEE", "14", "2+", "6", "0", "1"],
        ],
      },
    }, //Daemon Prince
    {
      nombre: "Chaos Lord",
      imagen: require("../assets/images/ChaosLordDeathGuard.png"),
      habilidades: [
        {
          nombre: "Leader",
          descripcion: "Puede liderar una unidad, mejorando sus capacidades.",
        },
        {
          nombre: "Nurgle’s Gift (Aura)",
          descripcion:
            "Reduce la Resistencia de las unidades enemigas cercanas en -1.",
        },
        {
          nombre: "Chaos Lord",
          descripcion:
            "Mientras lidera una unidad, cada vez que un modelo de esa unidad realiza un ataque, puede repetir una tirada para impactar de 1.",
        },
        {
          nombre: "Desiccation Conduit (Aura)",
          descripcion:
            "Mientras una unidad enemiga esté dentro del rango de contagio de este modelo, al final del turno, lanza un D6: con un 4+, esa unidad sufre D3 heridas mortales.",
        },
        {
          nombre: "Invulnerable Save",
          descripcion: "Posee una salvación invulnerable de 4+.",
        },
      ],
      armasDistancia: {
        headers: ["Nombre", "Rango", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Combi-weapon", '24"', "1", "2+", "4", "0", "1"],
          ["Plague Bolt Pistol", '12"', "1", "2+", "4", "0", "1"],
          ["Plague Combi-bolter", '24"', "2", "2+", "4", "0", "1"],
          ["Plasma Pistol (Standard)", '12"', "1", "2+", "7", "-2", "1"],
          ["Plasma Pistol (Supercharge)", '12"', "1", "2+", "8", "-3", "2"],
        ],
      },
      armasCuerpo: {
        headers: ["Nombre", "Rango", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Astartes Chainsword", "MELEE", "7", "2+", "4", "-1", "1"],
          ["Plague Fist", "MELEE", "5", "3+", "8", "-2", "2"],
          [
            "Plague-encrusted Exalted Weapon",
            "MELEE",
            "6",
            "2+",
            "5",
            "-2",
            "1",
          ],
          ["Twin Lightning Claws", "MELEE", "7", "2+", "5", "-2", "1"],
        ],
      },
    }, //Chaos Lord
    {
      nombre: "Chaos Lord in Terminator Armour",
      imagen: require("../assets/images/ChaosLordInTerminatorArmourDeathGuard.png"), // Ajusta la ruta según tu archivo
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            'Este modelo puede desplegarse en cualquier lugar del campo de batalla fuera del alcance de 9" de las unidades enemigas.',
        },
        {
          nombre: "Leader",
          descripcion:
            "Puede liderar unidades, otorgándoles mejoras de combate.",
        },
        {
          nombre: "Nurgle’s Gift (Aura)",
          descripcion:
            "Reduce la Resistencia de las unidades enemigas cercanas en -1.",
        },
        {
          nombre: "Chaos Lord",
          descripcion:
            "Mientras lidera una unidad, cada vez que un modelo de esa unidad realiza un ataque, puede repetir una tirada para impactar de 1.",
        },
        {
          nombre: "Desiccation Conduit (Aura)",
          descripcion:
            "Mientras una unidad enemiga esté dentro del rango de contagio de este modelo, al final del turno, lanza un D6: con un 4+, esa unidad sufre D3 heridas mortales.",
        },
        {
          nombre: "Invulnerable Save",
          descripcion: "Posee una salvación invulnerable de 4+.",
        },
      ],
      armasDistancia: {
        headers: ["Nombre", "Rango", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Combi-weapon", '24"', "1", "3+", "4", "0", "1"],
          ["Plague Combi-bolter", '24"', "2", "2+", "4", "0", "1"],
        ],
      },
      armasCuerpo: {
        headers: ["Nombre", "Rango", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Chainfist", "MELEE", "5", "3+", "8", "-2", "2"],
          ["Plague Fist", "MELEE", "5", "2+", "8", "-2", "2"],
          [
            "Plague-encrusted Exalted Weapon",
            "MELEE",
            "6",
            "2+",
            "5",
            "-2",
            "1",
          ],
          ["Twin Lightning Claws", "MELEE", "7", "2+", "5", "-2", "1"],
        ],
      },
      opcionesLiderazgo: ["Blightlord Terminators", "Deathshroud Terminators"],
    }, //Chaos Lord In Terminator Armour
    {
      nombre: "Lord of Virulence",
      imagen: require("../assets/images/LordOfVirulenceDeathGuard.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            'Este modelo puede desplegarse en cualquier lugar del campo de batalla fuera del alcance de 9" de las unidades enemigas.',
        },
        {
          nombre: "Leader",
          descripcion:
            "Puede liderar unidades, otorgándoles mejoras de combate.",
        },
        {
          nombre: "Nurgle’s Gift (Aura)",
          descripcion:
            "Reduce la Resistencia de las unidades enemigas cercanas en -1.",
        },
        {
          nombre: "Master of Destruction",
          descripcion:
            "Mientras lidera una unidad, cada vez que un modelo de esa unidad realiza un ataque a distancia, puedes repetir la tirada para herir.",
        },
        {
          nombre: "Blight Bombardment",
          descripcion:
            "Cada vez que un modelo Death Guard amigo realiza un ataque con un arma *Blast* contra una unidad visible para este modelo, suma 1 a la tirada para impactar y ese ataque gana la habilidad *IGNORES COVER*.",
        },
        {
          nombre: "Invulnerable Save",
          descripcion: "Posee una salvación invulnerable de 4+.",
        },
      ],
      armasDistancia: {
        headers: ["Nombre", "Rango", "A", "BS", "S", "AP", "D"],
        rows: [["Twin Plague Spewer", '12"', "D6", "N/A", "5", "-1", "1"]],
      },
      armasCuerpo: {
        headers: ["Nombre", "Rango", "A", "WS", "S", "AP", "D"],
        rows: [["Heavy Plague Fist", "MELEE", "5", "3+", "8", "-2", "2"]],
      },
      opcionesLiderazgo: ["Blightlord Terminators", "Deathshroud Terminators"],
    }, //Lord of Virulence
    {
      nombre: "Lord of Contagion",
      imagen: require("../assets/images/LordOfContagionDeathGuard.png"),
      habilidades: [
        {
          nombre: "Deep Strike",
          descripcion:
            'Este modelo puede desplegarse en cualquier lugar del campo de batalla fuera del alcance de 9" de las unidades enemigas.',
        },
        {
          nombre: "Leader",
          descripcion:
            "Puede liderar unidades, otorgándoles mejoras de combate.",
        },
        {
          nombre: "Nurgle’s Gift (Aura)",
          descripcion:
            "Reduce la Resistencia de las unidades enemigas cercanas en -1.",
        },
        {
          nombre: "Vector of Disease",
          descripcion:
            "Mientras lidera una unidad, cada vez que un modelo de esa unidad realice un ataque cuerpo a cuerpo, puede repetir la tirada para impactar.",
        },
        {
          nombre: "Abundance of Sickness",
          descripcion:
            "En la fase de combate, cada vez que este modelo pierda una herida, tira un D6: en 4+, la unidad enemiga más cercana dentro del alcance de Combate sufre 1 herida mortal.",
        },
        {
          nombre: "Invulnerable Save",
          descripcion: "Posee una salvación invulnerable de 4+.",
        },
      ],
      armasDistancia: {
        headers: ["Nombre", "Rango", "A", "BS", "S", "AP", "D"],
        rows: [["Twin Plague Spewer", '12"', "D6", "N/A", "5", "-1", "1"]],
      },
      armasCuerpo: {
        headers: ["Nombre", "Rango", "A", "WS", "S", "AP", "D"],
        rows: [
          ["Plagueblade – Strike", "MELEE", "5", "2+", "8", "-2", "3"],
          ["Plagueblade – Sweep", "MELEE", "10", "2+", "5", "0", "1"],
        ],
      },
      opcionesLiderazgo: ["Blightlord Terminators", "Deathshroud Terminators"],
    }, //Lord Of Contagion
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
    backgroundColor: "#0a1e0a",
  },
});
