export interface Quality {
  id: string,
  startedAt: string,
  gathering: Gathering[],
}

export interface Gathering {
  id: string,
  param: string,
  required: number,
  analyzed:  number,
  conformity:  number,
}

const COLOR = "Cor aparente - 15UH";
const TURBIDITY = "Turbidez - 5.0 UT";
const CHLORINE = "Cloro - Min 0,2 mg/l";
const ESCHERICHIA = "Eschirichia Coli";
const TOTAL_COLIFORMS = "Coliformes Totais";

export const PARAM = {
  COLOR: COLOR,
  TURBIDITY: TURBIDITY,
  CHLORINE: CHLORINE,
  ESCHERICHIA: ESCHERICHIA,
  TOTAL_COLIFORMS: TOTAL_COLIFORMS,
} as const;

export const params = [
  {title: "COLOR", value: PARAM.COLOR},
  {title: "TURBIDITY",value: PARAM.TURBIDITY},
  {title: "CHLORINE",value: PARAM.CHLORINE},
  {title: "ESCHERICHIA" ,value: PARAM.ESCHERICHIA},
  {title: "TOTAL_COLIFORMS",value: PARAM.TOTAL_COLIFORMS},
]

export type PARAM = typeof PARAM[keyof typeof PARAM];
