import {fetchData, fetchDataPromise} from "./a";

// Don't do this!
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

test('the data is peanut butter (right version)', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test('the data is peanut butter (promise version)', () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe('peanut butter');
  })
});
