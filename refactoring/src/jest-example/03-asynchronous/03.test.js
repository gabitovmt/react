import {fetchData, fetchDataResolve, fetchDataReject} from "./03";

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
  return fetchDataResolve().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error (promise version)', () => {
  expect.assertions(1);
  return fetchDataReject().catch(e => {
    expect(e).toMatch('error');
  });
});

test('the data is peanut butter (resolves version)', () => {
  return expect(fetchDataResolve()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error (rejects version)', () => {
  return expect(fetchDataReject()).rejects.toMatch('error');
});

test('the data is peanut butter (async version)', async () => {
  const data = await fetchDataResolve();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error (async version)', async () => {
  expect.assertions(1);
  try {
    await fetchDataReject();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter (async & resolves version)', async () => {
  await expect(fetchDataResolve()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error (async & rejects version)', async () => {
  await expect(fetchDataReject()).rejects.toMatch('error');
});
