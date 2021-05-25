export function fetchData(callback) {
  setTimeout(() => callback('peanut butter'), 1000);
}

export function fetchDataResolve() {
  return new Promise(resolve => {
    setTimeout(() => resolve('peanut butter'), 1000);
  });
}

export function fetchDataReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('error'), 1000);
  });
}
