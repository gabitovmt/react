import {clearCityDatabase, initializeCityDatabase, isCity} from "./04-2";

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Moscow', () => {
  expect(isCity('Moscow')).toBeTruthy();
});

test('city database has Samara', () => {
  expect(isCity('Samara')).toBeTruthy();
});
