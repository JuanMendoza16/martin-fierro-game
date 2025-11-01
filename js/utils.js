export function calcularTamFuente(texto, contenedorAltura) {
  const base = texto.length < 80 ? 0.06 : 0.045;
  return Math.max(12, Math.floor(contenedorAltura * base));
}

export function guardarProgreso(obj) {
  try {
    localStorage.setItem('payada_progreso', JSON.stringify(obj));
  } catch(e) {
    console.warn('No se pudo guardar progreso', e);
  }
}

export function cargarProgreso() {
  try {
    const raw = localStorage.getItem('payada_progreso');
    return raw ? JSON.parse(raw) : null;
  } catch(e) {
    return null;
  }
}
