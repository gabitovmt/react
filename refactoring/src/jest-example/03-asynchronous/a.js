export function fetchData(callback) {
  setTimeout(() => callback('peanut butter'), 1000);
}

export function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve('peanut butter'), 1000);
  });
}
