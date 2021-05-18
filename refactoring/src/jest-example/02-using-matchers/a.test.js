// expect(..) возвращает объект ожиданий.
// У объекта ожиданий вызываем методы-вычислители, например, toBe(..)

// Стандартные сопоставления
test('Два плюс два равно четыре', () => {
  expect(2 + 2).toBe(4); // использует Object.is
});

test('присваивание объекту', () => {
  const data = {один: 1};
  data['два'] = 2;
  expect(data).toEqual({один: 1, два: 2}); // Рекурсивно проверяет каждое поле объекта или массива
});

test('сложение положительных чисел не равно нулю', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0); // not - противоположность вычислителю
    }
  }
});

// Правдивость
test('null', () => {
  const n = null;
  expect(n).toBeNull(); // === null
  expect(n).toBeDefined(); // !== undefined
  expect(n).not.toBeUndefined(); // === undefined
  expect(n).not.toBeTruthy(); // true, если использовать в if
  expect(n).toBeFalsy(); // false, если использовать в if
});
