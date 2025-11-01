export const Versos = [
  {
    textoAnterior: "Aquí me pongo a cantar,",
    parteFaltanteCorrecta: "al compás de la vigüela",
    opciones: [
      "al compás de la vigüela",
      "porque pierdo la rienda",
      "con pena y con yerba",
      "y el sol en la espalda"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Se ha perdido la patria mía,",
    parteFaltanteCorrecta: "si no la cuida el paraguayo",
    opciones: [
      "si no la cuida el paraguayo",
      "pues todo el mundo la olvida",
      "y la noche se hizo fría",
      "porque falta la bandera"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Yo no soy de los que olvidan,",
    parteFaltanteCorrecta: "mi caballo y mi gauchada",
    opciones: [
      "mi caballo y mi gauchada",
      "la pena ni la amargura",
      "ni el viento que me llama",
      "mi sombra en la jornada"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Ya se me está saliendo el sol,",
    parteFaltanteCorrecta: "y la noche se encrespa",
    opciones: [
      "y la noche se encrespa",
      "y el campo me llama",
      "con cantos y con luna",
      "cuando nace la espera"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Yo a la costa me vine a ir,",
    parteFaltanteCorrecta: "porque el mundo me estorbaba",
    opciones: [
      "porque el mundo me estorbaba",
      "con su ruido y su bulla",
      "sin un mango en el zurrón",
      "y la vida me pesaba"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Si la muerte me sorprende,",
    parteFaltanteCorrecta: "que me encuentre con la frente",
    opciones: [
      "que me encuentre con la frente",
      "bajo el sauce lloroso",
      "sin el lazo en la mano",
      "y el poncho en la garganta"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Vengan de a uno los negocios,",
    parteFaltanteCorrecta: "que yo los miro de frente",
    opciones: [
      "que yo los miro de frente",
      "siempre presto la rienda",
      "con guitarra y pañuelo",
      "porque cuido la hacienda"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Yo no quiero más que la paz,",
    parteFaltanteCorrecta: "y un rancho en la pradera",
    opciones: [
      "y un rancho en la pradera",
      "con vino y buen compañero",
      "que me arrulle la guitarra",
      "donde el río se muera"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Cuídense de la traición,",
    parteFaltanteCorrecta: "como cuidan el rosario",
    opciones: [
      "como cuidan el rosario",
      "como cuidan el rebenque",
      "con la punta del cuchillo",
      "y el humo del fogón"
    ],
    correctIndex: 0
  },
  {
    textoAnterior: "Y si a la patria vuelvo,",
    parteFaltanteCorrecta: "será con la frente alta",
    opciones: [
      "será con la frente alta",
      "con las manos vacías",
      "sin más que mi nostalgia",
      "y el poncho en la espalda"
    ],
    correctIndex: 0
  }
];

export function obtenerVerso(indice) {
  return Versos[indice % Versos.length];
}

export const TOTAL_PARA_GANAR = 10; // cantidad minima de versos para ganar
