import {initializeCityDatabase, clearCityDatabase, isCity} from './04-1';

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Moscow', () => {
  expect(isCity('Moscow')).toBeTruthy();
});

test('city database has Samara', () => {
  expect(isCity('Samara')).toBeTruthy();
});
