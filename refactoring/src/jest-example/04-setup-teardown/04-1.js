const cities = new Set();

export function initializeCityDatabase() {
  console.log('-1- init db');
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
}

export function clearCityDatabase() {
  console.log('-1- clear db');
  cities.clear();
}

export function isCity(city) {
  console.log('-1- is city');
  return cities.has(city);
}
