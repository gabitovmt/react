const cities = new Set();
const routers = new Map();

export function initializeCityDatabase() {
  console.log('-3- init db');

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

function addRoute(city1, city2) {
  routers.get(city1).add(city2);
  routers.get(city2).add(city1);
}

export function initializeFoodDatabase() {
  console.log('-3- init food db');

  return new Promise((resolve) => {
    setTimeout(() => {
      for (const city of cities.keys()) {
        routers.set(city, new Set());
      }

      addRoute('Moscow', 'Saint Petersburg');
      addRoute('Moscow', 'Nizhny Novgorod');
      addRoute('Moscow', 'Rostov-on-Don');
      addRoute('Nizhny Novgorod', 'Rostov-on-Don');
      addRoute('Nizhny Novgorod', 'Samara');
      addRoute('Nizhny Novgorod', 'Kazan');
      addRoute('Kazan', 'Rostov-on-Don');
      addRoute('Kazan', 'Samara');
      addRoute('Kazan', 'Yekaterinburg');
      addRoute('Kazan', 'Chelyabinsk');
      addRoute('Samara', 'Rostov-on-Don');
      addRoute('Samara', 'Yekaterinburg');
      addRoute('Samara', 'Chelyabinsk');
      addRoute('Yekaterinburg', 'Chelyabinsk');
      addRoute('Yekaterinburg', 'Omsk');
      addRoute('Chelyabinsk', 'Omsk');
      addRoute('Omsk', 'Novosibirsk');

      resolve();
    }, 100);
  });
}

export function isCity(city) {
  console.log('-3- is city');
  return cities.has(city);
}

export function isValidCityFoodPair(city1, city2) {
  console.log('-3- valid city food pair')
  return routers.has(city1) && routers.get(city1).has(city2) || routers.has(city2) && routers.get(city2).has(city1);
}
