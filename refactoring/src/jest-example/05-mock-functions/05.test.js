test('using a mock function', () => {
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // Mock функция вызвана дважды
  expect(mockCallback.mock.calls.length).toBe(2);

  // Первый аргумент первого вызова функции был 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // Первый аргумент второго вызова функции был 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // Возвращаемое значение первого вызова функции было 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

test('.mock', () => {
  const myMock = jest.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  expect(myMock.mock.instances[0] === a).toBe(true);
  expect(myMock.mock.instances[1] === b).toBe(true);
});
