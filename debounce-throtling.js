function debounce(fn, time) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(time);
    timer = setTimeout(() => {
      fn(args);
      timer = undefined;
    }, time);
  };
}

function throtling(fn, time) {
  let flag = null;
  return function (...args) {
    if (flag === null) {
      fn(...args);
      flag = setTimeout(() => {
        flag = null;
      }, time);
    }
  };
}
