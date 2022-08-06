export function prepare<F extends () => any>(f: F): ReturnType<F> {
  return f();
}