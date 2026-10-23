/** Utilidades de proyectos: nombres de ciudad y la regla de no publicar datos "por confirmar" (docs/SPEC.md §4). */
export const CITY = {
  lima: 'Lima',
  ica: 'Ica',
  chiclayo: 'Chiclayo',
  chimbote: 'Chimbote',
  pucallpa: 'Pucallpa',
  cusco: 'Cusco',
} as const;

export const isKnown = (v: string) => Boolean(v) && !/confirmar/i.test(v);

/** Ubicación publicable: la dirección si está confirmada; si no, la ciudad. */
export const placeLabel = (d: { place: string; city: keyof typeof CITY }) => (isKnown(d.place) ? d.place : CITY[d.city]);
