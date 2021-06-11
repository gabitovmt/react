import foo from './05-foo';
jest.mock('./05-foo');

test('mockImplementation', () => {
  foo.mockImplementation(() => 42);
  expect(foo()).toBe(42);
});

test('mockImplementationOnce', () => {
  expect.assertions(4);

  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));

  myMockFn((err, val) => {
    expect(err).toBeNull();
    expect(val).toBe(true);
  });

  myMockFn((err, val) => {
    expect(err).toBeNull();
    expect(val).toBe(false);
  });
});

test('mockImplementation & mockImplementationOnce', () => {
  expect.assertions(4);

  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

  expect(myMockFn()).toBe('first call');
  expect(myMockFn()).toBe('second call');
  expect(myMockFn()).toBe('default');
  expect(myMockFn()).toBe('default');
});

test('mockReturnThis', () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis()
  }

  expect(myObj.myMethod()).toBe(myObj);
});
