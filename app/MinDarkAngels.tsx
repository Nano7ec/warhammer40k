import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Personaje from "../app/DarkAngelsPersonajes"; // Importa el componente Personaje

export default function MiniDarkAngels() {
  // Datos de los personajes
  const personajes = [
    {
      nombre: "Azrael",
      imagen: require("../assets/images/AzraelDarkAngels.png"),
      habilidades: [
        { nombre: "Core", descripcion: "Líder" },
        { nombre: "Facción", descripcion: "Juramento del Momento" },
        {
          nombre: "Gran Maestro de la Deathwing",
          descripcion:
            "Mientras lidera una unidad, si un modelo de esa unidad obtiene un impacto crítico, ese ataque tiene la habilidad [PRECISIÓN].",
        },
        {
          nombre: "Golpes de Retribución",
          descripcion:
            "Cada vez que este modelo recibe un ataque cuerpo a cuerpo, lanza un dado de 6 caras (máx. seis por unidad atacante). Por cada 2+, la unidad atacante sufre 1 herida mortal.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Lion’s Wrath", '24"', "2", "2+", "8", "-3", "2"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "BS", "S", "AP", "D"],
        rows: [["The Sword of Silence", "MELEE", "6", "2+", "6", "-2", "2"]],
      },
    }, //Azraael
    {
      nombre: "Belial",
      imagen: require("../assets/images/BelialDarkAngels.png"),
      habilidades: [
        { nombre: "Core", descripcion: "Líder" },
        { nombre: "Facción", descripcion: "Juramento del Momento" },
        {
          nombre: "Líder de la Deathwing",
          descripcion:
            "Mientras lidera una unidad Deathwing, sus ataques tienen la habilidad [LETAL].",
        },
        {
          nombre: "Guardián de los Secretos",
          descripcion:
            "Mientras este modelo está en el campo de batalla, puedes repetir tiradas de liderazgo fallidas para unidades Deathwing amigas.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Storm Bolter", '24"', "4", "3+", "4", "0", "1"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Sword of Silence", "MELEE", "5", "2+", "6", "-3", "3"]],
      },
    }, //Belial
    {
      nombre: "Sammael",
      imagen: require("../assets/images/SammaelDarkAngels.png"),
      habilidades: [
        { nombre: "Core", descripcion: "Líder" },
        { nombre: "Facción", descripcion: "Juramento del Momento" },
        {
          nombre: "Gran Maestro de la Ravenwing",
          descripcion:
            "Mientras lidera una unidad, esa unidad puede disparar y declarar una carga en un turno en el que haya Avanzado.",
        },
        {
          nombre: "Cortar su Escape",
          descripcion:
            "Cada vez que una unidad enemiga (excepto Monstruos y Vehículos) dentro del rango de Engaged de esta unidad intente Retirarse, los modelos enemigos deben realizar pruebas de Escape Desesperado como si estuvieran Aturdidos por la Batalla. Si ya están Aturdidos, resta 1 a las pruebas de Escape Desesperado.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          ["Bolt Pistol", '12"', "1", "2+", "4", "0", "1"],
          [
            "Master-crafted Plasma Cannon [BLAST]",
            '36"',
            "D3",
            "2+",
            "8",
            "-3",
            "2",
          ],
          [
            "Twin Storm Bolter [RAPID FIRE 2, TWIN-LINKED]",
            '24"',
            "2",
            "2+",
            "4",
            "0",
            "1",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          [
            "The Raven Sword [SUSTAINED HITS 2]",
            "MELEE",
            "6",
            "2+",
            "6",
            "-3",
            "2",
          ],
        ],
      },
      atributos: {
        movimiento: '12"',
        habilidadDeCombate: "2+",
        salvacion: "3+",
        heridas: "7",
        liderazgo: "6+",
        controlDeObjetivos: "2",
        invulnerable: "4+",
      },
      descripcion:
        "Sammael cabalga hacia la batalla sobre Corvex, una reliquia de la Edad Oscura de la Tecnología. Desde este montura antigua, el comandante de la Ravenwing causa daños devastadores con sus cañones y carga al combate con la Raven Sword, una reliquia que nunca pierde su filo.",
    }, //Sammael
    {
      nombre: "Ezekiel",
      imagen: require("../assets/images/EzekielDarkAngels.png"),
      habilidades: [
        { nombre: "Core", descripcion: "Leader" },
        { nombre: "Faction", descripcion: "Oath of Moment" },
        {
          nombre: "Psychic Hood",
          descripcion:
            "Mientras lidera una unidad, los modelos de esa unidad tienen la habilidad Feel No Pain 4+ contra Psychic Attacks.",
        },
        {
          nombre: "Engulfing Fear (Psychic)",
          descripcion:
            'En tu fase de disparo, selecciona una unidad enemiga a 18" de este modelo. Esa unidad enemiga debe realizar un Battle-shock test.',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
          [
            "The Deliverer [PISTOL, PRECISION]",
            '12"',
            "1",
            "2+",
            "4",
            "-1",
            "2",
          ],
          [
            "Mind Wipe [DEVASTATING WOUNDS, PRECISION, PSYCHIC]",
            '12"',
            "1",
            "2+",
            "6",
            "-2",
            "D6",
          ],
          [
            "Mind Wipe (focused) [ANTI-CHARACTER 4+, DEVASTATING WOUNDS, HAZARDOUS, PRECISION, PSYCHIC]",
            '12"',
            "1",
            "2+",
            "6",
            "-2",
            "D6",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          [
            "Traitor’s Bane [ANTI-CHAOS 2+, PSYCHIC]",
            "MELEE",
            "4",
            "2+",
            "6",
            "-2",
            "D3",
          ],
        ],
      },
    }, //Ezekiel
    {
      nombre: "Asmodai",
      imagen: require("../assets/images/AsmodaiDarkAngels.png"),
      habilidades: [
        { nombre: "Core", descripcion: "Leader" },
        { nombre: "Faction", descripcion: "Oath of Moment" },
        {
          nombre: "Exemplar of Hate",
          descripcion:
            "Mientras lidera una unidad, cada vez que un modelo de esa unidad realiza un ataque cuerpo a cuerpo, puedes repetir la tirada para impactar.",
        },
        {
          nombre: "Feared Interrogator",
          descripcion:
            'Al inicio de la fase de combate, cada unidad de personaje enemigo a 6" de este modelo debe realizar un Battle-shock test con un penalizador de -1. Además, cada vez que este modelo destruye a un personaje enemigo con un ataque cuerpo a cuerpo, ganas 1CP.',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Bolt pistol [PISTOL]", '12"', "1", "3+", "4", "0", "1"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          [
            "Blades of Reason [ANTI-CHARACTER 2+, EXTRA ATTACKS, PRECISION]",
            "MELEE",
            "3",
            "2+",
            "4",
            "0",
            "1",
          ],
          ["Crozius arcanum", "MELEE", "5", "2+", "6", "-1", "2"],
        ],
      },
    }, //Asmodai
    {
      nombre: "Ravenwing Talonmaster",
      imagen: require("../assets/images/RavenwingTalonmasterDarkAngels.png"),
      habilidades: [
        { nombre: "Core", descripcion: "Deadly Demise 1, Leader" },
        { nombre: "Faction", descripcion: "Oath of Moment" },
        {
          nombre: "Talonmaster",
          descripcion:
            'Mientras este modelo esté a 3" de una o más unidades amigas Adeptus Astartes Mounted o Adeptus Astartes Fly Vehicle, tiene la habilidad Lone Operative.',
        },
        {
          nombre: "Nowhere to Hide",
          descripcion:
            'Mientras una unidad amiga Adeptus Astartes Mounted o Adeptus Astartes Fly Vehicle esté a 6" de este modelo, las armas a distancia de esa unidad ganan la habilidad [IGNORES COVER].',
        },
        {
          nombre: "Master of Manoeuvre",
          descripcion:
            'Una vez por turno, cuando una unidad enemiga termina un movimiento Normal, de Avance o Fall Back a 9" de este modelo, si este modelo no está en rango de combate con unidades enemigas, puede realizar un movimiento Normal de hasta 6".',
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [
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
            "Twin heavy bolter [SUSTAINED HITS 1, TWIN-LINKED]",
            '36"',
            "3",
            "3+",
            "5",
            "-1",
            "2",
          ],
        ],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [["Power weapon", "MELEE", "5", "3+", "5", "-2", "1"]],
      },
    }, //RavenwingTalonmaster
    {
      nombre: "Lazarus",
      imagen: require("../assets/images/LazarusDarkAngels.png"),
      habilidades: [
        { nombre: "Core", descripcion: "Leader" },
        { nombre: "Faction", descripcion: "Oath of Moment" },
        {
          nombre: "Intractable Will",
          descripcion:
            "Mientras este modelo lidere una unidad, cada vez que un modelo de esa unidad sea destruido por un ataque cuerpo a cuerpo, si ese modelo no ha luchado en esta fase, tira un D6. Con un resultado de 4+, no lo retires del juego; ese modelo destruido puede luchar después de que la unidad atacante haya terminado sus ataques y luego es retirado del juego.",
        },
        {
          nombre: "The Spiritshield Helm",
          descripcion:
            "Este modelo tiene la habilidad Feel No Pain 3+ contra Psychic Attacks y heridas mortales.",
        },
      ],
      armasDistancia: {
        headers: ["AD", "R", "A", "BS", "S", "AP", "D"],
        rows: [["Bolt pistol [PISTOL]", '12"', "1", "2+", "4", "0", "1"]],
      },
      armasCuerpo: {
        headers: ["ACC", "R", "A", "WS", "S", "AP", "D"],
        rows: [
          [
            "Enmity’s Edge [ANTI-PSYKER 2+]",
            "MELEE",
            "6",
            "2+",
            "6",
            "-3",
            "2",
          ],
        ],
      },
    }, //Lazarus
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
