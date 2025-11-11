export const Versos = [
  {
    textoAnterior: `Aquí me pongo a cantar
al compás de la vigüela,
que el hombre que lo desvela
una pena estrordinaria,
como la ave solitaria
`,
    parteFaltanteCorrecta: "con el cantar se consuela…",
    opciones: [
      "con el cantar se consuela…",
      "cuando lo llama la batasha…",
      "no sé pero cumple sílabas… "
    ],
    correctIndex: 0
  },
  {
    textoAnterior: `Mientras suene el encordao,
    Mientras encuentre el compás,
    Yo no he de quedarme atrás
    Sin defender la parada
    Y he jurado que jamás
    `,
    parteFaltanteCorrecta: "Me la han de llevar robada",
    opciones: [
      "Me dejarán a la tirada",
      "Me la han de llevar robada",
      "Me callarán en la payada"
    ],
    correctIndex: 1
  },
  {
    textoAnterior: `A un cantor le llaman bueno
    Cuando es mejor que los piores;
    Y sin ser de los mejores,
    Encontrándose dos juntos,
    Es deber de los cantores
    `,
    parteFaltanteCorrecta: "El cantar de contra-punto.",
    opciones: [
      "No temblar en la payada",
      "Vigüelear como un benteveo",
      "El cantar de contra-punto."
    ],
    correctIndex: 2
  },
  {
    textoAnterior: `El hombre debe mostrarse
    Cuando la ocasión le llegue.
    Hace mal el que se niegue
    Dende que lo sabe hacer,
    Y muchos suelen tener
    `,
    parteFaltanteCorrecta: "Vanagloria en que los rueguen.",
    opciones: [
      "El honor de un gil atarre",
      "Vanagloria en que los rueguen.",
      "Gloria ante la muerte"
    ],
    correctIndex: 1
  },
  {
    textoAnterior: `Cuando mozo fui cantor.
    Es una cosa muy dicha.
    Mas la suerte se encapricha
    Y me persigue costante:
    De ese tiempo en adelante
    `,
    parteFaltanteCorrecta: "Canté mis propias desdichas.",
    opciones: [
      "No me maté de suerte",
      "el destino me fue errante.",
      "Canté mis propias desdichas."
    ],
    correctIndex: 2
  },
  {
    textoAnterior: `Y aquellos años dichosos
    Tratará de recordar;
    Veré si puedo olvida
    Tan desgraciada mudanza.
    Y quien se tenga confianza
    `,
    parteFaltanteCorrecta: "No se achique el remil gil",
    opciones: [
      "Que se re pare de manos",
      "No se achique el remil gil",
      "Tiemple y vamos a cantar."
    ],
    correctIndex: 1
  },
  {
    textoAnterior: `Y el cantor que se presiente,
    Que tenga o no quien lo ampare,
    No espere que yo dispare,
    Aunque su saber sea mucho.
    Vamos en el mesmo pucho
    `,
    parteFaltanteCorrecta: "A prenderle hasta que aclare.",
    opciones: [
      "A darle sin nada de piedad",
      "A cocinar como las chinas",
      "A prenderle hasta que aclare."
    ],
    correctIndex: 2
  },
  {
    textoAnterior: `Y seguiremos, si gusta,
    Hasta que se vaya el día.
    Era la costumbre mía
    Cantar las noches enteras.
    Había entonces, donde quiera,
    `,
    parteFaltanteCorrecta: "Cantores de fantasía",
    opciones: [
      "Pichis de Olavarría",
      "Abolicionistas de garcas",
      "Cantores de fantasía"
    ],
    correctIndex: 2
  },
  {
    textoAnterior: `Y si alguno no se atrevo
    A seguir la caravana,
    O si cantando no gana,
    Se lo digo sin lisonja:
    Haga sonar una esponja
    `,
    parteFaltanteCorrecta:  "O ponga cuerdas de lana.",
    opciones: [
      "Y use una tanga roja.",
      "Antes que perder la parada.",
      "O ponga cuerdas de lana."
    ],
    correctIndex: 2
  }
];


export function obtenerVerso(indice) {
  return Versos[indice % Versos.length];
}

export const TOTAL_PARA_GANAR = 10; // cantidad minima de versos para ganar
