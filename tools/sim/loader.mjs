// Подменяет импорт 'three' на vendor/three.min.js (в браузере это делает importmap)
export async function resolve(spec, ctx, next) {
  if (spec === 'three') return { url: new URL('../../vendor/three.min.js', import.meta.url).href, shortCircuit: true };
  return next(spec, ctx);
}
