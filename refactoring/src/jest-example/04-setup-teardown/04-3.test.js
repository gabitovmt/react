import {initializeCityDatabase, initializeFoodDatabase, isCity, isValidCityFoodPair} from "./04-3";

beforeEach(() => {
  return initializeCityDatabase();
});

test('city database has Moscow', () => {
  expect(isCity('Moscow')).toBeTruthy();
});

test('city database has Omsk', () => {
  expect(isCity('Omsk')).toBeTruthy();
});

describe('matching cities to foods', () => {
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Moscow - Rostov on Don', () => {
    expect(isValidCityFoodPair('Moscow', 'Rostov-on-Don')).toBe(true);
  });

  test('Omsk - Novosibirsk', () => {
    expect(isValidCityFoodPair('Omsk', 'Novosibirsk')).toBe(true);
  });
});
