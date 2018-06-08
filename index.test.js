const searchDocument = require('./index');

test('search without error', () => {
  expect.assertions(1);
  return searchDocument({
    query: 'yapay zeka',
    hitsPerPage: 3
  }).then(data => {
    expect(data.length).not.toBe(0);
  });
});
