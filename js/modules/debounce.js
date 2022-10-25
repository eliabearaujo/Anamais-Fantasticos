export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
// Uma função que retorna outra função.
// A função debounce é chamada e recebe uma função de callback que será executada após certo delay.
// Essa função retorna uma função que caso o timer exista, executa a função de callback e atribui null ao timer
