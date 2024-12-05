const { generatePlaceholder } = require('./index');

test('generatePlaceholder should return a base64 string', async () => {
  const result = await generatePlaceholder('./example.jpg');
  expect(result).toMatch(/^data:image\/jpeg;base64,/);
});
