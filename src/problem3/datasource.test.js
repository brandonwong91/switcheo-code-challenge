let Datasource = require('./datasource.js');

test('Testing the return of promise with an array of prices', async () => {

    await Datasource.getPrices().then(
        data => expect(data).toEqual(expect.any(Array)));

  });