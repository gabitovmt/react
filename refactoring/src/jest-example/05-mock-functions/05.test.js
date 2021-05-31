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

test('Значения возвращаемые имитаторами', () => {
  const myMock = jest.fn();
  console.log(myMock());  // undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
  console.log(myMock(), myMock(), myMock(), myMock());  // 10 x true true

  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));

  console.log(result);  // [11]
  console.log(filterTestFn.mock.calls); // [[11], [12]]
});

test('Mock Names', () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42');

  console.log(myMockFn.getMockName());            // add42
  console.log(myMockFn.getMockImplementation());  // [Function (anonymous)]
});

test('Пользовательские матчеры', () => {
  const mockFunc = jest.fn().mockName('a mock name');
  const arg1 = 'a';
  const arg2 = 1;

  mockFunc(arg1, arg2);
  expect(mockFunc).toHaveBeenCalled();
  expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);
  expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);
  // All calls and the name of the mock is written as a snapshot
  // expect(mockFunc).toMatchSnapshot();

  expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
  expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([arg1, arg2]);
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(arg1);
  expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
  expect(mockFunc.getMockName()).toBe('a mock name');
});
