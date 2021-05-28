const cities = new Set();

export function initializeCityDatabase() {
  console.log('-2- init db');

  return new Promise((resolve) => {
    setTimeout(() => {
      [
        'Moscow',
        'Saint Petersburg',
        'Novosibirsk',
        'Yekaterinburg',
        'Kazan',
        'Nizhny Novgorod',
        'Chelyabinsk',
        'Samara',
        'Omsk',
        'Rostov-on-Don'
      ].forEach(city => cities.add(city));
      resolve();
    }, 100);
  });
}

export function clearCityDatabase() {
  console.log('-2- clear db');

  return new Promise((resolve) => {
    setTimeout(() => {
      cities.clear();
      resolve();
    }, 100);
  });
}

export function isCity(city) {
  console.log('-2- is city');
  return cities.has(city);
}
